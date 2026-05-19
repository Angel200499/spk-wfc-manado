import Navbar from "@/components/landing/Navbar";

import HeroSection from "@/components/landing/HeroSection";

import FeatureSection from "@/components/landing/FeatureSection";

import Footer from "@/components/landing/Footer";

import AboutSection from "@/components/landing/AboutSection";

import CafeSection from "@/components/landing/CafeSection";

export default function LandingPage() {
  return (
    <div>
      <Navbar />

      <HeroSection />

      <FeatureSection />

      <AboutSection />

      <CafeSection />
    </div>
  );
}