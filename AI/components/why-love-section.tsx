import { Zap, Users, Shield } from "lucide-react";

export default function WhyLoveSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 lg:mb-16 animate-fade-in leading-tight">
          Why UAE Executives Choose Our LinkedIn Growth?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          <div className="text-center animate-slide-up">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 hover:scale-110 transition-transform shadow-lg">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              AI-Powered Authority Building
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              Our AI creates executive-level content that positions you as a
              thought leader. Smart automation meets human expertise for maximum
              impact.
            </p>
          </div>
          <div className="text-center animate-slide-up-delay">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 hover:scale-110 transition-transform shadow-lg">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              C-Level Network Access
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              Connect with investors, founders, and board members across UAE.
              Strategic outreach that opens doors to opportunities worth
              millions.
            </p>
          </div>
          <div className="text-center animate-slide-up-delay-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 hover:scale-110 transition-transform shadow-lg">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Proven Results System
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              90% of our clients see results in 30 days. Transparent reporting,
              no long contracts. Just 1499 DHM/month for complete LinkedIn
              dominance.
            </p>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
              24hrs
            </div>
            <div className="text-sm sm:text-base lg:text-lg font-medium text-gray-700">
              Setup Time
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">
              Start seeing activity immediately
            </div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
              50+
            </div>
            <div className="text-sm sm:text-base lg:text-lg font-medium text-gray-700">
              Monthly Connections
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">
              Quality C-level professionals
            </div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
              100+
            </div>
            <div className="text-sm sm:text-base lg:text-lg font-medium text-gray-700">
              UAE Executives Served
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">
              Trusted by the best
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
