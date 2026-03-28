import { useState } from 'react';
import { Pencil, Plus, Tag, Trash2, X } from 'lucide-react';
import { toast } from 'sonner';
import { DEALS_STORAGE_KEY, getStoredDeals, type DealItem } from '@/data/deals';

type DealForm = {
  title: string;
  persons: string;
  price: string;
  description: string;
  includes: string;
  image: string;
};

const emptyForm: DealForm = {
  title: '',
  persons: '',
  price: '',
  description: '',
  includes: '',
  image: '',
};

export default function DealsManagement() {
  const [deals, setDeals] = useState<DealItem[]>(() => getStoredDeals());
  const [editing, setEditing] = useState<DealItem | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<DealForm>(emptyForm);

  const inputClass = 'w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary';

  const persist = (nextDeals: DealItem[]) => {
    setDeals(nextDeals);
    localStorage.setItem(DEALS_STORAGE_KEY, JSON.stringify(nextDeals));
  };

  const openNew = () => {
    setEditing(null);
    setForm(emptyForm);
    setShowForm(true);
  };

  const openEdit = (deal: DealItem) => {
    setEditing(deal);
    setForm({
      title: deal.title,
      persons: String(deal.persons),
      price: String(deal.price),
      description: deal.description,
      includes: deal.includes,
      image: deal.image,
    });
    setShowForm(true);
  };

  const save = () => {
    if (!form.title || !form.persons || !form.price) return;
    const payload = {
      title: form.title,
      persons: Number(form.persons),
      price: Number(form.price),
      description: form.description,
      includes: form.includes,
      image: form.image || 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=700',
    };

    if (editing) {
      const updated = deals.map(d => (d.id === editing.id ? { ...d, ...payload } : d));
      persist(updated);
      toast.success('Deal updated');
    } else {
      const newDeal: DealItem = { id: Date.now().toString(), ...payload, active: true };
      persist([...deals, newDeal]);
      toast.success('Deal added');
    }

    setShowForm(false);
  };

  const toggleActive = (id: string) => {
    persist(deals.map(d => (d.id === id ? { ...d, active: !d.active } : d)));
  };

  const remove = (id: string) => {
    persist(deals.filter(d => d.id !== id));
    toast.success('Deal deleted');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Deals Management</h1>
          <p className="text-sm text-muted-foreground">Create and manage 2, 4, 6 person deals for website users.</p>
        </div>
        <button onClick={openNew} className="bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-1.5 hover:bg-secondary transition-colors">
          <Plus className="w-4 h-4" /> Add Deal
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-foreground/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl p-6 w-full max-w-lg space-y-4" style={{ boxShadow: 'var(--shadow-elevated)' }}>
            <div className="flex justify-between items-center">
              <h3 className="font-serif text-lg font-bold">{editing ? 'Edit Deal' : 'New Deal'}</h3>
              <button onClick={() => setShowForm(false)}><X className="w-5 h-5 text-muted-foreground" /></button>
            </div>
            <input className={inputClass} placeholder="Deal title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
            <div className="grid grid-cols-2 gap-3">
              <input className={inputClass} placeholder="Persons (e.g. 4)" type="number" value={form.persons} onChange={e => setForm({ ...form, persons: e.target.value })} />
              <input className={inputClass} placeholder="Price (e.g. 2899)" type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
            </div>
            <textarea className={`${inputClass} resize-none h-20`} placeholder="Short description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
            <textarea className={`${inputClass} resize-none h-20`} placeholder="What's included" value={form.includes} onChange={e => setForm({ ...form, includes: e.target.value })} />
            <input className={inputClass} placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
            <button onClick={save} className="w-full bg-primary text-primary-foreground py-2.5 rounded-xl text-sm font-medium hover:bg-secondary transition-colors">
              {editing ? 'Update' : 'Add'} Deal
            </button>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {deals.map(deal => (
          <div key={deal.id} className="pos-card">
            <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-muted">
              <img src={deal.image} alt={deal.title} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-semibold text-foreground">{deal.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary inline-flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> {deal.persons} Persons
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{deal.description}</p>
              <p className="text-sm text-foreground/90">{deal.includes}</p>
              <p className="font-serif text-xl font-bold text-primary">Rs. {deal.price.toLocaleString()}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <button onClick={() => toggleActive(deal.id)} className={`px-2.5 py-1 rounded-full text-xs font-medium ${deal.active ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
                {deal.active ? 'Active' : 'Hidden'}
              </button>
              <div className="flex gap-1">
                <button onClick={() => openEdit(deal)} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => remove(deal.id)} className="p-2 rounded-lg hover:bg-destructive/10 transition-colors text-muted-foreground hover:text-destructive">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
