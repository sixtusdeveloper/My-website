import React from "react";
import PrivacyPolicySection from "@/components/PrivacyPolicy";
import PrivacyHeroSection from "@/components/PrivacyHeroSection";
import Footer from "@/components/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-screen">
        <PrivacyHeroSection />
        <PrivacyPolicySection />
        <Footer />
      </div>
    </main>
  );
};

export default PrivacyPolicy;
