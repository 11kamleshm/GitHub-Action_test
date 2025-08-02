import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 min-h-screen flex items-center pt-24">
      <div className="absolute inset-0">
        <Image
          src="/background.jpg"
          alt="Mountain landscape"
          fill
          className="object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-5 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            AI-Powered Shopify / WordPress Store — Launch in 3 Days.
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 animate-fade-in-delay">
            Just 999 DHM One-Time!
          </h2>
          <p className="text-lg mb-8 animate-fade-in-delay-2">
            We handle everything: development, payment, delivery, RTO, IVR, CRM & marketplace listings.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3 animate-slide-in">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-lg">Upto 50 Products</span>
            </div>
            <div className="flex items-center space-x-3 animate-slide-in-delay">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-lg">Amazon/Flipkart Listing</span>
            </div>
            <div className="flex items-center space-x-3 animate-slide-in-delay-2">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-lg">No Coding Needed</span>
            </div>
          </div>
          {/* Award Badges */}
          <div className="flex gap-4 items-center justify-center sm:justify-start animate-slide-up">
            {/* Mid-Market High Performer Badge */}
            <div className="p-3 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/home-images-asia-pacific-2025.png"
                  alt="asia-pacific"
                  width={100}
                  height={100}
                  className="w-24 h-auto"
                />
              </div>
            </div>
            {/* High Performer Badge */}
            <div className="p-3 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/home-images-crm-usability-2025.png"
                  alt="crm-usability"
                  width={100}
                  height={100}
                  className="w-24 h-auto"
                />
              </div>
            </div>
            {/* Best Usability Badge */}
            <div className="p-3 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/home-images-crm-winter-2025.png"
                  alt="crm-winter"
                  width={100}
                  height={100}
                  className="w-24 h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Thick Outer Glass Layer */}
        <div className="relative p-3 rounded-xl bg-gradient-to-br from-white/40 via-white/40 to-white/40 backdrop-blur-lg shadow-2xl border border-white/40 animate-slide-up">
          {/* Multiple glass layers for depth */}
          <div className="relative p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30">
            {/* Enhanced decorative glass elements */}
            <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-br from-white/20 via-transparent to-blue-100/10 pointer-events-none"></div>
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-white/30 rounded-full blur-xl"></div>
            <div className="absolute top-4 right-4 w-8 h-8 bg-blue-200/40 rounded-full blur-md"></div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/25 rounded-full blur-lg"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 drop-shadow-sm">
                Start Your Shopify Growth Now
              </h3>
              <form className="space-y-4">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="transition-all duration-300 bg-white/90 backdrop-blur-md border-white/50 focus:bg-white/95 focus:border-blue-300/50 shadow-lg focus:shadow-xl"
                />
                <Input
                  placeholder="Enter your name"
                  className="transition-all duration-300 bg-white/90 backdrop-blur-md border-white/50 focus:bg-white/95 focus:border-blue-300/50 shadow-lg focus:shadow-xl"
                />
                <div className="flex space-x-2">
                  <Select>
                    <SelectTrigger className="w-20 bg-white/90 backdrop-blur-md border-white/50 shadow-lg">
                      <SelectValue placeholder="🇦🇪" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-xl border-white/50 shadow-2xl">
                      <SelectItem value="ae">🇦🇪 +971</SelectItem>
                      <SelectItem value="in">🇮🇳 +91</SelectItem>
                      <SelectItem value="us">🇺🇸 +1</SelectItem>
                      <SelectItem value="ca">🇨🇦 +1</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Enter your phone"
                    className="flex-1 transition-all duration-300 bg-white/90 backdrop-blur-md border-white/50 focus:bg-white/95 focus:border-blue-300/50 shadow-lg focus:shadow-xl"
                  />
                </div>
                <div className="flex space-x-2">
                  <Textarea
                    placeholder="Describe your business and goals"
                    className="flex-1 transition-all duration-300 min-h-[80px] bg-white/90 backdrop-blur-md border-white/50 focus:bg-white/95 focus:border-blue-300/50 shadow-lg focus:shadow-xl"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded accent-blue-600 shadow-sm"
                  />
                  <span className="text-sm text-black drop-shadow-sm">
                    I agree to terms and privacy policy
                  </span>
                </div>
                <Button id="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm border border-blue-500/30">
                  Launch My Store Now
                </Button>
                <p className="text-xs text-black drop-shadow-sm">
                  By clicking "Launch My Store Now", you agree to our terms and
                  acknowledge our Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
