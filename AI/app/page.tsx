"use client";

import { useState } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import TestimonialSection from "@/components/testimonial-section";
import WhyLoveSection from "@/components/why-love-section";
import FeaturesSection from "@/components/features-section";
import MarqueeTools from "@/components/marquee-tools";
import ComparisonTable from "@/components/comparison-table";
import AwardsSecuritySection from "@/components/awards-security";
import TrustedCompaniesSection from "@/components/trusted-companies";
import FAQSection from "@/components/faq-section";
import FinalCTASection from "@/components/final-cta";
import Footer from "@/components/footer";
import SEOIntroSection from "@/components/seo-intro-section";

export default function SEOServiceLanding() {
  const [activeTab, setActiveTab] = useState("backlinks");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      {/* <SEOIntroSection /> */}
      <TrustedCompaniesSection />
      <ProblemSection />
      <FeaturesSection />
      <MarqueeTools />
      <TestimonialSection />
      <ComparisonTable />
      <AwardsSecuritySection />
      {/* <WhyLoveSection /> */}
      <FAQSection />
      <FinalCTASection />
      <Footer />

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.4s both;
        }
        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
        }
        .animate-slide-in-delay {
          animation: slide-in 0.6s ease-out 0.2s both;
        }
        .animate-slide-in-delay-2 {
          animation: slide-in 0.6s ease-out 0.4s both;
        }
        .animate-bounce-in {
          animation: bounce-in 1s ease-out;
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
