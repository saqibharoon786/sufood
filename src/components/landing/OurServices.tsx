import { motion } from 'framer-motion';
import { Home, UtensilsCrossed, Truck, Clock, Users, ChefHat } from 'lucide-react';

const services = [
  { icon: Home, title: 'Daily Office Lunch', desc: 'Fresh lunch delivery for offices and call centers in Islamabad.' },
  { icon: UtensilsCrossed, title: 'Corporate Event Catering', desc: 'Complete setup for annual dinners, launches, and team events.' },
  { icon: Truck, title: 'Bulk Delivery Service', desc: 'Reliable logistics for high-volume catering across multiple locations.' },
  { icon: Clock, title: 'Weekly Meal Plans', desc: 'Structured 3-day or 5-day corporate plans with rotating menus.' },
  { icon: Users, title: 'Call Center Shift Meals', desc: 'Meal support for day and night shifts with fixed delivery slots.' },
  { icon: ChefHat, title: 'Custom Menu Design', desc: 'Tailored menus for your team preferences and budget.' },
];

export default function OurServices() {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-3">What We Offer</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Corporate Catering Packages Islamabad</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Professional meal services for offices, call centers, and corporate events.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card-elevated p-6 text-center group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
