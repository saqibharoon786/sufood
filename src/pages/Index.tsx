import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import FeaturedMenu from '@/components/landing/FeaturedMenu';
import DealsSection from '@/components/landing/DealsSection';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import OurServices from '@/components/landing/OurServices';
import ServiceCoverage from '@/components/landing/ServiceCoverage';
import Testimonials from '@/components/landing/Testimonials';
import Gallery from '@/components/landing/Gallery';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import { WhatsAppFloatingButton } from '@/components/landing/WhatsAppChat';
import usePageSeo from '@/hooks/usePageSeo';
import { useEffect } from 'react'; // ✅ Ye add karein

// ✅ Schema data yahan define karein
const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://sucatering.online/#website",
      "url": "https://sucatering.online",
      "name": "Su Food",
      "inLanguage": "en-US"
    },
    {
      "@type": "Restaurant",
      "@id": "https://sucatering.online/#restaurant",
      "name": "Su Food",
      "url": "https://sucatering.online",
      "description": "Islamabad corporate catering for offices and call centers. BBQ, Biryani, Pulao, Tikka for bulk orders.",
      "servesCuisine": ["Pakistani", "BBQ", "Continental"],
      "priceRange": "$$",
      "telephone": "+92-xxx-xxxxxxx",
      "email": "info@sucatering.online",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Islamabad",
        "addressRegion": "Islamabad Capital Territory",
        "addressCountry": "PK"
      },
      "areaServed": "Islamabad",
      "sameAs": [
        "https://www.facebook.com/sufood",
        "https://www.instagram.com/sufood"
      ]
    }
  ]
};

export default function Index() {
  usePageSeo(
    'Su Food | Corporate Catering Service Islamabad | BBQ, Biryani, Tikka',
    'Islamabad corporate catering for offices and call centers. SU Food serves BBQ, Biryani, Pulao, Tikka, and Daal Chawal for bulk orders from 50 to 1000+ people.',
  );

  // ✅ Schema inject karne ka code
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'home-schema';
    script.text = JSON.stringify(homeSchema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('home-schema');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedMenu />
      <DealsSection />
      <WhyChooseUs />
      <OurServices />
      <ServiceCoverage />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
} 