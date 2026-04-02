import Navbar from '@/components/landing/Navbar';
import About from '@/components/landing/About';
import Footer from '@/components/landing/Footer';
import { WhatsAppFloatingButton } from '@/components/landing/WhatsAppChat';
import usePageSeo from '@/hooks/usePageSeo';

export default function AboutPage() {
  usePageSeo(
    "About Us | Safiullah's Food — Islamabad Premium Kitchen Catering",
    "Safiullah's Food Islamabad ka trusted catering brand hai. Fresh, hygienic aur delicious khana offices aur events ke liye. Hamare baare mein janiye — quality aur punctuality hamara wada hai.",
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <About />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
