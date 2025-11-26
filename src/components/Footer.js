import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#F7DFF6' }} className="text-black pt-10 pb-5 px-10">
      <div className="max-w-12xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <img src="/assets/payplus.svg" alt="Payplus Logo" className="w-20 h-20 mr-2" />
            <span className="text-3xl font-bold">Pay<span className="text-black">Plus</span></span>
          </div>
          <p className="mb-2">PayPos Limited</p>
          <p className="mb-2">DevoTech Technology Park</p>
          <p className="mb-2">Plot # 11, Road # 113/A, Gulshan-2, Dhaka 1212, Bangladesh</p>
          <p className="mb-2"><strong>Operational Office:</strong> House: TA-135, Middle Badda, Gulshan Link Road, Dhaka 1212</p>
          <p className="mb-2"><strong>Regional Office:</strong> Ka-286, BIDC Road, Joydebpur, Gazipur - 1700</p>
          <p className="mb-2">Email: <a href="mailto:info@paystation.com.bd" className="underline hover:text-purple-700">info@paystation.com.bd</a></p>
          <p>Contact: <a href="tel:09613820890" className="underline hover:text-purple-700">09613820890</a></p>
        </div>

        {/* Get Started Links */}
        <div>
          <h3 className="font-bold mb-4 text-xl">GET STARTED</h3>
          <ul className="space-y-2">
            <li>
              <a href="/#Contact" className="hover:underline hover:text-purple-700 transition-colors">
                Customers Support
              </a>
            </li>
            <li>
              <a 
                href="https://play.google.com/store/apps/details?id=paystation.com.bd&pcampaignid=web_share" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline hover:text-purple-700 transition-colors"
              >
                Download App
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="font-bold mb-4 text-xl">LEGAL</h3>
          <ul className="space-y-2">
            <li>
              <a href="/terms" className="hover:underline hover:text-purple-700 transition-colors">
                Terms and Condition
              </a>
            </li>
            
          </ul>
        </div>

      </div>
      
      <hr className="border-t-4 border-black my-8" />
      
      <div className="flex justify-center items-center">
        <p className="text-sm text-center">
          Copyright © {currentYear} | All rights reserved by PayPos Ltd. | License No: TRAD/DNCC/000462/2022
        </p>
      </div>

      {/* Social Media Links - Facebook Only */}
      <div className="flex justify-center space-x-6 mt-6">
        <a href="https://www.facebook.com/profile.php?id=100087485426809" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;