import Navbar from '@/components/landing/Navbar';
import FeaturedMenu from '@/components/landing/FeaturedMenu';
import Footer from '@/components/landing/Footer';
import { WhatsAppFloatingButton } from '@/components/landing/WhatsAppChat';
import usePageSeo from '@/hooks/usePageSeo';
import useJsonLd from '@/hooks/useJsonLd';

const menuBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://sucatering.online',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Menu',
      item: 'https://sucatering.online/menu',
    },
  ],
};

export default function MenuPage() {
  usePageSeo(
    "Our Menu | BBQ, Biryani, Tikka, Pulao, Karahi | Safiullah's Food Islamabad",
    "Safiullah's Food ka poora menu dekhein — BBQ, Chicken Biryani, Tikka, Pulao, Daal Chawal, Karahi aur bohat kuch. Islamabad aur Rawalpindi mein bulk orders available. Corporate pricing ke liye call karein.",
  );
  useJsonLd([{ id: 'schema-breadcrumb-menu', data: menuBreadcrumbSchema }]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <FeaturedMenu />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
