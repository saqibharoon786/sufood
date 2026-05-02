import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
          {navLinks.filter(l => l.label !== 'Services').map(l => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex gap-0 p-0 w-[600px] bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 rounded-lg shadow-xl border border-orange-100">
                    {/* Services Column */}
                    <div className="flex-1 p-6 border-r border-orange-200">
                      <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Services
                      </h4>
                      <div className="space-y-1">
                        <NavigationMenuLink asChild>
                          <Link to="/catering-services-islamabad" className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/70 hover:shadow-md hover:text-orange-600 focus:bg-white/70 focus:text-orange-600 border border-transparent hover:border-orange-200">
                            <div className="text-sm font-semibold leading-none">Catering Services Islamabad</div>
                            <div className="text-xs text-gray-500 mt-1">Complete catering solutions</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/catering-services-rawalpindi" className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/70 hover:shadow-md hover:text-orange-600 focus:bg-white/70 focus:text-orange-600 border border-transparent hover:border-orange-200">
                            <div className="text-sm font-semibold leading-none">Catering Services Rawalpindi</div>
                            <div className="text-xs text-gray-500 mt-1">Professional catering services</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/wedding-catering-services-islamabad" className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/70 hover:shadow-md hover:text-orange-600 focus:bg-white/70 focus:text-orange-600 border border-transparent hover:border-orange-200">
                            <div className="text-sm font-semibold leading-none">Wedding Catering Services</div>
                            <div className="text-xs text-gray-500 mt-1">Special wedding solutions</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/corporate-catering-services-islamabad" className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/70 hover:shadow-md hover:text-orange-600 focus:bg-white/70 focus:text-orange-600 border border-transparent hover:border-orange-200">
                            <div className="text-sm font-semibold leading-none">Corporate Catering Services</div>
                            <div className="text-xs text-gray-500 mt-1">Business event catering</div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                    
                    {/* Islamabad Locations Column */}
                    <div className="flex-1 p-6 border-r border-orange-200">
                      <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        Islamabad Locations
                      </h4>
                      <div className="space-y-1">
                        <NavigationMenuLink asChild>
                          <Link to="/catering-services-dha-islamabad" className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/70 hover:shadow-md hover:text-red-600 focus:bg-white/70 focus:text-red-600 border border-transparent hover:border-red-200">
                            <div className="text-sm font-semibold leading-none">DHA Islamabad</div>
                            <div className="text-xs text-gray-500 mt-1">Premium catering</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/catering-services-bahria-town" className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/70 hover:shadow-md hover:text-red-600 focus:bg-white/70 focus:text-red-600 border border-transparent hover:border-red-200">
                            <div className="text-sm font-semibold leading-none">Bahria Town</div>
                            <div className="text-xs text-gray-500 mt-1">Reliable services</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/catering-services-g11-islamabad" className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/70 hover:shadow-md hover:text-red-600 focus:bg-white/70 focus:text-red-600 border border-transparent hover:border-red-200">
                            <div className="text-sm font-semibold leading-none">G-11 Islamabad</div>
                            <div className="text-xs text-gray-500 mt-1">Affordable options</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/catering-services-f10-islamabad" className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/70 hover:shadow-md hover:text-red-600 focus:bg-white/70 focus:text-red-600 border border-transparent hover:border-red-200">
                            <div className="text-sm font-semibold leading-none">F-10 Islamabad</div>
                            <div className="text-xs text-gray-500 mt-1">Event focused</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/catering-services-blue-area" className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/70 hover:shadow-md hover:text-red-600 focus:bg-white/70 focus:text-red-600 border border-transparent hover:border-red-200">
                            <div className="text-sm font-semibold leading-none">Blue Area</div>
                            <div className="text-xs text-gray-500 mt-1">Corporate experts</div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                    
                    {/* Rawalpindi Locations Column */}
                    <div className="flex-1 p-6">
                      <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Rawalpindi Locations
                      </h4>
                      <div className="space-y-1">
                        <NavigationMenuLink asChild>
                          <Link to="/catering-services-saddar-rawalpindi" className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/70 hover:shadow-md hover:text-yellow-600 focus:bg-white/70 focus:text-yellow-600 border border-transparent hover:border-yellow-200">
                            <div className="text-sm font-semibold leading-none">Saddar Rawalpindi</div>
                            <div className="text-xs text-gray-500 mt-1">Professional catering</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/catering-services-bahria-rawalpindi" className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/70 hover:shadow-md hover:text-yellow-600 focus:bg-white/70 focus:text-yellow-600 border border-transparent hover:border-yellow-200">
                            <div className="text-sm font-semibold leading-none">Bahria Rawalpindi</div>
                            <div className="text-xs text-gray-500 mt-1">Quality services</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/catering-services-chaklala" className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/70 hover:shadow-md hover:text-yellow-600 focus:bg-white/70 focus:text-yellow-600 border border-transparent hover:border-yellow-200">
                            <div className="text-sm font-semibold leading-none">Chaklala</div>
                            <div className="text-xs text-gray-500 mt-1">Reliable options</div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
              {navLinks.filter(l => l.label !== 'Services').map(l => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2">
                  {l.label}
                </Link>
              ))}
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground py-2">Services</div>
                <Link to="/catering-services-islamabad" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2 pl-4">
                  Catering Services Islamabad
                </Link>
                <Link to="/catering-services-rawalpindi" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2 pl-4">
                  Catering Services Rawalpindi
                </Link>
                <Link to="/wedding-catering-services-islamabad" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2 pl-4">
                  Wedding Catering Services
                </Link>
                <Link to="/corporate-catering-services-islamabad" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2 pl-4">
                  Corporate Catering Services
                </Link>
                
                <div className="text-sm font-medium text-muted-foreground py-2 mt-4">Islamabad Locations</div>
                <Link to="/catering-services-dha-islamabad" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2 pl-4">
                  DHA Islamabad
                </Link>
                <Link to="/catering-services-bahria-town" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2 pl-4">
                  Bahria Town
                </Link>
                <Link to="/catering-services-g11-islamabad" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2 pl-4">
                  G-11 Islamabad
                </Link>
                <Link to="/catering-services-f10-islamabad" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2 pl-4">
                  F-10 Islamabad
                </Link>
                <Link to="/catering-services-blue-area" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2 pl-4">
                  Blue Area
                </Link>
                
                <div className="text-sm font-medium text-muted-foreground py-2 mt-4">Rawalpindi Locations</div>
                <Link to="/catering-services-saddar-rawalpindi" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2 pl-4">
                  Saddar Rawalpindi
                </Link>
                <Link to="/catering-services-bahria-rawalpindi" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2 pl-4">
                  Bahria Rawalpindi
                </Link>
                <Link to="/catering-services-chaklala" onClick={() => setOpen(false)} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary py-2 pl-4">
                  Chaklala
                </Link>
              </div>
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
