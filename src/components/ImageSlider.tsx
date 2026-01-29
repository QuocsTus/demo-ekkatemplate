import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=600&fit=crop',
    title: 'Boat Headphone Sets',
    subtitle: 'SALE OFFER',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=1200&h=600&fit=crop',
    title: 'Premium Wireless Audio',
    subtitle: 'NEW COLLECTION',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&h=600&fit=crop',
    title: 'Studio Quality Sound',
    subtitle: 'LIMITED TIME',
  },
];

export const ImageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full h-64 xs:h-72 sm:h-96 md:h-[500px] lg:h-[600px] bg-gray-100 overflow-hidden">
      {/* Slide Image */}
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center">
        <div className="container w-full">
          <div className="max-w-lg">
            <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-light mb-2">
              {slide.subtitle}
            </p>
            <h1 className="text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
              {slide.title}
            </h1>
            <p className="text-white text-xs xs:text-sm sm:text-base mb-4 sm:mb-6">
              Discover our amazing collection of high-quality products
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded font-medium transition text-xs sm:text-sm md:text-base">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 rounded transition z-10"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 rounded transition z-10"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 sm:h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-6 sm:w-8'
                : 'bg-white bg-opacity-50 w-1 sm:w-2 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};