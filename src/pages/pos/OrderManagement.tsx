import { useState } from 'react';
import { sampleOrders, type Order } from '@/data/mockData';
import { toast } from 'sonner';

const statusColors: Record<string, string> = {
  pending: 'bg-warning/10 text-warning border-warning/20',
  preparing: 'bg-primary/10 text-primary border-primary/20',
  ready: 'bg-success/10 text-success border-success/20',
  completed: 'bg-muted text-muted-foreground border-border',
};

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>(sampleOrders);
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all' ? orders : orders.filter(o => o.status === filter);

  const updateStatus = (id: string, status: Order['status']) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
    toast.success(`Order ${id} → ${status}`);
  };

  const nextStatus = (s: Order['status']): Order['status'] | null => {
    const flow: Record<string, Order['status']> = { pending: 'preparing', preparing: 'ready', ready: 'completed' };
    return flow[s] || null;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-bold text-foreground">Order Management</h1>
        <p className="text-sm text-muted-foreground">Track and manage all orders.</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {['all', 'pending', 'preparing', 'ready', 'completed'].map(s => (
          <button key={s} onClick={() => setFilter(s)} className={`px-4 py-2 rounded-xl text-xs font-medium capitalize transition-all ${filter === s ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground'}`}>
            {s} {s !== 'all' && `(${orders.filter(o => o.status === s).length})`}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(order => (
          <div key={order.id} className="pos-card space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-foreground">{order.id}</p>
                <p className="text-xs text-muted-foreground capitalize">{order.type}{order.table ? ` • Table ${order.table}` : ''}</p>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full border font-medium capitalize ${statusColors[order.status]}`}>
                {order.status}
              </span>
            </div>

            <div className="space-y-1.5">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-foreground">{item.quantity}× {item.menuItem.name}</span>
                  <span className="text-muted-foreground">${(item.menuItem.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {order.notes && <p className="text-xs text-primary italic">📝 {order.notes}</p>}

            <div className="flex justify-between items-center pt-2 border-t border-border">
              <p className="font-serif text-lg font-bold text-foreground">${order.total.toFixed(2)}</p>
              {nextStatus(order.status) && (
                <button
                  onClick={() => updateStatus(order.id, nextStatus(order.status)!)}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-xl text-xs font-medium hover:bg-secondary transition-colors capitalize"
                >
                  → {nextStatus(order.status)}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
