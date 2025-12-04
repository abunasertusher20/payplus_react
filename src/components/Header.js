import React, { useEffect, useState } from 'react';  // useState add

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  //  line add

  useEffect(() => {

    
    const handleScroll = () => {
      const header = document.getElementById('mainHeader');

      if (header) {
      if (window.scrollY > 50) {
        header.classList.add('transparent-bg', 'shadow-none');
        header.classList.remove('bg-white', 'shadow');
      } else {
        header.classList.add('bg-white', 'shadow');
        header.classList.remove('transparent-bg', 'shadow-none');
      }
    }
    };

    const handleNavHover = () => {
      const menuItems = document.querySelectorAll(".border-animate");
      menuItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
          menuItems.forEach(i => i.classList.remove("active"));
          item.classList.add("active");
        });
      });
    };

    const handleNavScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav a.border-animate");

      window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
          }
        });
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleNavHover();
    handleNavScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="mainHeader" className="flex flex-row items-center justify-between p-0 fixed w-full top-0 z-50 transition-all duration-300 bg-fuchsia-200 shadow">
      <div className="flex items-center font-bold text-4xl sm:text-3xl pl-10">
        <a href="/" className="flex items-center font-bold text-purple-700 no-underline">
          <img src="/assets/payplus.svg" alt="Payplus Logo" className="w-20 h-20 mr-2"/>
        
        </a>
      </div> 

      {/*line className change*/}
      <nav className="hidden md:flex flex-row space-x-3 sm:space-x-5 text-gray-600 font-medium text-m sm:text-2xl pr-2">
        <a href="/" className="border-animate">
          Home
          <span></span><span></span><span></span><span></span>
        </a>
        <a href="/#About" className="border-animate">
          About
          <span></span><span></span><span></span><span></span>
        </a>
        <a href="/#feature" className="border-animate">
          Services
          <span></span><span></span><span></span><span></span>
        </a>
        <a href="/#Contact" className="border-animate">
          Contact
          <span></span><span></span><span></span><span></span>
        </a>
      </nav>

      {/*Mobile Menu Button part  add*/}
      <button 
        className="md:hidden text-purple-700 focus:outline-none p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/*  Mobile Menu part  add */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="/" className="border-animate text-center py-2" onClick={() => setIsMenuOpen(false)}>
              Home
              <span></span><span></span><span></span><span></span>
            </a>
            <a href="#About" className="border-animate text-center py-2" onClick={() => setIsMenuOpen(false)}>
              About
              <span></span><span></span><span></span><span></span>
            </a>
            <a href="#feature" className="border-animate text-center py-2" onClick={() => setIsMenuOpen(false)}>
              Services
              <span></span><span></span><span></span><span></span>
            </a>
            <a href="#Contact" className="border-animate text-center py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
              <span></span><span></span><span></span><span></span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;