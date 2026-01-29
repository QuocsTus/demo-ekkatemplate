import React, { useState, useEffect } from 'react';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: 'Boat Headphone Sets',
    subtitle: 'SALE OFFER',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=500&fit=crop',
  },
  {
    title: 'Premium Wireless Earbuds',
    subtitle: 'NEW COLLECTION',
    description: 'Experience crystal clear sound with our latest collection',
    image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=500&fit=crop',
  },
  {
    title: 'Studio Quality Sound',
    subtitle: 'LIMITED TIME',
    description: 'Professional grade headphones at consumer prices',
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=500&fit=crop',
  },
];

export const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-96">
          {/* Left Content */}
          <div className="relative z-10 flex flex-col justify-center">
            {/* Blue Bar */}
            <div className="absolute left-0 top-0 w-1 h-20 bg-blue-600 hidden md:block"></div>
            
            <div className="md:pl-8">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-2xl text-gray-600 font-light mb-4 tracking-wide">
                {slide.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-500 text-sm md:text-base mb-8 max-w-sm">
                {slide.description}
              </p>

              {/* CTA Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded transition-all w-fit">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-between items-center mt-12">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded transition-all shadow-lg"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentSlide
                    ? 'bg-blue-600 w-8 h-2'
                    : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded transition-all shadow-lg"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};