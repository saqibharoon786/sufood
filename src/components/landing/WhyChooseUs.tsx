import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Zap, Crown } from 'lucide-react';

const features = [
  { icon: Leaf, title: 'Hygienic Kitchen', desc: 'Certified clean kitchen operations with fresh ingredients prepared daily.' },
  { icon: ShieldCheck, title: 'Punctual Delivery', desc: 'Your lunch arrives on schedule, every day, without delay.' },
  { icon: Zap, title: 'Bulk Orders', desc: 'From 50 to 1000+ people, we execute high-volume catering smoothly.' },
  { icon: Crown, title: 'Custom Corporate Menu', desc: 'Build your own menu with flexible packages and monthly billing.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-3">Why Choose Us</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Why Companies Choose SU Food</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-elevated p-6 text-center hover-lift"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
