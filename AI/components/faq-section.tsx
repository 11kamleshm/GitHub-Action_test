import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What's included in the starting 999 DHM package?",
    answer:
      "Our starter package includes AI chatbot setup with 24/7 automation, basic process automation for one workflow, integration with your existing systems, testing and deployment, and 30 days of support. Additional features like custom CRM, advanced automation, and reporting dashboards are available based on your specific requirements.",
  },
  {
    question: "How quickly can you start automating my business processes?",
    answer:
      "We can begin project planning within 24-48 hours of onboarding. Simple AI chatbot setups can be deployed within a week, while custom CRM or complex automation projects typically take 2-4 weeks depending on scope and integrations required.",
  },
  {
    question: "Do you work with businesses outside the UAE?",
    answer:
      "Yes! We serve businesses across UAE, India, US, and Canada. Our global team provides support across different time zones, and we're experienced with local business requirements, payment systems, and compliance standards in each region.",
  },
  {
    question: "Can you integrate with our existing software and systems?",
    answer:
      "Absolutely. We specialize in API integrations and can connect your automation solutions with CRM systems, WhatsApp Business, payment gateways, ecommerce platforms (Shopify, WooCommerce), and most business software. We'll assess your current tech stack during our free consultation.",
  },
  {
    question: "How much manual work can automation actually eliminate?",
    answer:
      "Our clients typically see 60-80% reduction in manual, repetitive tasks. For example, AI chatbots handle 70-90% of customer inquiries automatically, process automation eliminates data entry completely, and ecommerce automation manages orders from placement to fulfillment without human intervention.",
  },
  {
    question: "What if the automation doesn't deliver the expected results?",
    answer:
      "We offer transparent milestone-based payments and project adjustments based on performance. Most clients see ROI within 30 days. If automation isn't meeting agreed benchmarks, we'll refine the system at no extra cost until targets are achieved.",
  },
  {
    question: "How secure is our business data with your AI solutions?",
    answer:
      "We use enterprise-grade security with end-to-end encryption, GDPR & SOC 2 compliant infrastructure, and secure cloud deployment. All projects include NDA protection, and we never store sensitive data unnecessarily. Your business information is protected with bank-level security protocols.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! We offer flexible monthly support plans for system monitoring, updates, and optimization. This includes AI model improvements, bug fixes, feature additions, and technical support. Most clients opt for ongoing support to maximize their automation ROI.",
  },
  {
    question: "Can you help us scale from simple automation to complex AI systems?",
    answer:
      "Definitely. We design solutions with scalability in mind. You might start with a basic chatbot for 999 DHM, then add process automation, custom CRM features, and advanced reporting as your business grows. Our modular approach lets you expand automation capabilities over time.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16 animate-fade-in leading-tight">
          AI Automation & Custom IT Solutions Questions
        </h2>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {faqs.map((faq, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 sm:p-5 lg:p-6 text-left bg-gray-50 rounded-lg sm:rounded-xl hover:bg-blue-50 transition-all duration-300 group border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-md">
                <span className="font-medium sm:font-semibold text-sm sm:text-base lg:text-lg text-gray-900 pr-4 leading-relaxed">
                  {faq.question}
                </span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-500 group-hover:text-blue-600 flex-shrink-0 group-data-[state=open]:rotate-180 transition-all duration-200" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 sm:p-5 lg:p-6 pt-0 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                {faq.answer}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-100">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Automate Your Business Operations?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
              Book a free expert consultation to discuss your specific automation needs and get a custom solution roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">Start from 999 DHM</span>
              <span className="text-xs sm:text-sm lg:text-base text-gray-500">UAE | India | US | Canada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}