import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Do you provide daily office lunch plans?',
    a: 'Yes. We offer daily and weekly corporate meal plans with flexible menus for offices and teams in Islamabad and Rawalpindi.',
  },
  {
    q: 'What is your minimum order for events?',
    a: 'For most corporate events, BBQ and bulk catering starts from around 30 people, but we can adjust based on your requirement.',
  },
  {
    q: 'Can we customize menu for our team?',
    a: 'Absolutely. You can select dishes by budget, dietary preference, and event type. Keto-friendly and low-oil options are also available.',
  },
  {
    q: 'How do we place an order quickly?',
    a: 'Use the WhatsApp button on the site and share date, location, headcount, and menu preference. Our team confirms the order details quickly.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-3">FAQ</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={item.q} className="glass-card-elevated overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-foreground">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm text-muted-foreground">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
