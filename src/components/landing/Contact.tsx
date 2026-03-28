import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-3">Contact</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Contact SU Food - Get a Corporate Catering Quote</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Need an office or event catering quote in Islamabad? Contact us by phone, WhatsApp, or email and get a response within 2 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              { icon: MapPin, title: 'Location', text: 'Islamabad, Pakistan' },
              { icon: Phone, title: 'Phone / WhatsApp', text: '[Your phone number]' },
              { icon: Mail, title: 'Email', text: '[Your email address]' },
              { icon: Clock, title: 'Hours', text: 'Monday to Saturday, 9AM to 8PM' },
            ].map(item => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border p-6">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Quick Quote Form</h3>
            <form className="space-y-3">
              <input className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm" placeholder="Your Name (required)" />
              <input className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm" placeholder="Company / Office Name (required)" />
              <input className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm" placeholder="Phone Number (required)" />
              <input className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm" placeholder="Email Address" />
              <input className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm" placeholder="How many employees?" />
              <select className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm">
                <option>Service needed (Daily meals / Event / BBQ)</option>
              </select>
              <textarea className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm h-24 resize-none" placeholder="Message / Requirements" />
              <button type="button" className="w-full bg-primary text-primary-foreground rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-secondary transition-colors">
                Send Quote Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
