
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Import components
import Header from './components/Header'; 
import Home from './components/Home';
import Footer from './components/Footer';
import TermsAndConditions from './components/TermsAndConditions';

function App() {
  return (
    <Router>
      <div className="App bg-fuchsia-100 text-gray-800 font-sans">
        
        <Header /> 

        <Routes>
          {/* Main Home Page: Home এ এখন Header বা Footer নেই */}
          <Route path="/" element={<Home />} />
          
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>

    
        <Footer />
      </div>
    </Router>
  );
}

export default App;