import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, menuCategories } from '@/data/mockData';
import { whatsappUrlWithMessage } from '@/constants/contact';

const MENU_STORAGE_KEY = 'sf_menu_items';

function formatPkrPrice(price: number) {
  const n = Number(price);
  if (Number.isInteger(n)) return `Rs. ${n.toLocaleString('en-PK')}`;
  return `Rs. ${n.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function orderWhatsAppUrl(itemName: string, price: number) {
  const text = `Assalamualaikum, I would like to order: ${itemName} (${formatPkrPrice(price)})`;
  return whatsappUrlWithMessage(text);
}

export default function FeaturedMenu() {
  const [active, setActive] = useState('All');
  const storedItems = (() => {
    const stored = localStorage.getItem(MENU_STORAGE_KEY);
    if (!stored) return menuItems;
    try {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : menuItems;
    } catch {
      return menuItems;
    }
  })();
  const categories = ['All', ...Array.from(new Set(storedItems.map(i => i.category)))];
  const filtered = active === 'All' ? storedItems : storedItems.filter(i => i.category === active);

  return (
    <section id="menu" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-3">Our Menu</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Menu - BBQ, Biryani, Tikka and More</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Popular corporate menu options for daily office meals and events.</p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filtered.filter(item => item.available).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card-elevated overflow-hidden hover-lift group flex flex-col"
              >
                <div className="aspect-square overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col flex-1 min-h-0">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{item.category}</span>
                  <h3 className="font-serif text-lg font-semibold text-foreground mt-1">{item.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
                  <p className="font-serif text-xl font-bold text-primary mt-3">{formatPkrPrice(item.price)}</p>
                  <a
                    href={orderWhatsAppUrl(item.name, item.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full text-center py-2.5 px-4 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-sm"
                  >
                    Order Now
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
