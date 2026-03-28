import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-deep-brown text-cream/80 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-serif text-2xl font-bold text-cream mb-3">SU Food</h3>
            <p className="text-sm leading-relaxed">Islamabad Corporate Catering Service for offices, call centers, and events.</p>
          </div>
          <div>
            <h4 className="font-semibold text-cream mb-3 text-sm">Quick Links</h4>
            <div className="space-y-2">
              {['#about', '#menu', '#deals', '#services', '#coverage', '#contact'].map(id => (
                <button key={id} onClick={() => scrollTo(id)} className="block text-sm hover:text-cream transition-colors capitalize">
                  {id.replace('#', '')}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-cream mb-3 text-sm">Service Areas</h4>
            <p className="text-sm">Blue Area, F Sectors, G Sectors, I Sectors</p>
            <p className="text-sm">DHA, Bahria Town, Rawalpindi Commercial Areas</p>
          </div>
          <div>
            <h4 className="font-semibold text-cream mb-3 text-sm">Follow Us</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-cream/10 pt-6 text-center text-xs space-y-1">
          <p>SU Food - Islamabad Corporate Catering Service</p>
          <p>BBQ | Biryani | Tikka | Pulao | Daal Chawal | Bulk Orders</p>
          <p>Islamabad, Pakistan | [Phone Number] | [Email]</p>
        </div>
      </div>
    </footer>
  );
}
