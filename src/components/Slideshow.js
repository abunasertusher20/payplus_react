import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = ['/assets/Banner/1.jpg', '/assets/Banner/2.jpg', '/assets/Banner/3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-6 ">
      <h2 className="text-3xl font-bold mb-8 text-center">Business Overview</h2>
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0" />
          ))}
        </div>
        <button onClick={() => goToSlide((currentIndex - 1 + slides.length) % slides.length)} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-purple-700 text-white p-2 rounded-full hover:bg-purple-800 transition">
          &#10094;
        </button>
        <button onClick={() => goToSlide((currentIndex + 1) % slides.length)} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-purple-700 text-white p-2 rounded-full hover:bg-purple-800 transition">
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Slideshow;