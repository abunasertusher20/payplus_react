import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Slideshow from './components/Slideshow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TermsAndConditions from './components/TermsAndConditions';

function App() {
  return (
    <Router>
      <div className="App bg-fuchsia-100 text-gray-800 font-sans">
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={
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
          } />
          
          {/* Terms & Conditions Page */}
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;