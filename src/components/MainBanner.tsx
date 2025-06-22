"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image: "/banner-images/bg-1.jpeg",
    title: "Excellence in Education",
    subtitle: "Leeds Premier Schools",
    description: "Where potential meets opportunity in a nurturing environment for growth.",
    cta: "More on Our School",
    link: "/about-us",
  },
  {
    image: "/banner-images/bg-2.jpeg",
    title: "Inspiring Young Minds",
    subtitle: "Since 2019",
    description: "A tradition of academic excellence and character development at Leeds Premier",
    cta: "Our History",
    link: "/about-us",
  },
  {
    image: "/banner-images/bg-3.jpeg",
    title: "Future-Ready Learning",
    subtitle: "Innovative Programs",
    description: "Preparing students for the challenges of tomorrow with a modern curriculum.",
    cta: "How To Join Us",
    link: "/admissions",
  },
];

export default function MainBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] max-h-[800px] overflow-hidden mt-20">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            className="object-cover object-center"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-white px-4">
          <span className="block text-lg sm:text-xl font-light mb-2 tracking-widest">
            {slides[currentSlide].subtitle}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-6 sm:mb-8">
            {slides[currentSlide].description}
          </p>
          <Link
            href={slides[currentSlide].link}
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition duration-300 text-sm sm:text-base"
          >
            {slides[currentSlide].cta}
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce w-5 h-5 sm:w-6 sm:h-6 border-2 border-white rounded-full"></div>
      </div>
    </section>
  );
}