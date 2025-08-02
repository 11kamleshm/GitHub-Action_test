import { Check, X } from "lucide-react";

export default function ComparisonTable() {
  return (
    <section className="py-16 bg-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 animate-fade-in">
          Launch Now. Maintain Monthly. Simple Pricing.
        </h2>
        <p className="text-center text-lg mb-8 opacity-90">
          Why Our 999 DHM Setup + 299 DHM/Month Beats Every Alternative
        </p>

        <div className="bg-white rounded-2xl p-4 sm:p-6 overflow-x-auto animate-slide-up">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 sm:p-4 text-gray-900 font-bold">
                  Feature
                </th>
                <th className="text-center p-3 sm:p-4 text-gray-900 font-bold">
                  Our Service
                </th>
                <th className="text-center p-3 sm:p-4 text-gray-900 font-bold">
                  DIY Setup
                </th>
                <th className="text-center p-3 sm:p-4 text-gray-900 font-bold">
                  Hire Developers
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 font-medium">Setup Cost</td>
                <td className="text-center p-3 sm:p-4">
                  <div className="font-bold text-green-600">999 DHM</div>
                  <div className="text-sm">one-time</div>
                </td>
                <td className="text-center p-3 sm:p-4">
                  <div className="font-bold text-yellow-600">Free</div>
                  <div className="text-sm">but 100+ hours</div>
                </td>
                <td className="text-center p-3 sm:p-4">
                  <div className="font-bold text-red-600">5000+ DHM</div>
                  <div className="text-sm">+ months wait</div>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 font-medium">Launch Time</td>
                <td className="text-center p-3 sm:p-4 font-bold text-green-600">
                  3 Days
                </td>
                <td className="text-center p-3 sm:p-4 font-bold text-yellow-600">
                  2-6 Months
                </td>
                <td className="text-center p-3 sm:p-4 font-bold text-red-600">
                  3-6 Months
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 font-medium">Products Upload</td>
                <td className="text-center p-3 sm:p-4">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                  <div className="text-xs mt-1">50 products included</div>
                </td>
                <td className="text-center p-3 sm:p-4">
                  <X className="w-5 h-5 text-red-600 mx-auto" />
                  <div className="text-xs mt-1">Do it yourself</div>
                </td>
                <td className="text-center p-3 sm:p-4">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                  <div className="text-xs mt-1">Extra cost</div>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 font-medium">Payment Integration</td>
                <td className="text-center p-3 sm:p-4 font-bold text-green-600">
                  All Included
                </td>
                <td className="text-center p-3 sm:p-4 font-bold text-red-600">
                  Complex Setup
                </td>
                <td className="text-center p-3 sm:p-4 font-bold text-yellow-600">
                  Extra Cost
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 font-medium">Logistics & RTO</td>
                <td className="text-center p-3 sm:p-4">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                  <div className="text-xs mt-1">AI-powered</div>
                </td>
                <td className="text-center p-3 sm:p-4">
                  <X className="w-5 h-5 text-red-600 mx-auto" />
                  <div className="text-xs mt-1">Manual setup</div>
                </td>
                <td className="text-center p-3 sm:p-4">
                  <X className="w-5 h-5 text-red-600 mx-auto" />
                  <div className="text-xs mt-1">Not included</div>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 font-medium">CRM + WhatsApp + IVR</td>
                <td className="text-center p-3 sm:p-4">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="text-center p-3 sm:p-4">
                  <X className="w-5 h-5 text-red-600 mx-auto" />
                </td>
                <td className="text-center p-3 sm:p-4">
                  <X className="w-5 h-5 text-red-600 mx-auto" />
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 font-medium">Marketplace Listing</td>
                <td className="text-center p-3 sm:p-4 font-bold text-green-600">
                  Included
                </td>
                <td className="text-center p-3 sm:p-4 font-bold text-red-600">
                  Learn & Do
                </td>
                <td className="text-center p-3 sm:p-4 font-bold text-red-600">
                  Not Included
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 font-medium">Ongoing Support</td>
                <td className="text-center p-3 sm:p-4">
                  <div className="font-bold text-green-600">299 DHM/month</div>
                  <div className="text-xs">24/7 support</div>
                </td>
                <td className="text-center p-3 sm:p-4 font-bold text-red-600">
                  No Support
                </td>
                <td className="text-center p-3 sm:p-4">
                  <div className="font-bold text-red-600">1000+ DHM</div>
                  <div className="text-xs">per issue</div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-3 sm:p-4 font-medium">Ready to Sell</td>
                <td className="text-center p-3 sm:p-4 font-bold text-green-600">
                  Day 1
                </td>
                <td className="text-center p-3 sm:p-4 font-bold text-red-600">
                  Months Later
                </td>
                <td className="text-center p-3 sm:p-4 font-bold text-yellow-600">
                  After Testing
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
