import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    storeName: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      storeName: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="Contact" className="py-16 bg-white">
      <div className="items-center">
        <p className="text-7xl font-bold">
          Contact Us
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-2 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Content */}
        <div>
          <p className="text-pink-600 font-medium flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-pink-600 inline-block animate-ping-scale"></span>
            Send A Message or Call Us
          </p>
          <h2 className="text-4xl font-extrabold text-black mt-3 leading-snug">
            We Are Always Happy To <br /> Connect With You.
          </h2>
          
          <div className="text-gray-600 mt-4 text-left flex flex-row items-start">
            <img src="/assets/BG/New folder (2)/support.png" alt="phone icon" className="w-10 h-10 mb-4" />
            <p className="p-2 text-xl font-bold">
              Call: 09613820890
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div>
          <div>
            <p className="text-2xl p-2 font-bold">
              Message
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="border-gray-200">
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                required
              />
            </div>

            {/* Store Name and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input 
                  type="text" 
                  name="storeName"
                  placeholder="Store Name" 
                  value={formData.storeName}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="phone"
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-600 mb-1">Your Message</label>
              <textarea 
                rows="4" 
                name="message"
                placeholder="Tell Us in details" 
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full py-3 rounded-md bg-fuchsia-900 text-white font-semibold hover:bg-fuchsia-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;