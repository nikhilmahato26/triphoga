'use client'
import { Phone } from 'lucide-react'

const FLEET = [
  {
    name: 'Swift Dzire',
    category: 'SEDAN',
    tag: 'ECONOMY',
    tagColor: '#3b82f6',
    tagBg: '#eff6ff',
    desc: 'Economical sedan for small groups — perfect for city tours and short outstation trips.',
    img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600', // placeholder
    features: ['4 Passengers', 'AC', 'Petrol/CNG', 'Economic'],
    capacity: '4+1 Seats'
  },
  {
    name: 'Ertiga',
    category: 'MPV',
    tag: 'FAMILY',
    tagColor: '#22c55e',
    tagBg: '#f0fdf4',
    desc: '7-seat MPV for family outings, pilgrimages, and group travel across North India.',
    img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=600',
    features: ['7 Passengers', 'AC', 'Petrol/CNG', 'Spacious'],
    capacity: '6+1 Seats'
  },
  {
    name: 'Innova Crysta',
    category: 'PREMIUM MUV',
    tag: 'PREMIUM',
    tagColor: '#f59e0b',
    tagBg: '#fffbeb',
    desc: 'The gold standard for highway journeys — powerful, spacious, and supremely comfortable.',
    img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600',
    features: ['7 Passengers', 'AC', 'Diesel', 'Highway King'],
    capacity: '6+1 Seats'
  },
  {
    name: 'Tempo Traveller',
    category: 'MINI VAN',
    tag: 'GROUP',
    tagColor: '#f97316',
    tagBg: '#fff7ed',
    desc: 'Large group travel for religious yatras, corporate outings, and family tours.',
    img: 'https://images.unsplash.com/photo-1571127236794-81c0bbef1c8b?q=80&w=600',
    features: ['12-17 Seats', 'AC', 'Diesel', 'Push-back Seats'],
    capacity: '12-17 Seats'
  },
  {
    name: 'Buses / Coach',
    category: 'BUS',
    tag: 'LARGE GROUPS',
    tagColor: '#a855f7',
    tagBg: '#faf5ff',
    desc: 'Luxury AC coach for school tours, weddings, religious tours, and corporate events.',
    img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=600',
    features: ['32-52 Seats', 'Full AC', 'Diesel', 'LED/Music'],
    capacity: '32-52 Seats'
  }
]

export default function FleetSection({ phone }) {
  return (
    <section id="fleet" style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#7e5233', marginBottom: 10 }}>
            Travel in Comfort
          </p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#111', marginBottom: 12 }}>
            Our <span style={{ color: '#7e5233' }}>Fleet Options</span>
          </h2>
          <p style={{ color: '#6b7280', maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
            Choose the perfect vehicle for your group size and travel needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FLEET.map(vehicle => (
            <div key={vehicle.name} style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid #f3f4f6', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: 160, background: '#f3f4f6' }}>
                <img src={vehicle.img} alt={vehicle.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: 12, left: 12, background: vehicle.tagBg, color: vehicle.tagColor, fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 999, border: `1px solid ${vehicle.tagColor}30` }}>
                  {vehicle.tag}
                </span>
                <span style={{ position: 'absolute', bottom: 12, left: 12, background: 'rgba(255,255,255,0.9)', color: '#374151', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 4 }}>
                  👥 {vehicle.capacity}
                </span>
              </div>
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 10, color: '#9ca3af', fontWeight: 700, letterSpacing: '0.05em', marginBottom: 4 }}>{vehicle.category}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#111', marginBottom: 8 }}>{vehicle.name}</h3>
                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.5, marginBottom: 16 }}>{vehicle.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 24, marginTop: 'auto' }}>
                  {vehicle.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#4b5563' }}>
                      <span style={{ color: '#22c55e' }}>⊙</span> {f}
                    </div>
                  ))}
                </div>
                <a href={`tel:+${phone}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, width: '100%', padding: '10px 0', borderRadius: 8, border: '1.5px solid #e5e7eb', background: '#fff', color: '#7e5233', fontWeight: 700, fontSize: 13, textDecoration: 'none', cursor: 'pointer' }}>
                  <Phone size={14} /> BOOK THIS VEHICLE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
