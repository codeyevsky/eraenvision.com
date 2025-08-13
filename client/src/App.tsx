import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/use-language";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/ui/cookie-consent";
import HomePage from "@/pages/home";
import ProductsPage from "@/pages/products";
import LaunchPage from "@/pages/launch";
import ScalePage from "@/pages/scale";
import InvestPage from "@/pages/invest";
import DealBridgePage from "@/pages/dealbridge";
import PricingPage from "@/pages/pricing";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import BlogPage from "@/pages/blog";
import BlogPostPage from "@/pages/blog-post";
import PrivacyPolicyPage from "@/pages/privacy-policy";
import DeliveryAndRefundPolicyPage from "@/pages/delivery-and-refund-policy";
import DistanceSalesContractPage from "@/pages/distance-sales-contract";
import NotFound from "@/pages/not-found";
import { MessageCircle } from "lucide-react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/launch" component={LaunchPage} />
      <Route path="/scale" component={ScalePage} />
      <Route path="/invest" component={InvestPage} />
      <Route path="/dealbridge" component={DealBridgePage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogPostPage} />
      <Route path="/legal/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/legal/delivery-and-refund-policy" component={DeliveryAndRefundPolicyPage} />
      <Route path="/legal/distance-sales-contract" component={DistanceSalesContractPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-white text-gray-900">
            <Header />
            <Router />
            <Footer />
            
            {/* Floating Help Button */}
            <div className="fixed bottom-6 right-6 z-50">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground w-14 h-14 rounded-full shadow-lg hover-lift flex items-center justify-center">
                <MessageCircle className="h-6 w-6" />
              </button>
            </div>
            
            <CookieConsent />
            <Toaster />
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;