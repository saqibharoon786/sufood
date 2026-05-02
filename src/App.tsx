import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index.tsx";
import BBQMenuPage from "./pages/BBQMenuPage.tsx";
import CorporatePackagesPage from "./pages/CorporatePackagesPage.tsx";
import KetoMealsPage from "./pages/KetoMealsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import BlogListPage from "./pages/blog/BlogListPage.tsx";
import BlogPostPage from "./pages/blog/BlogPostPage.tsx";
import AboutPage from "./pages/site/AboutPage.tsx";
import MenuPage from "./pages/site/MenuPage.tsx";
import DealsPage from "./pages/site/DealsPage.tsx";
import ServicesPage from "./pages/site/ServicesPage.tsx";
import CoveragePage from "./pages/site/CoveragePage.tsx";
import GalleryPage from "./pages/site/GalleryPage.tsx";
import CateringServicesPage from "./pages/site/CateringServicesPage.tsx";
import CateringServicesRawalpindiPage from "./pages/site/CateringServicesRawalpindiPage.tsx";
import WeddingCateringServicesPage from "./pages/site/WeddingCateringServicesPage.tsx";
import CorporateCateringServicesPage from "./pages/site/CorporateCateringServicesPage.tsx";
import DHAIslamabadPage from "./pages/locations/DHAIslamabadPage.tsx";
import BahriaTownPage from "./pages/locations/BahriaTownPage.tsx";
import G11IslamabadPage from "./pages/locations/G11IslamabadPage.tsx";
import F10IslamabadPage from "./pages/locations/F10IslamabadPage.tsx";
import BlueAreaPage from "./pages/locations/BlueAreaPage.tsx";
import SaddarRawalpindiPage from "./pages/locations/SaddarRawalpindiPage.tsx";
import BahriaRawalpindiPage from "./pages/locations/BahriaRawalpindiPage.tsx";
import ChaklalaPage from "./pages/locations/ChaklalaPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import POSLayout from "./components/pos/POSLayout.tsx";
import POSDashboard from "./pages/pos/POSDashboard.tsx";
import MenuManagement from "./pages/pos/MenuManagement.tsx";
import DealsManagement from "./pages/pos/DealsManagement.tsx";
import Login from "./pages/pos/Login.tsx";
import PageGuard from "./components/pos/PageGuard.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bbq-menu" element={<BBQMenuPage />} />
            <Route path="/corporate-packages" element={<CorporatePackagesPage />} />
            <Route path="/keto-meals" element={<KetoMealsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/deals" element={<DealsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/catering-services-islamabad" element={<CateringServicesPage />} />
            <Route path="/catering-services-rawalpindi" element={<CateringServicesRawalpindiPage />} />
            <Route path="/wedding-catering-services-islamabad" element={<WeddingCateringServicesPage />} />
            <Route path="/corporate-catering-services-islamabad" element={<CorporateCateringServicesPage />} />
            <Route path="/catering-services-dha-islamabad" element={<DHAIslamabadPage />} />
            <Route path="/catering-services-bahria-town" element={<BahriaTownPage />} />
            <Route path="/catering-services-g11-islamabad" element={<G11IslamabadPage />} />
            <Route path="/catering-services-f10-islamabad" element={<F10IslamabadPage />} />
            <Route path="/catering-services-blue-area" element={<BlueAreaPage />} />
            <Route path="/catering-services-saddar-rawalpindi" element={<SaddarRawalpindiPage />} />
            <Route path="/catering-services-bahria-rawalpindi" element={<BahriaRawalpindiPage />} />
            <Route path="/catering-services-chaklala" element={<ChaklalaPage />} />
            <Route path="/coverage" element={<CoveragePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/wedding-catering-services" element={<WeddingCateringServicesPage />} />
            <Route path="/corporate-catering-services" element={<CorporateCateringServicesPage />} />
            <Route path="/pos/login" element={<Login />} />
            <Route path="/pos" element={<POSLayout />}>
              <Route index element={<PageGuard page="dashboard"><POSDashboard /></PageGuard>} />
              <Route path="menu" element={<PageGuard page="menu"><MenuManagement /></PageGuard>} />
              <Route path="deals" element={<PageGuard page="deals"><DealsManagement /></PageGuard>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
