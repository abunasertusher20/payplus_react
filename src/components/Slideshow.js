import React, { useState } from 'react';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    '/assets/Banner/1.jpg',
    '/assets/Banner/2.jpg',
    '/assets/Banner/3.jpg'
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Business Overview</h2>
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0"
            />
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-purple-700 text-white p-2 rounded-full hover:bg-purple-800 transition"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-purple-700 text-white p-2 rounded-full hover:bg-purple-800 transition"
        >
          &#10095;
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-purple-700' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;