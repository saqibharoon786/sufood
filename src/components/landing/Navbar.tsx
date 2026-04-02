import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function FacebookIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 8H16V5h-2.5C10.46 5 9 6.79 9 9.36V11H7v3h2v5h3v-5h2.52l.48-3H12V9.61C12 8.74 12.26 8 13.5 8Z" />
    </svg>
  );
}

function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.1v13.22a2.92 2.92 0 1 1-2-2.78V9.28a6.02 6.02 0 1 0 5.11 5.94V8.47a7.9 7.9 0 0 0 4.62 1.49V6.87c-.3 0-.59-.06-.86-.18Z" />
    </svg>
  );
}

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Deals', to: '/deals' },
  { label: 'Services', to: '/services' },
  { label: 'Coverage', to: '/coverage' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact-us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const socials = [
    {
      href: 'https://www.facebook.com/profile.php?id=61565024385477',
      label: 'Facebook',
      Icon: FacebookIcon,
      className: 'bg-[#1877F2] text-white shadow-[0_0_0_2px_rgba(24,119,242,0.25)]',
      iconClass: 'h-5 w-5',
    },
    {
      href: '#',
      label: 'Instagram',
      Icon: InstagramIcon,
      className: 'bg-gradient-to-br from-[#F9CE34] via-[#EE2A7B] to-[#6228D7] text-white shadow-[0_0_0_2px_rgba(238,42,123,0.25)]',
      iconClass: 'h-5 w-5',
    },
    {
      href: 'https://www.tiktok.com/@sufoods6?_r=1&_t=ZS-95AWEFiVY4V',
      label: 'TikTok',
      Icon: TikTokIcon,
      className: 'bg-black text-white shadow-[0_0_0_2px_rgba(0,0,0,0.25)]',
      iconClass: 'h-4.5 w-4.5',
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <span className="w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-white border border-border/50 shadow-sm p-1.5 flex items-center justify-center overflow-hidden">
            <img
              src="/saifullah-logo.png"
              alt="Safiullah's Food logo"
              className="w-full h-full object-contain"
            />
          </span>
          <span className="leading-tight text-left">
            <span className="block font-serif text-base lg:text-xl font-bold text-primary tracking-wide">Safiullah&apos;s Food</span>
            <span className="block text-[9px] lg:text-[10px] uppercase tracking-[0.28em] text-muted-foreground group-hover:text-primary/80 transition-colors">
              Premium Kitchen
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-5">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
          <Link to="/keto-meals" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Keto Meals
          </Link>
          {socials.map(({ href, label, Icon, className, iconClass }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105 ${className}`}
              aria-label={label}
              title={label}
            >
              <Icon className={iconClass} />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {socials.map(({ href, label, Icon, className, iconClass }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-10 w-10 items-center justify-center rounded-full ${className}`}
              aria-label={label}
              title={label}
            >
              <Icon className={iconClass} />
            </a>
          ))}
          <button type="button" onClick={() => setOpen(!open)} className="text-foreground p-1" aria-label="Open menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-background border-b border-border">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map(l => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2">
                  {l.label}
                </Link>
              ))}
              <Link to="/keto-meals" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2">
                Keto Meals
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
