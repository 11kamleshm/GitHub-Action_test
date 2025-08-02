"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Check,
  TrendingUp,
  FileText,
  Search,
  Users,
  MessageCircle,
  Settings,
  Bot,
  Zap,
} from "lucide-react";

const tabContent = {
  ai_agents: {
    title: "AI Agents & Chatbots",
    description:
      "Automate lead generation, customer support, and sales processes 24/7 with intelligent AI agents. Never miss a customer inquiry again with smart chatbots that understand context and provide human-like responses.",
    features: [
      "24/7 automated lead generation",
      "Intelligent customer support bots",
      "Sales qualification automation",
      "Multi-platform integration (WhatsApp, website, social)",
      "Natural language processing",
      "Lead scoring and routing",
    ],
    mockups: [
      {
        title: "Response Time",
        subtitle: "<30 seconds average",
        icon: "trending",
      },
      {
        title: "Lead Conversion",
        subtitle: "+150% improvement",
        icon: "users",
      },
      {
        title: "Support Tickets",
        subtitle: "70% auto-resolved",
        icon: "check",
      },
    ],
  },
  automation: {
    title: "Process Automation",
    description:
      "Cut manual work by 70% with AI-based automation that handles repetitive tasks, data entry, and workflow management. Focus on growth while AI handles the routine operations.",
    features: [
      "Workflow automation design",
      "Data entry and processing",
      "Email marketing automation",
      "Invoice and billing automation",
      "Inventory management systems",
      "Custom business logic implementation",
    ],
    mockups: [
      {
        title: "Manual Work Reduced",
        subtitle: "70% time savings",
        icon: "trending",
      },
      {
        title: "Process Efficiency",
        subtitle: "5x faster execution",
        icon: "zap",
      },
      {
        title: "Error Reduction",
        subtitle: "95% fewer mistakes",
        icon: "check",
      },
    ],
  },
  crm_erp: {
    title: "CRM/ERP Development",
    description:
      "Tailored business platforms that are fully integrated with your existing systems. Custom-built CRM and ERP solutions that grow with your business and automate your entire sales and operations pipeline.",
    features: [
      "Custom CRM development",
      "ERP system integration",
      "Sales pipeline automation",
      "Customer data management",
      "Business intelligence dashboards",
      "Third-party system integration",
    ],
    mockups: [
      {
        title: "Data Integration",
        subtitle: "100% system sync",
        icon: "settings",
      },
      {
        title: "Sales Pipeline",
        subtitle: "+200% visibility",
        icon: "trending",
      },
      {
        title: "User Adoption",
        subtitle: "90% team usage",
        icon: "users",
      },
    ],
  },
  web_mobile: {
    title: "Web & Mobile Apps",
    description:
      "Launch MVPs or full products fast with smart UX design. From concept to deployment, we build scalable web and mobile applications that deliver exceptional user experiences and drive business growth.",
    features: [
      "MVP development and testing",
      "Full-stack web applications",
      "Native mobile app development",
      "Progressive Web Apps (PWA)",
      "API development and integration",
      "Cloud deployment and scaling",
    ],
    mockups: [
      {
        title: "Development Speed",
        subtitle: "30-day MVP launch",
        icon: "trending",
      },
      {
        title: "User Experience",
        subtitle: "95% satisfaction rate",
        icon: "check",
      },
      {
        title: "Performance",
        subtitle: "<2s load time",
        icon: "zap",
      },
    ],
  },
  dashboards: {
    title: "Dashboards",
    description:
      "Real-time performance data with auto-generated insights that help you make informed business decisions. Custom dashboards that transform complex data into actionable intelligence.",
    features: [
      "Real-time data visualization",
      "Custom KPI tracking",
      "Automated report generation",
      "Predictive analytics",
      "Multi-source data integration",
      "Mobile-responsive dashboards",
    ],
    mockups: [
      {
        title: "Data Sources",
        subtitle: "10+ integrations",
        icon: "settings",
      },
      {
        title: "Insights Generated",
        subtitle: "Daily automated reports",
        icon: "file",
      },
      {
        title: "Decision Speed",
        subtitle: "3x faster analysis",
        icon: "trending",
      },
    ],
  },
  ecommerce: {
    title: "Ecommerce",
    description:
      "Shopify, WooCommerce, and Wix integrations with complete logistics, payment, and RTO/NDR automation. Streamline your entire ecommerce operation from order to delivery.",
    features: [
      "Multi-platform store integration",
      "Automated order processing",
      "Payment gateway setup",
      "Inventory sync automation",
      "Shipping and logistics automation",
      "Return and refund management",
    ],
    mockups: [
      {
        title: "Order Processing",
        subtitle: "100% automated",
        icon: "check",
      },
      {
        title: "Inventory Sync",
        subtitle: "Real-time updates",
        icon: "trending",
      },
      {
        title: "RTO Reduction",
        subtitle: "40% improvement",
        icon: "users",
      },
    ],
  },
};

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("ai_agents");
  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "check":
        return <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      case "trending":
        return <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      case "search":
        return <Search className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      case "file":
        return <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      case "users":
        return <Users className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      case "message":
        return <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      case "settings":
        return <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      case "zap":
        return <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
      default:
        return <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in leading-tight">
          Build Smarter With Our Custom AI & IT Services
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
          Everything tech your business needs to automate, scale, and succeed —
          from AI agents to custom apps, all in one place.
        </p>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12 lg:mb-16">
          {Object.entries(tabContent).map(([key, content]) => (
            <Button
              key={key}
              className={`${
                activeTab === key
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm lg:text-base px-2 sm:px-3 lg:px-4 py-2 sm:py-3 h-auto min-h-[44px] leading-tight`}
              onClick={() => setActiveTab(key)}
            >
              <span className="break-words hyphens-auto">{content.title}</span>
            </Button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center animate-slide-up">
          {/* Left Content */}
          <div className="text-left order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {currentContent.title}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-800 mb-4 sm:mb-6 leading-relaxed">
              {currentContent.description}
            </p>
            <div className="space-y-2 sm:space-y-3">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Mockups */}
          <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
            {currentContent.mockups.map((mockup, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <h4 className="font-semibold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 text-gray-900">
                  {mockup.title}
                </h4>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded p-3 sm:p-4 flex items-center justify-between">
                  <span className="text-xs sm:text-sm lg:text-base text-white font-medium">
                    {mockup.subtitle}
                  </span>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    {getIcon(mockup.icon)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="bg-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
              Ready to Automate Your Business Operations?
            </h4>
            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-blue-100">
              Join hundreds of businesses that have streamlined their operations
              with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Start from 999 DHM
              </span>
              <span className="text-xs sm:text-sm lg:text-base text-blue-200">
                UAE | India | US/Canada
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
