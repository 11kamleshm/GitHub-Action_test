import { CreditCard, Settings, ShoppingCart } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
          Still Waiting to Start Your Online Store?
        </h2>
        <p className="text-lg text-gray-600 mb-4 max-w-4xl mx-auto animate-fade-in-delay">
          Starting an online store can feel overwhelming when you're dealing
          with technical complexities and multiple integrations.
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto animate-fade-in-delay-2">
          We build and manage your eCommerce backend so you can start selling
          from Day 1.
        </p>

        {/* Pain Points List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 animate-fade-in">
            <div className="text-red-500 text-2xl mb-3 flex justify-center items-center">
              <Settings size={50} />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              No tech team to build your store?
            </h4>
            <p className="text-sm text-gray-600">
              Technical development shouldn't hold back your business dreams
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 animate-fade-in-delay">
            <div className="text-red-500 text-2xl mb-3 flex justify-center items-center">
              <CreditCard size={50} />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Don't know how to set up payment or delivery partners?
            </h4>
            <p className="text-sm text-gray-600">
              Complex integrations made simple for you
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 animate-fade-in">
            <div className="text-red-500 text-2xl mb-3 flex justify-center items-center">
              <ShoppingCart size={50} />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Unsure how to list on Amazon or Flipkart?
            </h4>
            <p className="text-sm text-gray-600">
              We handle marketplace listings and seller panels
            </p>
          </div>
        </div>

        <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 text-white animate-slide-up">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8">
            How Our Complete eCommerce Setup Transforms Your Business
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                3
              </div>
              <div className="text-xs sm:text-sm font-semibold">
                days to launch your store
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                50
              </div>
              <div className="text-xs sm:text-sm font-semibold">
                products uploaded with details
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                80%
              </div>
              <div className="text-xs sm:text-sm font-semibold">
                reduction in RTO losses
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                100%
              </div>
              <div className="text-xs sm:text-sm font-semibold">
                white-labeled & branded
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded-lg p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                24/7
              </div>
              <div className="text-xs sm:text-sm font-semibold">
                support & maintenance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
