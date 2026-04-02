import Navbar from '@/components/landing/Navbar';
import OurServices from '@/components/landing/OurServices';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import Footer from '@/components/landing/Footer';
import { WhatsAppFloatingButton } from '@/components/landing/WhatsAppChat';
import usePageSeo from '@/hooks/usePageSeo';
import useJsonLd from '@/hooks/useJsonLd';

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Corporate Catering Service',
  provider: {
    '@type': 'FoodEstablishment',
    name: "Safiullah's Food",
    url: 'https://sucatering.online',
    telephone: '+92-331-2311138',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Islamabad',
      addressCountry: 'PK',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Islamabad' },
    { '@type': 'City', name: 'Rawalpindi' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Catering Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Daily Office Meal Plan', description: 'Rozana fresh lunch delivery for offices and call centers in Islamabad. Monday to Saturday, minimum 20 employees.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Event Catering', description: 'Full catering service for company dinners, annual functions, office parties and product launches in Islamabad.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'BBQ Catering Service', description: 'Fresh BBQ catering including Seekh Kabab, Chicken Tikka, Boti for corporate events and offices in Islamabad.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Weekly Corporate Package', description: 'Weekly meal plan for medium size offices and project teams. 3 to 5 days delivery per week.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Keto Meal Delivery', description: 'Healthy keto meal plans delivered to homes and offices in Islamabad and Rawalpindi.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Call Center Food Supply', description: 'Dedicated food supply service for call centers in Islamabad with flexible timing and bulk orders.' } },
    ],
  },
};

const servicesBreadcrumbSchema = {
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
      name: 'Services',
      item: 'https://sucatering.online/services',
    },
  ],
};

export default function ServicesPage() {
  usePageSeo(
    "Catering Services Islamabad | Corporate, Events, Daily Meals | Safiullah's Food",
    "Safiullah's Food ki catering services — daily office meals, corporate events, call center food supply, BBQ catering Islamabad. Professional service, hygienic kitchen, on-time delivery guaranteed.",
  );
  useJsonLd([
    { id: 'schema-services', data: servicesSchema },
    { id: 'schema-breadcrumb-services', data: servicesBreadcrumbSchema },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <OurServices />
        <WhyChooseUs />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
