// src/components/Home.jsx (চূড়ান্ত সংশোধিত)

import React, { useEffect } from 'react';

// 👇 শুধুমাত্র সেকশন কম্পোনেন্টগুলি import করুন (App.js এ নয়!)
import Hero from './Hero'; 
import About from './About';
import Services from './Services';
import Partners from './Partners';
import Slideshow from './Slideshow';
import Contact from './Contact';
// Header এবং Footer এখানে ব্যবহার করবেন না

const Home = () => {
    
    // ক্রস-পেজ অ্যাঙ্কর স্ক্রলিং ফিক্স
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
        // Header ও Footer ছাড়া শুধু Main কন্টেন্ট রিটার্ন করুন
        <main>
            <Hero />  
            <About />
            <Services />
            <Partners />
            <Slideshow />
            <Contact />
        </main>
    );
};

export default Home;