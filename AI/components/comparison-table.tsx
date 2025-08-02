import { Check, X } from "lucide-react";

export default function ComparisonTable() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in leading-tight">
          Why Starting from 999 DHM Beats Every AI Development Agency
        </h2>

        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 overflow-x-auto animate-slide-up shadow-2xl">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left p-3 sm:p-4 lg:p-6 text-gray-900 font-bold text-sm sm:text-base lg:text-lg">
                  Feature
                </th>
                <th className="text-center p-3 sm:p-4 lg:p-6 text-gray-900 font-bold text-sm sm:text-base lg:text-lg">
                  Our AI Solutions
                </th>
                <th className="text-center p-3 sm:p-4 lg:p-6 text-gray-900 font-bold text-sm sm:text-base lg:text-lg">
                  Traditional Dev Agencies
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  Starting Price
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <div className="font-bold text-green-600 text-lg sm:text-xl lg:text-2xl">
                    999 DHM
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    project-based
                  </div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <div className="font-bold text-red-600 text-lg sm:text-xl lg:text-2xl">
                    5000+ DHM
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    minimum project
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  Project Start Time
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6 font-bold text-green-600 text-sm sm:text-base lg:text-lg">
                  24-48 Hours
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6 font-bold text-red-600 text-sm sm:text-base lg:text-lg">
                  2-4 Weeks
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  AI Chatbot Setup
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" />
                  <div className="text-xs sm:text-sm text-green-600 mt-1">
                    24/7 Automation
                  </div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <div className="font-bold text-red-600 text-sm sm:text-base">
                    Extra Cost
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    +2000-5000 DHM
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  Process Automation
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" />
                  <div className="text-xs sm:text-sm text-green-600 mt-1">
                    70% Work Reduction
                  </div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-red-600 mx-auto" />
                  <div className="text-xs sm:text-sm text-gray-600">
                    Not Specialized
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  Custom CRM/ERP
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" />
                  <div className="text-xs sm:text-sm text-green-600 mt-1">
                    Fully Integrated
                  </div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6 font-bold text-red-600 text-sm sm:text-base">
                  Separate Project
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  MVP Development
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6 font-bold text-green-600 text-sm sm:text-base lg:text-lg">
                  30-Day Launch
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6 font-bold text-red-600 text-sm sm:text-base lg:text-lg">
                  3-6 Months
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  Ecommerce Automation
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" />
                  <div className="text-xs sm:text-sm text-green-600 mt-1">
                    Full Integration
                  </div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-red-600 mx-auto" />
                  <div className="text-xs sm:text-sm text-gray-600">
                    Limited Support
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  Ongoing Support
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" />
                  <div className="text-xs sm:text-sm text-green-600 mt-1">
                    Monthly Plans
                  </div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6 font-bold text-red-600 text-sm sm:text-base lg:text-lg">
                  Expensive Retainers
                </td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="p-3 sm:p-4 lg:p-6 font-medium text-sm sm:text-base">
                  Payment Terms
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mx-auto" />
                  <div className="text-xs sm:text-sm text-green-600 mt-1">
                    Flexible Milestones
                  </div>
                </td>
                <td className="text-center p-3 sm:p-4 lg:p-6 font-bold text-red-600 text-sm sm:text-base lg:text-lg">
                  50% Upfront
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
