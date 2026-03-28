import { motion } from 'framer-motion';
import { Building2, Headset, MapPinned } from 'lucide-react';

const coverageItems = [
  {
    icon: Building2,
    title: 'Office Meal Services',
    desc: 'Daily lunch boxes, executive meals, and bulk office orders with on-time delivery.',
    points: ['Corporate monthly contracts', 'Team lunch and meeting trays', 'Custom budget-based menus'],
  },
  {
    icon: Headset,
    title: 'Call Center Food Support',
    desc: '24/7 shift based meal planning for call centers with hygienic packing and timely dispatch.',
    points: ['Day/night shift coverage', 'Pre-scheduled delivery slots', 'Tea, snacks, and full meals'],
  },
  {
    icon: MapPinned,
    title: 'Multi-Location Supply',
    desc: 'We provide centralized quality food service across 2 to 3 and even more business locations.',
    points: ['Same taste at every branch', 'Route-optimized delivery', 'Reliable backup dispatch'],
  },
];

export default function ServiceCoverage() {
  return (
    <section id="coverage" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-3">Service Coverage</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Offices, Call Centers, and Multiple Sites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional B2B food service designed for companies that need consistent quality, fixed timing, and scalable support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-elevated p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.desc}</p>
              <ul className="space-y-2">
                {item.points.map(point => (
                  <li key={point} className="text-sm text-foreground/90">
                    - {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
