import { Zap, Globe, Shield } from "lucide-react";

export default function WhyLoveSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 animate-fade-in">
          Why Entrepreneurs Love Our eCommerce Setup?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center animate-slide-up">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Built with AI + Human Expertise
            </h3>
            <p className="text-gray-600">
              Our AI analyzes your market while expert onboarders optimize your
              store for conversions and growth. Smart automation meets proven
              strategy.
            </p>
          </div>
          <div className="text-center animate-slide-up-delay">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Built for UAE | India | US | Canada
            </h3>
            <p className="text-gray-600">
              Reach customers globally with localized payment methods, shipping
              partners, and marketplace integrations that work in your region.
            </p>
          </div>
          <div className="text-center animate-slide-up-delay-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              No Hidden Costs — Transparent, Flat Fee
            </h3>
            <p className="text-gray-600">
              No surprises, no hidden charges. Just 999 DHM one-time setup + 299
              DHM/month for everything you need to sell and scale.
            </p>
          </div>
        </div>

        {/* Additional Value Props */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Everything You Need in One Package
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div className="bg-green-50 rounded-lg p-4">
              <div className="font-semibold text-green-800 mb-2">
                Scale-ready from Day 1
              </div>
              <p className="text-green-700">
                Add unlimited products later as you grow
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="font-semibold text-blue-800 mb-2">
                Launch in Just 3 Days
              </div>
              <p className="text-blue-700">
                From signup to selling in record time
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="font-semibold text-purple-800 mb-2">
                Marketplace-Ready
              </div>
              <p className="text-purple-700">
                Amazon & Flipkart listings included
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="font-semibold text-orange-800 mb-2">
                Real Human Support
              </div>
              <p className="text-orange-700">
                24x7 WhatsApp, email & call support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
