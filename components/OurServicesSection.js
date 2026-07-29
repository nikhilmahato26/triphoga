'use client'

import { Briefcase, GraduationCap, Bus, Hotel, Plane, Globe, Users, CalendarDays } from 'lucide-react'

export default function OurServicesSection() {
  const services = [
    { title: "Corporate Travel", icon: <Briefcase size={24} /> },
    { title: "School & Educational Tours", icon: <GraduationCap size={24} /> },
    { title: "Transportation Services", icon: <Bus size={24} /> },
    { title: "Hotel Resort Bookings", icon: <Hotel size={24} /> },
    { title: "Flight & Train Bookings", icon: <Plane size={24} /> },
    { title: "Domestic and International Packages", icon: <Globe size={24} /> },
    { title: "Group Tours", icon: <Users size={24} /> },
    { title: "Event & MICE Travel", icon: <CalendarDays size={24} /> },
  ]

  return (
    <section style={{ padding: '80px 24px', background: '#fbf8f1' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#7e5233', marginBottom: 10 }}>
            What We Do
          </p>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#111', marginBottom: 12 }}>
            Our <span style={{ color: '#7e5233' }}>Services</span>
          </h2>
          <p style={{ color: '#6b7280', maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
            Explore our wide range of services designed to make your travel seamless and unforgettable.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
          {services.map((service, idx) => (
            <div key={idx} style={{
              background: '#fff', padding: '32px 24px', borderRadius: 24, textAlign: 'center',
              boxShadow: '0 8px 30px rgba(0,0,0,0.04)', transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'default'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.04)' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#fff5ef', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#7e5233' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111', lineHeight: 1.3 }}>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
