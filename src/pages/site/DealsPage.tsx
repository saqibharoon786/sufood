import Navbar from '@/components/landing/Navbar';
import DealsSection from '@/components/landing/DealsSection';
import Footer from '@/components/landing/Footer';
import { WhatsAppFloatingButton } from '@/components/landing/WhatsAppChat';
import usePageSeo from '@/hooks/usePageSeo';

export default function DealsPage() {
  usePageSeo(
    "Latest Deals & Packages | Safiullah's Food Islamabad Catering",
    "Safiullah's Food ke latest deals aur family packages dekhein. Office lunch deals, BBQ packages, bulk order discounts — Islamabad aur Rawalpindi mein delivery available. Abhi order karein!",
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <DealsSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
