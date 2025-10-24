import React from "react";
import Newsletter from "../components/CTASection";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import HeroMapSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import StatsCards from "../components/StatsCard";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroMapSection />
      <HowItWorks />
      <StatsCards />
      <Newsletter />
      <Footer />
    </>
  );
};

export default LandingPage;
