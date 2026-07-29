'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function WhyChooseUsSection() {
  const [open, setOpen] = useState(null)

  const items = [
    {
      title: "Customized Tour Packages",
      content: "Every traveler is unique. We design itineraries tailored to your budget, interests, and travel style."
    },
    {
      title: "Trusted Travel Experts",
      content: "Backed by years of experience in the travel industry, our team ensures smooth planning and reliable service from start to finish."
    },
    {
      title: "Best Price Guarantee",
      content: "We offer competitive pricing without compromising on quality, giving you the best value for your money."
    },
    {
      title: "Handpicked Hotels & Stays",
      content: "Comfortable, verified accommodations that match your preferences and budget."
    },
    {
      title: "Safe & Comfortable Transportation",
      content: "Well-maintained vehicles, experienced drivers, and seamless transfers for a stress-free journey."
    },
    {
      title: "Complete Travel Solutions",
      content: "From flights and hotels to sightseeing, transport, visas, travel insurance, and forex assistance—we handle everything under one roof."
    },
    {
      title: "24×7 Travel Assistance",
      content: "Our dedicated support team is always available to assist you before, during, and after your trip."
    },
    {
      title: "Corporate & Group Travel Specialists",
      content: "Expert planning for corporate events, incentive tours, educational trips, destination weddings, and group holidays."
    },
    {
      title: "Transparent Pricing",
      content: "No hidden charges. Clear quotations and honest pricing ensure complete peace of mind."
    },
    {
      title: "Memories That Last Forever",
      content: "We don't just book trips—we create experiences that you'll cherish for a lifetime."
    }
  ]

  return (
    <section style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#7e5233', marginBottom: 10 }}>
            Your Journey Begins Here
          </p>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#111', marginBottom: 12 }}>
            Why Choose <span style={{ color: '#7e5233' }}>TripHoga?</span>
          </h2>
          <p style={{ color: '#6b7280', maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
            At TripHoga, we believe travel should be effortless, memorable, and completely hassle-free. Whether you&apos;re planning a family vacation, a corporate trip, a school excursion, or a spiritual journey, we take care of every detail so you can focus on creating unforgettable memories.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {items.map((item, i) => (
            <div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '20px 24px', background: open === i ? '#fbf8f1' : '#fff', border: 'none', cursor: 'pointer',
                  textAlign: 'left', transition: 'background 0.3s'
                }}
              >
                <span style={{ fontWeight: 700, fontSize: 16, color: '#111' }}>{item.title}</span>
                <ChevronDown size={20} style={{ color: '#7e5233', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
              </button>
              <div style={{
                maxHeight: open === i ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease-in-out',
                background: '#fff'
              }}>
                <div style={{ padding: '0 24px 20px', color: '#4b5563', lineHeight: 1.6, fontSize: 15 }}>
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40, padding: 24, background: '#fbf8f1', borderRadius: 16 }}>
          <p style={{ margin: 0, fontWeight: 600, color: '#111', fontSize: 16 }}>
            TripHoga is your trusted travel partner, committed to delivering seamless travel experiences, exceptional service, and unforgettable adventures across India and around the world.
          </p>
          <p style={{ margin: '12px 0 0', fontWeight: 800, color: '#7e5233', fontSize: 18 }}>
            Travel Smart. Travel Safe. Travel with TripHoga.
          </p>
        </div>
      </div>
    </section>
  )
}
