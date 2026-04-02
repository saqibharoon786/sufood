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
import FaqSection from '@/components/landing/FaqSection';
import Footer from '@/components/landing/Footer';
import { WhatsAppFloatingButton } from '@/components/landing/WhatsAppChat';
import usePageSeo from '@/hooks/usePageSeo';
import useJsonLd from '@/hooks/useJsonLd';

const homeBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://sucatering.online',
    },
  ],
};

export default function Index() {
  usePageSeo(
    "Safiullah's Food | Corporate Catering Service Islamabad | BBQ, Biryani, Tikka",
    "Islamabad aur Rawalpindi mein offices aur call centers ke liye best catering service. Safiullah's Food — BBQ, Biryani, Tikka, Pulao, Daal Chawal. Bulk orders available. Abhi quote lein!",
  );
  useJsonLd([{ id: 'schema-breadcrumb-home', data: homeBreadcrumbSchema }]);

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
      <FaqSection />
      <Contact />
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
} 