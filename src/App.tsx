import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index.tsx";
import BBQMenuPage from "./pages/BBQMenuPage.tsx";
import CorporatePackagesPage from "./pages/CorporatePackagesPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
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
            <Route path="/contact-us" element={<ContactPage />} />
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
