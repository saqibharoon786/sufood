function TikTokIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.1v13.22a2.92 2.92 0 1 1-2-2.78V9.28a6.02 6.02 0 1 0 5.11 5.94V8.47a7.9 7.9 0 0 0 4.62 1.49V6.87c-.3 0-.59-.06-.86-.18Z" />
    </svg>
  );
}

export default function Footer() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  const socialLinks = [
    { href: 'https://www.tiktok.com/@sufoods6?_r=1&_t=ZS-95AWEFiVY4V', label: 'TikTok', Icon: TikTokIcon },
  ];

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
              {socialLinks.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label={label} title={label}>
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
