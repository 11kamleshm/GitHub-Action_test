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

const techPartners = [
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

export default function MarqueeTools() {
  return (
    <section className="py-16 bg-blue-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in">
          Full Ecosystem Setup: Payment + Delivery + CRM
        </h2>
        <p className="text-lg max-w-4xl mx-auto animate-fade-in-delay">
          We integrate with 25+ premium eCommerce platforms and services
          including Shopify, WordPress, Stripe, Razorpay, Shiprocket, Amazon,
          Flipkart, and more. You get enterprise-level integrations without the
          complexity.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* First Row - Left to Right */}
        <div className="flex animate-marquee-left-fast mb-4">
          {[...techPartners, ...techPartners].map((partner, index) => (
            <div
              key={`left-${index}`}
              className="flex-shrink-0 flex justify-center items-center bg-white backdrop-blur-sm rounded-lg p-4 mx-2 min-w-[150px] text-center transition-all duration-300 hover:scale-105"
            >
              <Image
                src={partner.img}
                alt="technology partners"
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex animate-marquee-right-fast">
          {[
            ...techPartners.slice().reverse(),
            ...techPartners.slice().reverse(),
          ].map((partner, index) => (
            <div
              key={`right-${index}`}
              className="flex-shrink-0 flex justify-center items-center bg-white backdrop-blur-sm rounded-lg p-4 mx-2 min-w-[150px] text-center transition-all duration-300 hover:scale-105"
            >
              <Image
                src={partner.img}
                alt="technology partners"
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-blue-600 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-blue-600 to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
