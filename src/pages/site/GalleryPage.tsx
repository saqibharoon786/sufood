import Navbar from '@/components/landing/Navbar';
import Gallery from '@/components/landing/Gallery';
import Testimonials from '@/components/landing/Testimonials';
import Footer from '@/components/landing/Footer';
import { WhatsAppFloatingButton } from '@/components/landing/WhatsAppChat';
import usePageSeo from '@/hooks/usePageSeo';

export default function GalleryPage() {
  usePageSeo(
    "Food Gallery | BBQ, Biryani, Tikka Photos | Safiullah's Food Islamabad",
    "Safiullah's Food ki food gallery dekhein — BBQ, Biryani, Tikka, Karahi aur bohat kuch. Fresh, hygienic aur delicious khana Islamabad ke offices aur events ke liye. Quality dekhein khud!",
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
