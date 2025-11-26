import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Simple scroll animation for about section
    const handleScroll = () => {
      const aboutSection = document.getElementById('About');
      const aboutCards = document.querySelectorAll('.about-card');
      
      if (aboutSection) {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          aboutCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('is-visible');
            }, index * 200);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="About" className="w-full py-16 px-6 about-card">
      <h3 className= "about-card text-4xl md:text-7xl font-bold mb-10 text-center text-purple-800">
        About Our Company
      </h3>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8">
        
        {/* Left Column - Text */}
        <div className="md:w-1/3 ">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{ textAlign: 'justify', textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
            Make bills payments more convenient for our customers. Bring the billers right into their 
            devices with our Billers Aggregation Platform. Our Billers Aggregation Platform enables businesses
            to facilitate bills payments via variety of payment options that includes, mobile banking, Cards,
            Internet Banking, USSD and retail points that helps to reduce cost for our clients and a sustainable
            growth in revenue portfolio.
          </p>
        </div>

        {/* Middle Column - Rating Card */}
        <div className="md:w-1/3 ">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full relative border-2 border-purple-200 hover:shadow-xl transition-shadow duration-300">
            {/* Stars */}
            <div className="flex space-x-1 mb-4 text-2xl">
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
            </div>
            
            <div className="h-16"></div> {/* Spacer */}

            {/* Text */}
            <p className="text-black text-xl font-bold text-center">
              10K+ Happy Users And Counting
            </p>

            {/* Arrow icon */}
            <div className="absolute top-4 right-4 text-purple-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 6.75 17.25M17.25 6.75h-10.5v10.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column - Clients Card */}
        <div className="md:w-1/3 ">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full text-center border-2 border-purple-200 hover:shadow-xl transition-shadow duration-300">
            {/* Placeholder for image */}
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white text-4xl">
              100+
            </div>

            {/* Text */}
            <p className="text-black text-xl font-bold">
              Corporate Clients
            </p>
            <p className="text-gray-600 mt-2">
              Trusted by businesses nationwide
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;