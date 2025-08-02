import { Button } from "@/components/ui/button"
import { Shield, Globe, Zap, Check } from "lucide-react"

export default function FinalCTASection() {
  return (
    <section className="py-16 bg-blue-800 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-4 sm:space-x-8 mb-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full animate-pulse"></div>
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
          Ready to Launch Your Online Store?
        </h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90 animate-fade-in-delay">
          We'll build your store, load your products, handle your logistics, and get you listed — all in 3 days.
        </p>
        <p className="text-xl sm:text-2xl font-bold mb-12 text-yellow-300 animate-fade-in-delay">
          Just 999 DHM one-time + 299/month. No hassle. No code.
        </p>
        <Button id="footer-button" className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 text-lg sm:text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 mb-12 animate-bounce-in">
          🔵 Start My Store Setup Today
        </Button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-2 bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300">
            <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
            <span className="text-xs sm:text-sm font-medium text-center">Built for UAE | India | US | Canada</span>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
            <span className="text-xs sm:text-sm font-medium text-center">Marketplace-Ready</span>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
            <span className="text-xs sm:text-sm font-medium text-center">24x7 Support</span>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300">
            <Check className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
            <span className="text-xs sm:text-sm font-medium text-center">No Tech Needed</span>
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Up to 50 Products</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Amazon/Flipkart Listing</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Payment + Delivery Setup</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>CRM + WhatsApp + IVR</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}