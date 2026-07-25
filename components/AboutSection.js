'use client'
import { Star, Clock, Shield, Users } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '80px 24px', background: '#fbf8f1' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 56, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#7e5233', marginBottom: 12 }}>Why Triphoga</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#111', marginBottom: 16, lineHeight: 1.1 }}>
              Travel <span style={{ color: '#7e5233' }}>Thoughtfully</span>
            </h2>
            <p style={{ color: '#6b7280', lineHeight: 1.7, marginBottom: 32 }}>
              We&apos;re not just a travel company — we&apos;re a community of explorers who believe tourists deserve more than a postcard visit. From houseboat nights to spice-farm mornings, we craft journeys that go beyond the tourist trail.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { icon: Star,   t: 'Curated Packages', d: 'Every detail handpicked' },
                { icon: Clock,  t: 'Day-wise Plans',   d: 'Hour by hour clarity' },
                { icon: Shield, t: 'Safe Travels',     d: 'Verified accommodations' },
                { icon: Users,  t: 'Small Groups',     d: 'Intimate experiences' },
              ].map(({ icon: I, t, d }) => (
                <div key={t} style={{ background: '#fff', borderRadius: 16, padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: '#fff5ef', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                    <I size={17} style={{ color: '#7e5233' }} />
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 13, color: '#111' }}>{t}</div>
                  <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.2)', aspectRatio: '16/9', maxWidth: '100%', margin: '0 auto' }}>
                <img src="https://images.unsplash.com/photo-1589983846997-04788035bc83?q=80" alt="Kerala" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: -16, left: 16, background: '#fff', borderRadius: 16, boxShadow: '0 8px 30px rgba(0,0,0,0.15)', padding: '16px 20px' }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#7e5233' }}>500+</div>
                <div style={{ fontSize: 12, color: '#6b7280' }}>Happy travellers</div>
              </div>
            </div>
            
            {/* Leadership Team */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 12 }}>
              {/* Mentor */}
              <div style={{ flex: '1 1 140px', background: '#fff', borderRadius: 16, padding: 16, textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#f3f4f6', margin: '0 auto 12px', overflow: 'hidden' }}>
                  <img src="https://ui-avatars.com/api/?name=Mentor&background=7e5233&color=fff" alt="Mentor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h4 style={{ fontWeight: 700, fontSize: 14, color: '#111', margin: 0 }}>John Doe</h4>
                <p style={{ fontSize: 12, color: '#7e5233', fontWeight: 600, margin: '2px 0 0' }}>Mentor</p>
              </div>
              {/* Founder */}
              <div style={{ flex: '1 1 140px', background: '#fff', borderRadius: 16, padding: 16, textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#f3f4f6', margin: '0 auto 12px', overflow: 'hidden' }}>
                  <img src="https://ui-avatars.com/api/?name=Founder&background=153e2d&color=fff" alt="Founder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h4 style={{ fontWeight: 700, fontSize: 14, color: '#111', margin: 0 }}>Jane Smith</h4>
                <p style={{ fontSize: 12, color: '#153e2d', fontWeight: 600, margin: '2px 0 0' }}>Founder</p>
              </div>
              {/* Co-founder */}
              <div style={{ flex: '1 1 140px', background: '#fff', borderRadius: 16, padding: 16, textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#f3f4f6', margin: '0 auto 12px', overflow: 'hidden' }}>
                  <img src="https://ui-avatars.com/api/?name=Co-founder&background=fbbf24&color=fff" alt="Co-founder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h4 style={{ fontWeight: 700, fontSize: 14, color: '#111', margin: 0 }}>Mike Johnson</h4>
                <p style={{ fontSize: 12, color: '#fbbf24', fontWeight: 600, margin: '2px 0 0' }}>Co-founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
