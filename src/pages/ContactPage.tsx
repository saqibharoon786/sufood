import { Link } from 'react-router-dom';
import usePageSeo from '@/hooks/usePageSeo';

const areas = [
  'Blue Area',
  'F-6, F-7, F-8, F-10, F-11',
  'G-9, G-10, G-11, G-13',
  'I-8, I-9, I-10',
  'DHA Phase 1 & 2',
  'Bahria Town',
  'Rawalpindi - Saddar and commercial areas',
];

export default function ContactPage() {
  usePageSeo(
    'Contact Su Food | Corporate Catering Islamabad | Get a Quote',
    'Contact SU Food Islamabad for office catering quotes by call, WhatsApp, or email. Delivery available in Blue Area, F sectors, G sectors, and I sectors.',
  );

  return (
    <main className="min-h-screen bg-background px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex items-center justify-between">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Contact SU Food - Get a Corporate Catering Quote</h1>
          <Link to="/" className="text-sm text-primary hover:underline">Back to Home</Link>
        </div>

        <p className="text-muted-foreground">
          Need office or event catering in Islamabad? Contact us by call, WhatsApp, or email and get a response within 2 hours.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          <section className="glass-card-elevated p-6 space-y-2 text-sm">
            <p><span className="font-semibold text-foreground">Phone:</span> [Your number]</p>
            <p><span className="font-semibold text-foreground">WhatsApp:</span> [Your WhatsApp number]</p>
            <p><span className="font-semibold text-foreground">Email:</span> [Your email]</p>
            <p><span className="font-semibold text-foreground">Location:</span> Islamabad, Pakistan</p>
            <p><span className="font-semibold text-foreground">Hours:</span> Monday to Saturday, 9AM to 8PM</p>
          </section>

          <section className="glass-card-elevated p-6">
            <h2 className="font-serif text-xl font-semibold text-foreground mb-4">Quote Request Form</h2>
            <form className="space-y-3">
              <input className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm" placeholder="Your Name (required)" />
              <input className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm" placeholder="Company / Office Name (required)" />
              <input className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm" placeholder="Phone Number (required)" />
              <input className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm" placeholder="Email Address" />
              <input className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm" placeholder="Employees count" />
              <select className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm">
                <option>Required service (Daily meals / Event / BBQ)</option>
              </select>
              <textarea className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm h-24 resize-none" placeholder="Message / Requirements" />
              <button type="button" className="w-full bg-primary text-primary-foreground rounded-xl py-2.5 text-sm font-medium">Send Quote Request</button>
            </form>
          </section>
        </div>

        <section className="glass-card p-6">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Delivery Areas in Islamabad</h2>
          <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
            {areas.map(area => <p key={area}>- {area}</p>)}
          </div>
        </section>
      </div>
    </main>
  );
}
