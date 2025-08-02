import { Check, Shield, Clock, Zap, Globe, Handshake } from "lucide-react";

export default function AwardsSecuritySection() {
  return (
    <section className="pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4 animate-fade-in">
          Why eCommerce Founders Across UAE, India & US/Canada Trust Us
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
          🏆 Built with AI + Human Expertise for Scale-ready eCommerce Success
        </p>

        {/* Trust Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 rounded-xl p-6 text-center animate-fade-in">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Launch in Just 3 Days
            </h3>
            <p className="text-gray-600">
              From concept to selling - fastest in the industry
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 text-center animate-fade-in-delay">
            <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Full Ecosystem Setup</h3>
            <p className="text-gray-600">
              Payment + Delivery + CRM all integrated
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 text-center animate-fade-in-delay-2">
            <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reduce RTO & NDR</h3>
            <p className="text-gray-600">AI Rules + IVR minimize losses</p>
          </div>
        </div>

        <div className="bg-blue-600 rounded-xl p-4 sm:p-5 text-white grid lg:grid-cols-2 gap-4 items-center animate-slide-up-delay mb-4 max-w-4xl w-full mx-auto">
          <div className="text-center lg:text-left flex justify-center items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-400 rounded-full mx-auto lg:mx-0 mb-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Handshake className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>

          <div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">
              Real Human Support via WhatsApp, Email, Call
            </h3>
            <p className="text-base mb-4">
              Your eCommerce success is our priority. 24/7 support team ready to
              help with any store issues or questions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm">SSL encrypted transactions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm">PCI DSS compliant payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm">White-labeled & fully branded</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-blue-50 rounded-xl px-6 py-4 mb-6 max-w-4xl w-full mx-auto animate-slide-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold">Up to 50 Products</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold">
                Amazon/Flipkart Listing
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold">No Coding Needed</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold">
                UAE | India | US | Canada
              </span>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-yellow-50 rounded-xl px-4 py-3 mb-6 max-w-md w-full mx-auto animate-slide-up">
          <div className="flex gap-4 justify-center">
            {/* Store Success Rate */}
            <div className="min-w-[100px] text-center pr-3">
              <div className="text-lg font-bold text-green-600 mb-1">98%</div>
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <div className="text-base text-gray-600 mt-1">Success Rate</div>
            </div>

            {/* Customer Satisfaction */}
            <div className="min-w-[100px] text-center pl-3">
              <div className="text-lg font-bold text-blue-600 mb-1">4.9/5</div>
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <div className="text-base text-gray-600 mt-1">Client Reviews</div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-6 bg-gray-50 rounded-full px-6 py-3">
            <span className="text-sm font-semibold text-gray-700">
              Scale-ready from Day 1
            </span>
            <span className="text-sm font-semibold text-gray-700">
              Built with AI + Human Expertise
            </span>
            <span className="text-sm font-semibold text-gray-700">
              Marketplace-Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
