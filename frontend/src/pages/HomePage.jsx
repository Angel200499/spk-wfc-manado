import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeatureSection from "@/components/landing/FeatureSection";
import Footer from "@/components/landing/Footer";
import WeatherCard from "@/components/WeatherCard";

const HomePage = () => {
  return (
    <div className="bg-stone-950 min-h-screen">
      <Navbar />
      <HeroSection />
      <WeatherCard />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default HomePage;