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

export default function Index() {
  usePageSeo(
    'Su Food | Corporate Catering Service Islamabad | BBQ, Biryani, Tikka',
    'Islamabad corporate catering for offices and call centers. SU Food serves BBQ, Biryani, Pulao, Tikka, and Daal Chawal for bulk orders from 50 to 1000+ people.',
  );

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
