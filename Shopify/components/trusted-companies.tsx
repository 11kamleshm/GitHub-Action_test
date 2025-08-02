import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import Fastgrow from "../public/fastgrow.png";
import Crown from "../public/crown.png";
import Lre from "../public/Lre.png";
import GulfTalent from "../public/gulftalent.png";
import HarbourEnergy from "../public/harbourEnergy.png";
import Jinko from "../public/jinko.png";
import Mazaya from "../public/Mazaya.png";
import Master from "../public/master.png";

const TrustedLogos = () => {
  const logos = [
    { src: Fastgrow, alt: 'Company A', hint: 'company logo' },
    { src: Crown, alt: 'Company B', hint: 'company logo' },
    { src: Lre, alt: 'Company C', hint: 'company logo' },
    { src: GulfTalent, alt: 'Company D', hint: 'company logo' },
    { src: Jinko, alt: 'Company E', hint: 'company logo' },
    { src: Mazaya, alt: 'Company F', hint: 'company logo' },
    { src: HarbourEnergy, alt: 'Company G', hint: 'company logo' },
    { src: Master, alt: 'Company H', hint: 'company logo' },
  ];

  return (
    <section className="py-4 sm:py-6 bg-background">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <h2 className="text-center text-lg sm:text-xl font-semibold text-muted-foreground mb-6 sm:mb-8">
          Trusted by Growing Businesses Worldwide
        </h2>

        <Marquee
          gradient={false}
          speed={30}
          pauseOnHover={true}
          className="flex items-center"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-4 sm:mx-8 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                className="sm:w-[150px] sm:h-[60px] w-[90px] h-[36px] object-contain"
                data-ai-hint={logo.hint}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TrustedLogos;
