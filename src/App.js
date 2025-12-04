import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Import components
import Header from './components/Header'; // 👈 Header এখানে লাগবে
import Home from './components/Home';
import Footer from './components/Footer'; // 👈 Footer এখানে লাগবে
import TermsAndConditions from './components/TermsAndConditions';

function App() {
  return (
    <Router>
      <div className="App bg-fuchsia-100 text-gray-800 font-sans">
        {/* 👇 Header কে Routes এর বাইরে রেন্ডার করুন (যদি এটি সব পেজে ফিক্সড থাকে) */}
        <Header /> 

        <Routes>
          {/* Main Home Page: Home এ এখন Header বা Footer নেই */}
          <Route path="/" element={<Home />} />
          
          {/* Terms & Conditions Page: এখানে Header এবং Footer রিমুভ করতে হবে */}
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>

        {/* 👇 Footer কে Routes এর বাইরে রেন্ডার করুন */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;