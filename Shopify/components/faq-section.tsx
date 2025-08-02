import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Is this a custom-built store?",
    answer: "Yes! We use Shopify or WordPress, depending on your preference and goals.",
  },
  {
    question: "What if I want to add more than 50 products?",
    answer: "We offer easy upgrades for more products or bulk import support.",
  },
  {
    question: "Will you set up delivery and payment?",
    answer: "Yes. We fully integrate logistics and payment partners for your region.",
  },
  {
    question: "Can I use my own domain and brand?",
    answer: "100%. Everything is white-labeled and branded for you.",
  },
  {
    question: "Is it truly ready to sell?",
    answer: "Absolutely. You can take orders on Day 1 after setup.",
  },
  {
    question: "Which countries do you support?",
    answer: "We build stores for UAE, India, US & Canada with localized payment methods, shipping partners, and marketplace integrations.",
  },
  {
    question: "What about ongoing support after setup?",
    answer: "You get 24x7 support via WhatsApp, email, and phone for just 299 DHM/month. No hidden costs or per-incident fees.",
  },
  {
    question: "Do you handle Amazon and Flipkart listings?",
    answer: "Yes! Marketplace listing on Amazon, Flipkart, and other platforms is included with seller panel setup.",
  },
  {
    question: "What if I need help with RTO and returns?",
    answer: "Our AI-powered RTO & NDR management system minimizes losses with smart alerts, tracking, and automated IVR calling.",
  },
  {
    question: "Is the 999 DHM really all-inclusive?",
    answer: "Yes! You get store development, 50 product uploads, payment integration, logistics setup, CRM, WhatsApp integration, IVR, and marketplace listings — everything in one package.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 group">
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 text-gray-600">{faq.answer}</CollapsibleContent>
            </Collapsible>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">Our team is ready to help you get started with your eCommerce store.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="font-medium">💬 WhatsApp Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="font-medium">📧 Email Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="font-medium">📞 Phone Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}