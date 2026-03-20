import PromoBar from "@/components/layout/PromoBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/sections/HeroCarousel";
import TrendingCarousel from "@/components/sections/TrendingCarousel";
import AboutSection from "@/components/sections/AboutSection";
import NewsletterForm from "@/components/sections/NewsletterForm";
import CookieBanner from "@/components/sections/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PromoBar />
      <Header />
      <main>
        <HeroCarousel />
        <TrendingCarousel />
        <AboutSection />
        <NewsletterForm />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
