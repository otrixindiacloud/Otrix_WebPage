"use client";

import StoreBanner from "../components/StoreBanner";
import HeroSection from "../components/HeroSection";
import IndustriesSection from "../components/IndustriesSection";
import GratitudeSection from "../components/GratitudeSection";
import QualityBanner from "../components/QualityBanner";


export default function Home() {
  return (
    <main className="min-h-screen">
      <StoreBanner />

      <HeroSection />
      <IndustriesSection />
      <GratitudeSection />
      <QualityBanner />
    </main>
  );
}
