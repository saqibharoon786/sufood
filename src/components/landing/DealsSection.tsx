import { motion } from 'framer-motion';
import { Users, Tag } from 'lucide-react';
import { getStoredDeals } from '@/data/deals';

export default function DealsSection() {
  const deals = getStoredDeals().filter(deal => deal.active);

  return (
    <section id="deals" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-3">Special Deals</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Family and Team Deal Offers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Value-packed offers for 2-person, 4-person, and 6-person groups. Perfect for home meals, offices, and call center teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card-elevated overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={deal.image} alt={deal.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{deal.title}</h3>
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    <Users className="w-3.5 h-3.5" /> {deal.persons} Persons
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{deal.description}</p>
                <p className="text-sm text-foreground/90 mb-4">{deal.includes}</p>
                <div className="flex items-center justify-between">
                  <p className="font-serif text-2xl font-bold text-primary">Rs. {deal.price.toLocaleString()}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-success bg-success/10 px-2 py-1 rounded-full">
                    <Tag className="w-3.5 h-3.5" /> Save More
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
