import React from 'react';

const Partners = () => {
  const partners = ['airtel', 'BL', 'GP', 'nesco', 'Robi', 'teletalk', 'titas'];
  
  return (
    <section id="carousel" className="overflow-hidden bg-fuchsia-200 py-10">
      <h3 className="text-7xl font-bold mb-10 text-center">Our Partner</h3>
      <div className="flex space-x-6 w-max animate-scroll">
        {[...partners, ...partners].map((partner, index) => (
          <img key={index} src={`/assets/logo/${partner}.png`} alt={partner} className="w-full h-40 object-cover rounded-lg shadow" />
        ))}
      </div>
    </section>
  );
};

export default Partners;