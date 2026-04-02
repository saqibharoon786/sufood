import Navbar from '@/components/landing/Navbar';
import ServiceCoverage from '@/components/landing/ServiceCoverage';
import Footer from '@/components/landing/Footer';
import { WhatsAppFloatingButton } from '@/components/landing/WhatsAppChat';
import usePageSeo from '@/hooks/usePageSeo';

export default function CoveragePage() {
  usePageSeo(
    "Delivery Coverage Areas | Islamabad & Rawalpindi | Safiullah's Food",
    "Safiullah's Food Islamabad aur Rawalpindi ke in areas mein deliver karta hai — F sectors, G sectors, Blue Area, DHA, Bahria Town, Saddar aur aur bhi. Apna area check karein!",
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <ServiceCoverage />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
