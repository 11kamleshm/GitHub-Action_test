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
      "Their AI chatbot handles 80% of our customer inquiries automatically. We've reduced response time from hours to seconds and our team can focus on complex issues. ROI was visible within the first month.",
    name: "Rajesh M.",
    title: "Founder, TechFlow Solutions, Mumbai",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait man",
  },
  {
    quote:
      "The process automation they built saved us 15 hours per week on manual data entry. Our inventory management is now seamless and we've eliminated human errors completely.",
    name: "Sarah K.",
    title: "Operations Manager, Dubai Logistics",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "From concept to launch, they delivered our MVP in just 30 days. The custom CRM they built integrates perfectly with our sales process and increased our conversion rate by 40%.",
    name: "Michael T.",
    title: "CEO, GrowthLab Inc, Toronto",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait man",
  },
  {
    quote:
      "Our ecommerce automation is a game-changer. Order processing, inventory sync, and customer notifications all happen automatically. We've scaled 3x without adding staff.",
    name: "Priya S.",
    title: "Co-Founder, StyleMart, Bangalore",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "The reporting dashboard gives us real-time insights we never had before. Decision-making is 3x faster and we can spot trends immediately. It's transformed how we run the business.",
    name: "Ahmed R.",
    title: "Managing Partner, Gulf Ventures, Abu Dhabi",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait man",
  },
  {
    quote:
      "Their AI solution automates our lead qualification and follow-up process. We're converting 60% more leads with less manual work. The team truly understands business automation.",
    name: "Jennifer L.",
    title: "Marketing Director, InnovateTech, New York",
    avatar:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Real Results from Automated Businesses
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how businesses across UAE, India, US & Canada have transformed
            their operations with our AI-powered automation solutions.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="ml-2 sm:ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/2"
              >
                <div className="h-full">
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
                    <div className="mb-4 sm:mb-6">
                      {/* Quote Icon */}
                      <div className="text-blue-600 text-4xl sm:text-5xl lg:text-6xl font-serif mb-3 sm:mb-4">
                        "
                      </div>

                      {/* Quote Text */}
                      <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed italic">
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <Avatar className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          data-ai-hint={testimonial.hint}
                        />
                        <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-sm sm:text-base lg:text-lg text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="bg-blue-600 text-white hover:bg-blue-700 border-0 -left-2 sm:-left-4 lg:-left-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 shadow-lg" />
          <CarouselNext className="bg-blue-600 text-white hover:bg-blue-700 border-0 -right-2 sm:-right-4 lg:-right-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 shadow-lg" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
