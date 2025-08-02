import { Check, Shield, Award, Users } from "lucide-react";

export default function AwardsSecuritySection() {
  return (
    <section className="pt-8 sm:pt-12 lg:pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16 animate-fade-in leading-tight">
          Trusted by Forward-Thinking Businesses Worldwide
        </h2>

        {/* Security & Privacy Card */}
        <div className="bg-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center animate-slide-up-delay mb-6 sm:mb-8 lg:mb-12 max-w-5xl w-full mx-auto shadow-2xl">
          <div className="text-center lg:text-left flex justify-center items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-400 rounded-full mx-auto lg:mx-0 mb-4 lg:mb-0 flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-6">
              Enterprise-Grade Data Security
            </h3>
            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-blue-100 leading-relaxed">
              Your business data and AI systems are protected with bank-level security protocols. We maintain the highest confidentiality standards for all automation projects.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3 justify-center lg:justify-start">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base">
                  End-to-end encryption for all data
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 justify-center lg:justify-start">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base">
                  GDPR & SOC 2 compliant infrastructure
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 justify-center lg:justify-start">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base">
                  Secure cloud deployment & monitoring
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 justify-center lg:justify-start">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base">
                  NDA protection for all projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews and Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {/* Client Satisfaction */}
          <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center animate-slide-up shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
              95%
            </div>
            <div className="text-yellow-400 text-lg sm:text-xl mb-2">★★★★★</div>
            <div className="text-sm sm:text-base lg:text-lg text-gray-600">
              Client Satisfaction
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">
              200+ Businesses Automated
            </div>
          </div>

          {/* Success Rate */}
          <div className="bg-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center animate-slide-up shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2">
              30 Days
            </div>
            <div className="text-yellow-400 text-lg sm:text-xl mb-2">★★★★★</div>
            <div className="text-sm sm:text-base lg:text-lg text-gray-600">
              Average ROI Timeline
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">
              Proven Track Record
            </div>
          </div>

          {/* Technology Partnership */}
          <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center animate-slide-up shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-700 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 mb-2">
              Certified
            </div>
            <div className="text-yellow-400 text-lg sm:text-xl mb-2">★★★★★</div>
            <div className="text-sm sm:text-base lg:text-lg text-gray-600">
              Cloud & AI Partners
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">
              AWS, Azure, OpenAI
            </div>
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gray-100 rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">
              Automating Businesses Since 2020 — UAE | India | US | Canada
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}