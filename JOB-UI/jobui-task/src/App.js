import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RecommendedJobs from "./components/RecommendedJobs";
import HowItWorks from "./components/HowItWorks";
import Categories from "./components/Categories";
import TrustedCompanies from "./components/TrustedCompanies";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <RecommendedJobs />
      <HowItWorks />
      <Categories />
      <TrustedCompanies />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
