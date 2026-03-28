import { Link } from 'react-router-dom';
import usePageSeo from '@/hooks/usePageSeo';

const packages = [
  {
    name: 'Daily Office Meal Plan',
    ideal: 'Call centers, IT companies, banks, and corporate offices',
    minimum: '20 employees',
    cta: 'Daily Plan Quote',
    includes: [
      'Fresh lunch delivery Monday to Saturday',
      'Weekly rotating menu for variety',
      'Options include Biryani, Pulao, Karahi, Daal Chawal, and Tikka',
      'Naan / Roti included',
      'Monthly invoice facility',
    ],
  },
  {
    name: 'Weekly Corporate Catering',
    ideal: 'Medium-size offices and project teams',
    minimum: '15 employees',
    cta: 'Discuss Weekly Plan',
    includes: [
      'Delivery on 3 or 5 days per week',
      'Menu selection based on your preference',
      'BBQ, Biryani, and mixed menu options',
      'Dedicated account manager',
    ],
  },
  {
    name: 'Corporate Event Catering Islamabad',
    ideal: 'Company dinners, annual functions, office parties, product launches',
    minimum: '50 guests',
    cta: 'Event Quote',
    includes: [
      'Full setup with serving tables and utensils',
      'Live BBQ counter option',
      'Biryani, BBQ, Tikka, Dessert complete menu',
      'On-site service staff',
      'Cleanup included',
    ],
  },
];

export default function CorporatePackagesPage() {
  usePageSeo(
    'Corporate Catering Packages Islamabad | Daily Office Meals | Su Food',
    'SU Food corporate catering packages in Islamabad for offices and call centers. Daily meals, weekly plans, and event catering with monthly billing.',
  );

  return (
    <main className="min-h-screen bg-background px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex items-center justify-between">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Corporate Catering Packages for Islamabad Offices and Call Centers</h1>
          <Link to="/" className="text-sm text-primary hover:underline">Back to Home</Link>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          SU Food understands how difficult daily meal management can be for busy offices and call centers. Our corporate packages are designed for Islamabad businesses that need consistency, quality, and flexible billing.
        </p>

        <div className="grid lg:grid-cols-3 gap-5">
          {packages.map(pkg => (
            <section key={pkg.name} className="glass-card-elevated p-5">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-1">{pkg.name}</h2>
              <p className="text-sm text-muted-foreground mb-2"><span className="font-medium text-foreground">Ideal for:</span> {pkg.ideal}</p>
              <p className="text-sm text-muted-foreground mb-3"><span className="font-medium text-foreground">Minimum:</span> {pkg.minimum}</p>
              <div className="space-y-1.5 mb-4">
                {pkg.includes.map(item => <p key={item} className="text-sm text-muted-foreground">- {item}</p>)}
              </div>
              <button className="w-full bg-primary text-primary-foreground rounded-xl py-2 text-sm font-medium">{pkg.cta}</button>
            </section>
          ))}
        </div>

        <section className="glass-card p-6">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Why Corporate Clients Choose Us</h2>
          <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <p>- Monthly invoicing for easy accounting</p>
            <p>- Dedicated contact person for your account</p>
            <p>- Flexible menu for team preferences</p>
            <p>- Halal-certified ingredients</p>
            <p>- Same-day Islamabad delivery available</p>
            <p>- Special rates for long-term contracts</p>
          </div>
        </section>
      </div>
    </main>
  );
}
