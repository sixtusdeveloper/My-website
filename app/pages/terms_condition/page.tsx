import React from "react";
import TermsConditions from "@/components/TermsConditions";
import Footer from "@/components/Footer";
import TermsHeroSection from "@/components/TermsHeroSection";

const TermsCondition: React.FC = () => {
  return (
    <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-screen">
        <TermsHeroSection />
        <TermsConditions />
        <Footer />
      </div>
    </main>
  );
};

export default TermsCondition;
