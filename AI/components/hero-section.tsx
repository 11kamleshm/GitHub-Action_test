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
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 min-h-screen flex items-center pt-16 sm:pt-20 lg:pt-24">
      <div className="absolute inset-0">
        <Image
          src="/background.jpg"
          alt="Tech automation background"
          fill
          className="object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-5 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
        <div className="text-white text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
            Let AI Do the Work — You Focus on Growing the Business
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold mb-6 sm:mb-8 animate-fade-in-delay text-blue-100">
            From CRM to Custom AI Agents & Automation
          </h2>
          <p className="text-base sm:text-lg lg:text-lg xl:text-xl mb-6 sm:mb-8 animate-fade-in-delay-2 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Everything tech your business needs, in one place. Start from just{" "}
            <span className="font-bold text-yellow-300">999 DHM</span> — No
            Hidden Costs. Available in UAE | India | US/Canada.
          </p>
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
            <div className="flex items-center space-x-3 animate-slide-in justify-center lg:justify-start">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base lg:text-lg">
                AI Agents & Chatbots — 24/7 Automation
              </span>
            </div>
            <div className="flex items-center space-x-3 animate-slide-in-delay justify-center lg:justify-start">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base lg:text-lg">
                Process Automation — Cut Manual Work 70%
              </span>
            </div>
            <div className="flex items-center space-x-3 animate-slide-in-delay-2 justify-center lg:justify-start">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base lg:text-lg">
                Custom CRM/ERP — Fully Integrated
              </span>
            </div>
          </div>
          {/* Award Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-4 items-center justify-center lg:justify-start animate-slide-up">
            {/* Mid-Market High Performer Badge */}
            <div className="p-2 sm:p-3 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/home-images-asia-pacific-2025.png"
                  alt="asia-pacific"
                  width={100}
                  height={100}
                  className="w-16 sm:w-20 lg:w-24 h-auto"
                />
              </div>
            </div>
            {/* High Performer Badge */}
            <div className="p-2 sm:p-3 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/home-images-crm-usability-2025.png"
                  alt="crm-usability"
                  width={100}
                  height={100}
                  className="w-16 sm:w-20 lg:w-24 h-auto"
                />
              </div>
            </div>
            {/* Best Usability Badge */}
            <div className="p-2 sm:p-3 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/home-images-crm-winter-2025.png"
                  alt="crm-winter"
                  width={100}
                  height={100}
                  className="w-16 sm:w-20 lg:w-24 h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Thick Outer Glass Layer */}
        <div className="relative p-2 sm:p-3 lg:p-3 rounded-xl bg-gradient-to-br from-white/40 via-white/40 to-white/40 backdrop-blur-lg shadow-2xl border border-white/40 animate-slide-up order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
          {/* Multiple glass layers for depth */}
          <div className="relative p-3 sm:p-4 lg:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30">
            {/* Enhanced decorative glass elements */}
            <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-br from-white/20 via-transparent to-blue-100/10 pointer-events-none"></div>
            <div className="absolute -top-2 -left-2 w-12 h-12 sm:w-16 sm:h-16 bg-white/30 rounded-full blur-xl"></div>
            <div className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-200/40 rounded-full blur-md"></div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 left-8 w-10 h-10 sm:w-12 sm:h-12 bg-white/25 rounded-full blur-lg"></div>

            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 drop-shadow-sm text-center">
                Book a Free Expert Call
              </h3>
              <form className="space-y-3 sm:space-y-4">
                <Input
                  placeholder="Enter your business email"
                  type="email"
                  className="transition-all duration-300 bg-white/90 backdrop-blur-md border-white/50 focus:bg-white/95 focus:border-blue-300/50 shadow-lg focus:shadow-xl text-sm sm:text-base h-10 sm:h-11"
                />
                <Input
                  placeholder="Enter your name"
                  className="transition-all duration-300 bg-white/90 backdrop-blur-md border-white/50 focus:bg-white/95 focus:border-blue-300/50 shadow-lg focus:shadow-xl text-sm sm:text-base h-10 sm:h-11"
                />
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2">
                  <Select>
                    <SelectTrigger className="w-full sm:w-24 bg-white/90 backdrop-blur-md border-white/50 shadow-lg text-sm h-10 sm:h-11">
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
                    className="flex-1 transition-all duration-300 bg-white/90 backdrop-blur-md border-white/50 focus:bg-white/95 focus:border-blue-300/50 shadow-lg focus:shadow-xl text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>
                <div className="flex space-x-2">
                  <Textarea
                    placeholder="What business process would you like to automate? (e.g., lead generation, customer support, inventory management)"
                    className="flex-1 transition-all duration-300 min-h-[70px] sm:min-h-[80px] bg-white/90 backdrop-blur-md border-white/50 focus:bg-white/95 focus:border-blue-300/50 shadow-lg focus:shadow-xl text-sm sm:text-base resize-none"
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    className="rounded accent-blue-600 shadow-sm mt-1 w-4 h-4 flex-shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-black drop-shadow-sm leading-relaxed">
                    I agree to terms and privacy policy
                  </span>
                </div>
                <Button
                  id="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 sm:py-4 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm border border-blue-500/30 text-sm sm:text-base font-semibold h-12 sm:h-auto"
                >
                  Book Free Expert Call
                </Button>
                <p className="text-xs text-black drop-shadow-sm text-center leading-relaxed">
                  By clicking "Book Free Expert Call", you agree to our terms
                  and acknowledge our Privacy Policy. No obligations • Start
                  from 999 DHM • Available in UAE, India, US & Canada
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
