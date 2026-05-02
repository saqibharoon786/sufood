import { Link } from 'react-router-dom';
import usePageSeo from '@/hooks/usePageSeo';
import useJsonLd from '@/hooks/useJsonLd';

const areas = [
  'Blue Area',
  'F-6, F-7, F-8, F-10, F-11',
  'G-9, G-10, G-11, G-13',
  'I-8, I-9, I-10',
  'DHA Phase 1 & 2',
  'Bahria Town',
  'Rawalpindi - Saddar and commercial areas',
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Safiullah's Food minimum kitne logon ke liye order accept karta hai?",
      acceptedAnswer: { '@type': 'Answer', text: 'Daily meals ke liye minimum 20 employees aur events ke liye minimum 50 guests ka order accept kiya jata hai.' },
    },
    {
      '@type': 'Question',
      name: "Kya Safiullah's Food Islamabad mein office catering deliver karta hai?",
      acceptedAnswer: { '@type': 'Answer', text: 'Haan, Safiullah\'s Food Islamabad ke tamam areas mein deliver karta hai — Blue Area, F sectors, G sectors, I sectors, DHA, Bahria Town aur Rawalpindi ke commercial areas.' },
    },
    {
      '@type': 'Question',
      name: "Safiullah's Food ka menu kya hai?",
      acceptedAnswer: { '@type': 'Answer', text: "Safiullah's Food BBQ, Biryani, Chicken Tikka, Seekh Kabab, Pulao, Daal Chawal, Karahi aur Keto Meals offer karta hai. Bulk orders aur custom menus bhi available hain." },
    },
    {
      '@type': 'Question',
      name: 'Order kitna pehle dena hota hai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Daily meal plan ke liye 3 din pehle aur corporate events ke liye 1 hafta pehle order confirm karna hota hai.' },
    },
    {
      '@type': 'Question',
      name: 'Kya corporate offices ke liye monthly billing available hai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Haan, corporate clients ke liye monthly invoice facility available hai. Long term contracts par special rates bhi milte hain.' },
    },
    {
      '@type': 'Question',
      name: "Safiullah's Food se kaise contact karein?",
      acceptedAnswer: { '@type': 'Answer', text: 'Phone ya WhatsApp: +923165757901. Email: sufood@gmail.com. Website: sucatering.online. Monday se Saturday 9am se 8pm available hain.' },
    },
    {
      '@type': 'Question',
      name: 'Kya menu customize ho sakta hai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bilkul — aap apni company ki preferences ke mutabiq menu customize kar sakte hain. Halal ingredients use kiye jate hain.' },
    },
    {
      '@type': 'Question',
      name: "Kya Safiullah's Food BBQ catering events ke liye available hai?",
      acceptedAnswer: { '@type': 'Answer', text: 'Haan, Safiullah\'s Food corporate events, company dinners, annual functions aur office parties ke liye full BBQ catering service provide karta hai jisme live BBQ counter bhi shamil hai.' },
    },
  ],
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: "Contact Safiullah's Food",
  description: "Safiullah's Food se rabta karein — office catering, event booking ya bulk order quote ke liye Islamabad aur Rawalpindi mein.",
  url: 'https://sucatering.online/contact',
  mainEntity: {
    '@type': 'Organization',
    name: "Safiullah's Food",
    url: 'https://sucatering.online',
    logo: 'https://sucatering.online/saifullah-logo.png',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+92-331-2311138',
        contactType: 'customer service',
        contactOption: 'TollFree',
        areaServed: 'PK',
        availableLanguage: ['Urdu', 'English'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '20:00',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: '+92-331-2311138',
        contactType: 'sales',
        areaServed: 'PK',
        availableLanguage: ['Urdu', 'English'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'G Phase 4, Gulrez Housing Scheme',
      addressLocality: 'Islamabad',
      addressRegion: 'Islamabad Capital Territory',
      postalCode: '46000',
      addressCountry: 'PK',
    },
  },
};

const contactBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sucatering.online' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://sucatering.online/contact' },
  ],
};

export default function ContactPage() {
  usePageSeo(
    "Contact Us | Get a Catering Quote | Safiullah's Food Islamabad",
    "Safiullah's Food se rabta karein — office catering, event booking ya bulk order quote ke liye. Phone: +923165757901. Islamabad aur Rawalpindi mein delivery available. Abhi call karein!",
  );
  useJsonLd([
    { id: 'schema-faq-contact', data: faqSchema },
    { id: 'schema-contact-page', data: contactPageSchema },
    { id: 'schema-breadcrumb-contact', data: contactBreadcrumbSchema },
  ]);

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
