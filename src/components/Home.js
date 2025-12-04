// src/components/Home.jsx

import React, { useEffect } from 'react';

import Header from './Header';
import Hero from './Hero'; 
import About from './About';
import Services from './Services';
import Partners from './Partners';
import Slideshow from './Slideshow';
import Contact from './Contact';
import Footer from './Footer';


const Home = () => {
    
   
    useEffect(() => {
        
        const { hash } = window.location;
        if (hash) {
            
            setTimeout(() => { 
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); 
        }
    }, []);

    return (
        <>
            <Header />
            <main>
                <Hero />  
                <About />
                <Services />
                <Partners />
                <Slideshow />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default Home;