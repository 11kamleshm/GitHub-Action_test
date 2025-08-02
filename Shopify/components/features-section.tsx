"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Check,
  TrendingUp,
  FileText,
  Search,
  ShoppingCart,
  CreditCard,
  Truck,
  Phone,
} from "lucide-react";

const tabContent = {
  development: {
    title: "Store Development",
    description:
      "Professional Shopify or WordPress eCommerce store with responsive mobile design, secure cart functionality, and optimized user experience. Everything ready to start selling from Day 1.",
    features: [
      "Shopify/WordPress setup",
      "Responsive mobile design",
      "Secure shopping cart",
      "Product catalog organization",
      "Custom branding & design",
      "SEO-optimized structure",
    ],
    mockups: [
      {
        title: "Store Ready",
        subtitle: "Live in 3 Days",
        icon: "check",
      },
      {
        title: "Mobile Optimized",
        subtitle: "100% Responsive",
        icon: "trending",
      },
      {
        title: "Brand Customized",
        subtitle: "White-labeled Design",
        icon: "check",
      },
    ],
  },
  products: {
    title: "Product Upload",
    description:
      "Up to 50 products professionally uploaded with detailed descriptions, categories, pricing, and high-quality images. Each product optimized for search and conversions.",
    features: [
      "50 products fully uploaded",
      "Detailed product descriptions",
      "Category organization",
      "SEO-optimized titles",
      "Image optimization",
      "Pricing & inventory setup",
    ],
    mockups: [
      {
        title: "Products Added",
        subtitle: "Up to 50 Products",
        icon: "check",
      },
      {
        title: "SEO Optimized",
        subtitle: "Search-friendly Titles",
        icon: "search",
      },
      {
        title: "Categorized",
        subtitle: "Organized Catalog",
        icon: "trending",
      },
    ],
  },
  payments: {
    title: "Payment Integration",
    description:
      "Complete payment gateway setup including COD, Cards, UPI, Stripe, Razorpay and more. Multi-currency support for global sales with secure transaction processing.",
    features: [
      "COD, Cards, UPI integration",
      "Stripe & Razorpay setup",
      "Multi-currency support",
      "Secure payment processing",
      "Automated payment tracking",
      "Refund management system",
    ],
    mockups: [
      {
        title: "Payment Methods",
        subtitle: "COD + Cards + UPI",
        icon: "check",
      },
      {
        title: "Global Support",
        subtitle: "Multi-currency Ready",
        icon: "trending",
      },
      {
        title: "Secure Processing",
        subtitle: "SSL Encrypted",
        icon: "check",
      },
    ],
  },
  logistics: {
    title: "Logistics Setup",
    description:
      "Full logistics integration with Shiprocket, Pickrr, Delhivery and more. Automated shipping calculations, tracking, and delivery management for seamless order fulfillment.",
    features: [
      "Shiprocket integration",
      "Multiple delivery partners",
      "Automated shipping rates",
      "Real-time tracking",
      "Delivery notifications",
      "Return management",
    ],
    mockups: [
      {
        title: "Delivery Partners",
        subtitle: "5+ Logistics Integrated",
        icon: "check",
      },
      {
        title: "Auto Tracking",
        subtitle: "Real-time Updates",
        icon: "trending",
      },
      {
        title: "Smart Routing",
        subtitle: "Fastest Delivery",
        icon: "check",
      },
    ],
  },
  crm: {
    title: "CRM & WhatsApp",
    description:
      "Unified customer management system with WhatsApp integration, IVR calling setup, and automated customer support. All customer messages and data in one dashboard.",
    features: [
      "WhatsApp integration",
      "IVR calling system",
      "Customer data management",
      "Automated support flows",
      "Message tracking",
      "Support ticket system",
    ],
    mockups: [
      {
        title: "WhatsApp Ready",
        subtitle: "Automated Messages",
        icon: "check",
      },
      {
        title: "IVR Setup",
        subtitle: "Order Confirmation",
        icon: "trending",
      },
      {
        title: "Unified Dashboard",
        subtitle: "All Data in One Place",
        icon: "check",
      },
    ],
  },
  marketplace: {
    title: "Marketplace Listing",
    description:
      "Professional listing setup on Amazon, Flipkart, and other major marketplaces. Complete seller panel configuration and product catalog synchronization.",
    features: [
      "Amazon listing setup",
      "Flipkart integration",
      "Seller panel configuration",
      "Product catalog sync",
      "Inventory management",
      "Order fulfillment setup",
    ],
    mockups: [
      {
        title: "Marketplaces",
        subtitle: "Amazon + Flipkart",
        icon: "check",
      },
      {
        title: "Seller Panels",
        subtitle: "Fully Configured",
        icon: "trending",
      },
      {
        title: "Auto Sync",
        subtitle: "Inventory Updates",
        icon: "check",
      },
    ],
  },
};

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("development");
  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "check":
        return <Check className="w-4 h-4 text-white" />;
      case "trending":
        return <TrendingUp className="w-4 h-4 text-white" />;
      case "search":
        return <Search className="w-4 h-4 text-white" />;
      case "file":
        return <FileText className="w-4 h-4 text-white" />;
      case "cart":
        return <ShoppingCart className="w-4 h-4 text-white" />;
      case "card":
        return <CreditCard className="w-4 h-4 text-white" />;
      case "truck":
        return <Truck className="w-4 h-4 text-white" />;
      case "phone":
        return <Phone className="w-4 h-4 text-white" />;
      default:
        return <Check className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
          Everything Done for You —{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            From Store Launch to Sales Automation
          </span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto animate-fade-in-delay">
          💡 We use AI + expert onboarding to launch and optimize your store for
          conversions and growth.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 mx-auto">
          {Object.entries(tabContent).map(([key, content]) => (
            <Button
              key={key}
              className={`${
                activeTab === key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition-all duration-300 transform hover:scale-105 text-sm px-3 py-2`}
              onClick={() => setActiveTab(key)}
            >
              {content.title}
            </Button>
          ))}
        </div>

        <div className="bg-yellow-400 rounded-2xl p-6 sm:p-8 grid lg:grid-cols-2 gap-8 items-center animate-slide-up">
          <div className="text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              {currentContent.title}
            </h3>
            <p className="text-gray-800 mb-6">{currentContent.description}</p>
            <div className="space-y-3">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {currentContent.mockups.map((mockup, index) => (
              <div
                key={index}
                className="bg-yellow-300 rounded-lg p-4 transform hover:scale-105 transition-all duration-300"
              >
                <h4 className="font-semibold mb-2">{mockup.title}</h4>
                <div className="bg-white rounded p-3 flex items-center justify-between">
                  <span className="text-sm">{mockup.subtitle}</span>
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    {getIcon(mockup.icon)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
