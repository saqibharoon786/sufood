import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from '@/components/landing/WhatsAppChat';
import { WHATSAPP_CHAT_URL } from '@/constants/contact';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Deals', href: '#deals' },
  { label: 'Services', href: '#services' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3 group">
          <span className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg lg:text-xl font-bold shadow-md">
            SU
          </span>
          <span className="leading-tight text-left">
            <span className="block font-serif text-base lg:text-lg font-bold text-primary tracking-wide">SU Foods</span>
            <span className="block text-[10px] lg:text-xs uppercase tracking-[0.28em] text-muted-foreground group-hover:text-primary/80 transition-colors">
              Premium Kitchen
            </span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </button>
          ))}
          <Link to="/bbq-menu" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            BBQ Menu
          </Link>
          <Link to="/keto-meals" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Keto Meals
          </Link>
          <Link to="/corporate-packages" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Corporate Packages
          </Link>
          <Link to="/contact-us" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <a
            href={WHATSAPP_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-opacity hover:opacity-90"
            aria-label="WhatsApp — +92 334 5060706"
            title="WhatsApp"
          >
            <WhatsAppIcon className="!h-5 !w-5" />
          </a>
          <Link to="/pos" className="border border-primary text-primary px-5 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Staff POS
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={WHATSAPP_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm"
            aria-label="WhatsApp — +92 334 5060706"
            title="WhatsApp"
          >
            <WhatsAppIcon className="!h-5 !w-5" />
          </a>
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
                <button key={l.href} onClick={() => scrollTo(l.href)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2">
                  {l.label}
                </button>
              ))}
              <Link to="/bbq-menu" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2">
                BBQ Menu
              </Link>
              <Link to="/keto-meals" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2">
                Keto Meals
              </Link>
              <Link to="/corporate-packages" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2">
                Corporate Packages
              </Link>
              <Link to="/contact-us" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2">
                Contact
              </Link>
              <Link to="/pos" onClick={() => setOpen(false)} className="block w-full border border-primary text-primary px-5 py-2 rounded-full text-sm font-medium text-center">
                Staff POS
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
