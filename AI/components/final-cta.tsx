import { Button } from "@/components/ui/button";
import { Shield, Users, Zap, Check } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-blue-800 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-3 sm:space-x-6 lg:space-x-8 mb-6 sm:mb-8 lg:mb-12">
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-blue-600 rounded-full animate-pulse"></div>
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-blue-600 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-blue-600 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 animate-fade-in leading-tight">
          Ready to Let AI Automate Your Business While You Focus on Growth?
        </h2>

        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-12 lg:mb-16 opacity-90 animate-fade-in-delay max-w-4xl mx-auto leading-relaxed">
          Let our expert team build your custom AI solutions, automate your
          processes, and scale your operations — while you focus on what matters
          most. Start in 24-48 Hours — From just 999 DHM.
        </p>

        <Button
          id="footer-button"
          className="bg-white text-blue-800 hover:bg-gray-100 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 mb-8 sm:mb-12 lg:mb-16 animate-bounce-in"
        >
          Book Free Expert Call
        </Button>
      </div>
    </section>
  );
}
