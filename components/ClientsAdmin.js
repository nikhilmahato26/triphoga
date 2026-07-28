'use client'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { Trash2, Plus, X, Check, Edit2 } from 'lucide-react'
import ImageUploader from './ImageUploader'

export default function ClientsAdmin() {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState({ id: null, name: '', logo_url: '' })
  const [saving, setSaving] = useState(false)

  const fetchClients = async () => {
    try {
      const res = await fetch('/api/clients')
      if (res.ok) setClients(await res.json())
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchClients()
  }, [])

  const handleSave = async () => {
    if (!form.name || !form.logo_url) {
      toast.error('Name and logo are required')
      return
    }
    setSaving(true)
    try {
      const isEdit = !!form.id
      const url = isEdit ? `/api/clients/${form.id}` : '/api/clients'
      const method = isEdit ? 'PUT' : 'POST'
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      
      if (!res.ok) throw new Error('Failed to save')
      toast.success(isEdit ? 'Client updated' : 'Client added')
      setModal(false)
      fetchClients()
    } catch (err) {
      toast.error('An error occurred')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this client?')) return
    try {
      const res = await fetch(`/api/clients/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Failed to delete')
      toast.success('Client deleted')
      fetchClients()
    } catch (err) {
      toast.error('Failed to delete client')
    }
  }

  const S = {
    btn: (bg, color) => ({ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 8, background: bg, color, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer' }),
    input: { width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 14, outline: 'none' },
    label: { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 },
    card: { background: '#fff', border: '1px solid #f3f4f6', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: '#111' }}>Clients</h2>
        <button onClick={() => { setForm({ id: null, name: '', logo_url: '' }); setModal(true) }} style={S.btn('#111', '#fff')}>
          <Plus size={16} /> Add Client
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 20 }}>
        {clients.map(client => (
          <div key={client.id} style={S.card}>
            <div style={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fafafa', borderRadius: 8 }}>
              <img src={client.logo_url} alt={client.name} style={{ maxWidth: '100%', maxHeight: '80%', objectFit: 'contain' }} />
            </div>
            <div style={{ fontWeight: 600, textAlign: 'center' }}>{client.name}</div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => { setForm(client); setModal(true) }} style={{ ...S.btn('#f3f4f6', '#374151'), flex: 1, justifyContent: 'center' }}>
                <Edit2 size={14} /> Edit
              </button>
              <button onClick={() => handleDelete(client.id)} style={{ ...S.btn('#fef2f2', '#dc2626'), flex: 1, justifyContent: 'center' }}>
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }}>
          <div style={{ background: '#fff', width: 400, borderRadius: 16, padding: 24 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>{form.id ? 'Edit Client' : 'Add Client'}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={S.label}>Client Name</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={S.input} placeholder="Enter client name" />
              </div>
              <div>
                <label style={S.label}>Logo Image</label>
                <ImageUploader url={form.logo_url} onUrlChange={url => setForm({ ...form, logo_url: url })} height={120} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 24 }}>
              <button onClick={() => setModal(false)} style={S.btn('#f3f4f6', '#4b5563')}>Cancel</button>
              <button onClick={handleSave} disabled={saving} style={{ ...S.btn('#7e5233', '#fff'), opacity: saving ? 0.7 : 1 }}>
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
