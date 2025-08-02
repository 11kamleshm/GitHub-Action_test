import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SEOIntroSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 animate-fade-in">
          Boost Rankings with the SEO Trinity
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
          High-quality SEO services can help you turn your website into a
          revenue-generating search engine magnet.
        </p>

        {/* CTA Button */}
        <Button id="start-growth" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-16 animate-bounce-in">
          Start My SEO Growth
        </Button>

        <div className="container mx-auto px-4 py-4">
          <h2 className="text-center text-xl font-semibold text-muted-foreground ">
            Top Brands Trust Us
          </h2>
        </div>

        {/* Awards/Recognition Section */}
        <div className="grid grid-cols-3 gap-8 mx-auto mt-6">
          {/* Award 1 */}
          <div className="bg-gray-50 rounded-2xl flex items-center justify-center space-x-4 px-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-up">
            <Image
              src="/apptech.png"
              alt="apptech"
              width={150}
              height={150}
              className="w-34 h-auto"
            />
          </div>

          {/* Award 2 */}
          <div className="bg-gray-50 rounded-2xl flex items-center justify-center space-x-4 px-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-up-delay">
            <Image
              src="/enwrape.png"
              alt="sushain"
              width={150}
              height={150}
              className="w-34 h-auto"
            />
          </div>

          {/* Award 3 */}
          <div className="bg-gray-50 rounded-2xl flex items-center justify-center space-x-4 px-2  hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-up-delay-2">
            <Image
              src="/sushain.png"
              alt="enwrape"
              width={150}
              height={150}
              className="w-34 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
