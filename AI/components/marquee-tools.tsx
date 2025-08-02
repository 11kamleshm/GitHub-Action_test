"use client";

import Fastgrow from "../public/fastgrow.png";
import Crown from "../public/crown.png";
import Lre from "../public/Lre.png";
import GulfTalent from "../public/gulftalent.png";
import HarbourEnergy from "../public/harbourEnergy.png";
import Jinko from "../public/jinko.png";
import Mazaya from "../public/Mazaya.png";
import Master from "../public/master.png";
import Target from "../public/target.png";
import Rigzone from "../public/Rigzone.png";
import WhiteandCo from "../public/white&co.png";
import Image from "next/image";

const clientCompanies = [
  {
    id: 1,
    img: Fastgrow,
  },
  {
    id: 2,
    img: Crown,
  },
  {
    id: 3,
    img: Lre,
  },
  {
    id: 4,
    img: GulfTalent,
  },
  {
    id: 5,
    img: HarbourEnergy,
  },
  {
    id: 6,
    img: Jinko,
  },
  {
    id: 7,
    img: Mazaya,
  },
  {
    id: 8,
    img: Master,
  },
  {
    id: 9,
    img: Target,
  },
  {
    id: 10,
    img: Rigzone,
  },
  {
    id: 11,
    img: WhiteandCo,
  },
];

export default function MarqueeClients() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-blue-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
          Powering Growth for Forward-Thinking Businesses
        </h2>
        <p className="text-base sm:text-lg lg:text-xl max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
          From startups to enterprises across UAE, India, US & Canada,
          businesses trust our AI-powered solutions to automate operations and
          accelerate growth.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* First Row - Left to Right */}
        <div className="flex animate-marquee-left-fast mb-3 sm:mb-4 lg:mb-6">
          {[...clientCompanies, ...clientCompanies].map((company, index) => (
            <div
              key={`left-${index}`}
              className="flex-shrink-0 flex justify-center items-center bg-white backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-5 mx-1 sm:mx-2 min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] text-center transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Image
                src={company.img}
                alt="AI automation client company"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex animate-marquee-right-fast">
          {[
            ...clientCompanies.slice().reverse(),
            ...clientCompanies.slice().reverse(),
          ].map((company, index) => (
            <div
              key={`right-${index}`}
              className="flex-shrink-0 flex justify-center items-center bg-white backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-5 mx-1 sm:mx-2 min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] text-center transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Image
                src={company.img}
                alt="AI automation client company"
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-8 sm:w-10 lg:w-12 h-full bg-gradient-to-r from-blue-600 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-8 sm:w-10 lg:w-12 h-full bg-gradient-to-l from-blue-600 to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
