import React, { useEffect } from 'react';
import { useAudio } from '../hooks/useAudio';

const Hero = () => {
  const audioRef = useAudio(); 

  useEffect(() => {
    const handleScroll = () => {
      const image = document.getElementById('ui_layer2');
      let scrollY = window.scrollY;
      image.style.transform = `translateX(${80 - scrollY * 0.1}%)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <audio id="bgAudio" src="/public/assets/silent_3sec.mp3" muted ref={audioRef}></audio>
      
      <section className="app-section flex flex-col sm:flex-row text-white py-8 px-6 lg:flex lg:items-center lg:justify-between mt-header">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold ml-8 mb-4 slide-down">
            Payplus – Your One-Stop 
            <span style={{ color: '#72607f' }}> Recharge & Payment App</span>
          </h1>
          <p className="mb-6 fade-in" style={{ color: 'rgb(129, 207, 238)', textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
            Recharge your mobile, pay utility bills, book tickets, and enjoy full mobile banking services – all in one app.
          </p>
          <a href="https://play.google.com/store/apps/details?id=paystation.com.bd&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="w-40 fade-in-delay" />
          </a>
        </div>
        <div id="ui_border" className="mt-10 lg:mt-0 relative flex justify-center items-center">
          <img src="/assets/images/picf.png" alt="App UI" className="ui_image rounded-xl mx-auto z-10 relative" />
          <img src="/assets/images/picB.png" alt="App UI Layer 2" id="ui_layer2" className="ui_image rounded-xl absolute top-0 z-0 opacity-80" />
        </div>
      </section>
    </>
  );
};

export default Hero;