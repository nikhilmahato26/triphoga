'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import AboutSection from '@/components/AboutSection'
import FleetSection from '@/components/FleetSection'
import ContactSection from '@/components/ContactSection'
import PackageCard from '@/components/PackageCard'
import Footer from '@/components/Footer'
import { usePackages } from '@/hooks/usePackages'
import { usePhone, useWhatsapp, useEmail, useEmail2 } from '@/hooks/useSettings'
import {
  Phone, MessageCircle, MapPin, Mail, Star, Shield, Clock, Users,
  Building2, ArrowRight, CheckCircle, ChevronDown,
} from 'lucide-react'
import Link from 'next/link'

function ListingSection({ id, eyebrow, titlePre, titleHi, subtitle, items, showAll, setShowAll, onSelect, countFor, bg, defaultEmoji, defaultImg }) {
  const visible = items.filter(i => i.featured !== false)
  if (visible.length === 0) return null
  return (
    <section id={id} style={{ padding: '80px 24px', background: bg }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#7e5233', marginBottom: 10 }}>
            {eyebrow}
          </p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#111', marginBottom: 12 }}>
            {titlePre} <span style={{ color: '#7e5233' }}>{titleHi}</span>
          </h2>
          <p style={{ color: '#6b7280', maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>{subtitle}</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
          {(showAll ? visible : visible.slice(0, 4)).map(item => (
            <button
              key={item.id}
              onClick={() => onSelect(item.name)}
              style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', height: 280, flex: '1 1 280px', maxWidth: 380, cursor: 'pointer', border: 'none', padding: 0, textAlign: 'left', display: 'block', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', transition: 'transform 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.25)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)' }}
            >
              <img src={item.image_url || defaultImg} alt={item.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: item.image_pos || 'center', transition: 'transform 0.5s' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%)' }} />
              <span style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(255,255,255,0.92)', color: '#111', fontWeight: 700, fontSize: 12, padding: '5px 12px', borderRadius: 999 }}>{countFor(item.name)} package{countFor(item.name) !== 1 ? 's' : ''}</span>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5 }}>
                  <MapPin size={13} style={{ color: item.color }} />
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: item.color }}>{item.emoji || defaultEmoji} {item.location || 'Enquire'}</span>
                </div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 26, color: '#fff', marginBottom: 6, lineHeight: 1.1 }}>{item.name}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{item.description || ''}</p>
              </div>
            </button>
          ))}
        </div>

        {visible.length > 4 && (
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <button
              onClick={() => setShowAll(s => !s)}
              style={{ padding: '12px 32px', borderRadius: 999, border: '1.5px solid #7e5233', background: '#fff', color: '#7e5233', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}
            >
              {showAll ? 'Show less' : `Show more (${visible.length - 4})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

const CATEGORY_TABS = [
  { value: 'all',      label: 'All Packages' },
  { value: 'package',  label: 'Packages' },
  { value: 'group',    label: 'Group Packages' },
  { value: 'homestay', label: 'Home Stays' },
  { value: 'houseboat', label: 'Houseboats' },
  { value: 'other',    label: 'Other' },
]

export default function HomePage() {
    const [activeDest, setActiveDest] = useState('all')
  const [destinations, setDestinations] = useState([])
  const [showAllDest, setShowAllDest] = useState(false)
  const [homestays, setHomestays] = useState([])
  const [houseboats, setHouseboats] = useState([])
  const [showAllHS, setShowAllHS] = useState(false)
  const [showAllHB, setShowAllHB] = useState(false)
  const { packages, loaded: pkgsLoaded } = usePackages()
  const phone = usePhone()
  const whatsapp = useWhatsapp()
  const email = useEmail()
  const email2 = useEmail2()
  useEffect(() => {
    fetch('/api/destinations')
      .then(r => r.ok ? r.json() : [])
      .then(setDestinations)
      .catch(() => {})
    fetch('/api/listings?type=homestay')
      .then(r => r.ok ? r.json() : [])
      .then(setHomestays)
      .catch(() => {})
    fetch('/api/listings?type=houseboat')
      .then(r => r.ok ? r.json() : [])
      .then(setHouseboats)
      .catch(() => {})
  }, [])

  const visibleDestinations = destinations.filter(d => d.featured !== false)

  const shown = packages.filter(p => {
    return activeDest === 'all' || p.destination === activeDest
  })

  const selectListing = (category, name) => {
    setActiveDest(name)
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })
  }

  const pkgCount = (name) => packages.filter(p => p.destination === name).length

  return (
    <main style={{ minHeight: '100vh', background: '#fff' }}>
      <Navbar />
      <HeroSlider />
      <AboutSection />

      {/* ── Destinations ── */}
      <section id="destinations" style={{ padding: '80px 24px', background: '#fbf8f1' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#7e5233', marginBottom: 10 }}>
              Where We Go
            </p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#111', marginBottom: 12 }}>
              Our Featured <span style={{ color: '#7e5233' }}>Categories</span>
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
              Handpicked spots across God&apos;s Own Country — from misty hill stations to sun-lit backwaters.
            </p>
          </div>

          {visibleDestinations.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
              {(showAllDest ? visibleDestinations : visibleDestinations.slice(0, 4)).map(dest => (
                <button
                  key={dest.id}
                  onClick={() => {
                    setActiveDest(dest.name)
                    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', height: 280, flex: '1 1 280px', maxWidth: 380, cursor: 'pointer', border: 'none', padding: 0, boxShadow: '0 8px 30px rgba(0,0,0,0.15)', transition: 'transform 0.3s, box-shadow 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.25)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)' }}
                >
                  <img src={dest.image_url || 'https://images.unsplash.com/photo-1637066742971-726bee8d9f56?q=80'} alt={dest.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: dest.image_pos || 'center', transition: 'transform 0.5s' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%)' }} />
                  <span style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(255,255,255,0.92)', color: '#111', fontWeight: 700, fontSize: 12, padding: '5px 12px', borderRadius: 999 }}>{pkgCount(dest.name)} package{pkgCount(dest.name) !== 1 ? 's' : ''}</span>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, textAlign: 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5 }}>
                      <MapPin size={13} style={{ color: dest.color }} />
                      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: dest.color }}>{dest.emoji || '📍'} Explore</span>
                    </div>
                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 26, color: '#fff', marginBottom: 6, lineHeight: 1.1 }}>{dest.name}</h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{dest.description || ''}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {visibleDestinations.length > 4 && (
            <div style={{ textAlign: 'center', marginTop: 36 }}>
              <button
                onClick={() => setShowAllDest(s => !s)}
                style={{ padding: '12px 32px', borderRadius: 999, border: '1.5px solid #7e5233', background: '#fff', color: '#7e5233', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}
              >
                {showAllDest ? 'Show less' : `Show more (${visibleDestinations.length - 4})`}
              </button>
            </div>
          )}
        </div>
      </section>

      
      

      {/* ── Packages ── */}
      <section id="packages" style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#7e5233', marginBottom: 10 }}>
              Curated Experiences
            </p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#111', marginBottom: 12 }}>
              Our <span style={{ color: '#7e5233' }}>Packages</span>
            </h2>
            <p style={{ color: '#9ca3af', maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.6 }}>
              Every package includes a day-wise itinerary, accommodation & transfers.
            </p>

            {/* Category tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
              <button
                onClick={() => setActiveDest('all')}
                style={{
                  padding: '8px 20px', borderRadius: 999, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                  background: activeDest === 'all' ? 'linear-gradient(135deg,#7e5233,#c93d00)' : '#f5f0e8',
                  color: activeDest === 'all' ? '#fff' : '#555',
                }}>
                All Categories
              </button>
              {destinations.map(d => (
                <button
                  key={d.id}
                  onClick={() => setActiveDest(d.name)}
                  style={{
                    padding: '8px 20px', borderRadius: 999, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                    background: activeDest === d.name ? 'linear-gradient(135deg,#7e5233,#c93d00)' : '#f5f0e8',
                    color: activeDest === d.name ? '#fff' : '#555',
                  }}>
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          {!pkgsLoaded ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#9ca3af' }}>
              <div style={{ width: 36, height: 36, border: '3px solid #fbf8f1', borderTop: '3px solid #7e5233', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 12px' }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
              <p style={{ fontSize: 14 }}>Loading packages...</p>
            </div>
          ) : shown.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#9ca3af' }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🗺️</div>
              <p>No packages available for this selection.</p>
              <button onClick={() => { setActiveDest('all') }} style={{ marginTop: 12, padding: '8px 20px', borderRadius: 999, border: 'none', background: '#f5f0e8', color: '#555', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>
                Clear Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
              {shown.map(pkg => <PackageCard key={pkg.id} pkg={pkg} phone={phone} />)}
            </div>
          )}
          
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/packages" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 999, background: '#7e5233', color: '#fff', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              View All Packages <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" style={{ padding: '80px 24px', background: '#fbf8f1' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#7e5233', marginBottom: 10 }}>
              What They Say
            </p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#111', marginBottom: 12 }}>
              Client <span style={{ color: '#7e5233' }}>Testimonials</span>
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
              Real stories from our happy travellers.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { name: 'Anjali Sharma', text: 'Triphoga arranged the most beautiful Munnar trip for us. The itinerary was perfectly balanced and the homestay was breathtaking!' },
              { name: 'Rahul Verma', text: 'Our houseboat experience in Alleppey was magical. The team took care of every single detail. Highly recommend their services.' },
              { name: 'Sarah Jenkins', text: 'A completely hassle-free spiritual tour across Kerala. The guides were knowledgeable and everything went extremely smoothly.' }
            ].map((t, idx) => (
              <div key={idx} style={{ background: '#fff', padding: 32, borderRadius: 20, boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} style={{ color: '#f59e0b', fill: '#f59e0b' }} />)}
                </div>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.6, fontStyle: 'italic', marginBottom: 24 }}>&quot;{t.text}&quot;</p>
                <div style={{ fontWeight: 700, color: '#111', fontSize: 15 }}>- {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#7e5233', marginBottom: 10 }}>
              Visual Journey
            </p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#111', marginBottom: 12 }}>
              Explore Our <span style={{ color: '#7e5233' }}>Gallery</span>
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
              A glimpse into the magical experiences waiting for you.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {[
              "https://images.unsplash.com/photo-1593693397690-362cb96667a0?q=80&w=800",
              "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800",
              "https://images.unsplash.com/photo-1589983846997-04788035bc83?q=80&w=800",
              "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800",
              "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800",
              "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800"
            ].map((src, idx) => (
              <div key={idx} style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <img 
                  src={src} 
                  alt={`Gallery image ${idx + 1}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cursor-pointer' }} 
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FleetSection phone={phone} />
      <ContactSection phone={phone} email={email} whatsapp={whatsapp} />

      <Footer />

      <a href={`https://wa.me/${whatsapp}?text=Hi! I want to book a Kerala trip!`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 999, width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg,#25d366,#128c7e)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 24px rgba(37,211,102,0.5)', textDecoration: 'none' }}>
        <MessageCircle size={26} />
      </a>
    </main>
  )
}
