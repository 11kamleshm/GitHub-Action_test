"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "My store was live in 2 days with 40 products. They set up COD, IVR, and even Shiprocket. I just focused on sales.",
    name: "Ravi K.",
    title: "Store Owner, India",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait man",
  },
  {
    quote:
      "From Shopify setup to Amazon listings, everything was handled professionally. Best investment for my D2C startup.",
    name: "Sana F.",
    title: "D2C Founder, UAE",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "The payment integration was seamless - COD, UPI, cards, everything works perfectly. My customers love the smooth checkout experience.",
    name: "Arjun Patel",
    title: "Electronics Store Owner, India",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait man",
  },
  {
    quote:
      "They handled our entire logistics setup with Shiprocket and Delhivery. RTO reduced by 60% with their smart IVR system.",
    name: "Priya Sharma",
    title: "Fashion Brand Owner, Canada",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "The WhatsApp CRM integration is amazing. All customer queries in one dashboard. Sales team efficiency doubled overnight.",
    name: "Mohammed Al-Rashid",
    title: "Home Decor Store, UAE",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait man",
  },
  {
    quote:
      "From zero to selling on Amazon and Flipkart in just 3 days. The marketplace setup was flawless and we're already getting orders.",
    name: "Sneha Gupta",
    title: "Wellness Products, US",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Real Stores. Real Success.
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
          See how entrepreneurs across UAE, India, US & Canada launched their
          successful online stores with our complete setup service.
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="flex flex-col items-center text-center p-6">
                    <p className="text-xl md:text-2xl font-medium italic mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          data-ai-hint={testimonial.hint}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm opacity-80">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-black/20 text-white hover:bg-white/30 border-0 -left-4" />
          <CarouselNext className="bg-black/20 text-white hover:bg-white/30 border-0 -right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
