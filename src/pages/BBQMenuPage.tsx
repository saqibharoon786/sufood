import { Link } from 'react-router-dom';
import usePageSeo from '@/hooks/usePageSeo';

const bbqItems = {
  chicken: ['Chicken Tikka (per kg)', 'Chicken Boti (per kg)', 'Chicken Seekh Kabab (per dozen)', 'Reshmi Kabab (per dozen)', 'Chicken Wings BBQ (per kg)'],
  beefMutton: ['Beef Seekh Kabab (per dozen)', 'Beef Boti (per kg)', 'Mutton Chops (per kg)', 'Shami Kabab (per dozen)'],
  sides: ['Naan / Roti', 'Raita', 'Chutney (Mint + Tamarind)', 'Salad Platter'],
};

export default function BBQMenuPage() {
  usePageSeo(
    'Su Food BBQ Catering Islamabad | Office & Event BBQ Service',
    'Islamabad BBQ catering by Su Food for office and event bulk orders. Seekh Kabab, Chicken Tikka, and Boti with fresh delivery and custom packages.',
  );

  return (
    <main className="min-h-screen bg-background px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex items-center justify-between">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">BBQ Catering Service for Islamabad Office Events - Su Food</h1>
          <Link to="/" className="text-sm text-primary hover:underline">Back to Home</Link>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Looking for BBQ catering for your office event, company dinner, or call center in Islamabad? SU Food provides corporate BBQ catering with fresh char-grilled flavor.
          We prepare Seekh Kabab, Chicken Tikka, Boti, and Reshmi Kabab with delivery straight to your office or venue. Orders start from 30 people.
        </p>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Su Food BBQ Menu</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass-card p-4"><h3 className="font-semibold mb-2">Chicken Items</h3>{bbqItems.chicken.map(i => <p key={i} className="text-sm text-muted-foreground">{i}</p>)}</div>
            <div className="glass-card p-4"><h3 className="font-semibold mb-2">Beef / Mutton Items</h3>{bbqItems.beefMutton.map(i => <p key={i} className="text-sm text-muted-foreground">{i}</p>)}</div>
            <div className="glass-card p-4"><h3 className="font-semibold mb-2">Accompaniments</h3>{bbqItems.sides.map(i => <p key={i} className="text-sm text-muted-foreground">{i}</p>)}</div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">How to Order BBQ in 4 Simple Steps</h2>
          <ol className="space-y-2 text-muted-foreground">
            <li>Step 1: Call or WhatsApp and share date and headcount.</li>
            <li>Step 2: Select your menu and preferred package.</li>
            <li>Step 3: Confirm with 50% advance payment.</li>
            <li>Step 4: Fresh BBQ delivery at your selected time.</li>
          </ol>
          <div className="flex flex-wrap gap-3">
            <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium">BBQ Quote</button>
            <button className="border border-primary text-primary px-6 py-2.5 rounded-full text-sm font-medium">Order on WhatsApp</button>
          </div>
        </section>
      </div>
    </main>
  );
}
