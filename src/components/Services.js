import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const [activeTab, setActiveTab] = useState('mobile');
  useScrollAnimation('feature');

  const tabs = [
    { id: 'mobile', label: 'Mobile Recharge', icon: 'https://img.icons8.com/ios-filled/50/000000/phone.png' },
    { id: 'banking', label: 'Mobile Banking', icon: 'https://img.icons8.com/ios-filled/50/000000/bank.png' },
    { id: 'utility', label: 'Utility Bills', icon: 'https://img.icons8.com/ios-filled/50/000000/bill.png' },
    { id: 'bus', label: 'Bus Ticket', icon: 'https://img.icons8.com/ios-filled/50/000000/bus.png' },
    { id: 'other', label: 'Bulk Recharge', icon: 'https://img.icons8.com/ios-filled/50/000000/more.png' }
  ];

  const utilityServices = {
    electricity: ['BPDB', 'DESCO', 'nesco', 'REB', 'WZ', 'DPDC'],
    water: ['WASA', 'RWAS', 'CWASA', 'KWASA'],
    gas: ['titas', 'Karnuphuli', 'Jalalabad']
  };

  const bulkLogos = Array.from({ length: 21 }, (_, i) => i + 1);

  const tabContent = {
    mobile: (
      <div id="mobile" className="tab-content">
        <h2 className="text-2xl font-bold mb-4 fade-in-up">Mobile Recharge</h2>
        <p className="mb-4 fade-in-up1" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          PayPos Limited (PayPlus) is a leading biller aggregator to simplify the bill payment process for consumers by consolidating multiple bills (like Electricity, Water, Gas, telecom providers, Ticketing, ISP etc.) into a single platform. This allows consumers to make payments for various services from their digital device or nearest location.
        </p>
        <div className="flex gap-4 flex-wrap fade-in-up2">
          {['airtel', 'BL', 'GP', 'Robi', 'teletalk'].map(logo => (
            <div key={logo} className="text-purple-900 p-4 rounded-lg shadow">
              <img src={`/assets/logo/${logo}.png`} className="w-32 h-20 object-contain" alt={logo} />
            </div>
          ))}
        </div>
      </div>
    ),

    banking: (
      <div id="banking" className="tab-content">
        <h2 className="text-2xl font-bold mb-4 fade-in-up">Mobile Banking</h2>
        <p className="mb-4 fade-in-up1" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          We provide Rocket (Dutch-Bangla Bank pioneered Mobile Banking in Bangladesh) and Meghnapay mobile banking services, such as cash-in, cash out services across Bangladesh through our PayPlus agent points.
        </p>
        <div className="flex gap-4 flex-wrap fade-in-up2">
          {['MeghnaPay', 'Rocket'].map(logo => (
            <div key={logo} className="text-purple-900 p-4 rounded-lg shadow">
              <img src={`/assets/logo/${logo}.png`} className="w-32 h-20 object-contain" alt={logo} />
            </div>
          ))}
        </div>
      </div>
    ),

    utility: (
      <div id="utility" className="tab-content">
        <h2 className="text-2xl font-bold mb-4 fade-in-up">Utility Bills</h2>
        <p className="mb-4 fade-in-up" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          Pay electricity, water, gas and internet bills easily.
        </p>

        {/* Electricity */}
        <div className="flex sm:flex-row flex-col items-center gap-6 mb-4 fade-in-up">
          <div className="flex items-center gap-2 h-20 w-60">
            <img src="/assets/BG/New folder (2)/electricity.png" className="h-20 w-20" alt="Electricity" />
            <span className="text-2xl text-center font-semibold py-10">Electricity Bill</span>
          </div>
          <span className="hidden sm:block text-3xl">→</span>
          <span className="block sm:hidden text-3xl">↓</span>
          <div className="flex sm:flex-row flex-wrap flex-col gap-3 justify-center items-center w-full">
            {utilityServices.electricity.map(logo => (
              <img key={logo} src={`/assets/logo/${logo}.png`} className="h-40 w-[80%] sm:h-24 sm:w-24 object-contain" alt={logo} />
            ))}
          </div>
        </div>

        <br /><br />

        {/* Water */}
        <div className="flex sm:flex-row flex-col items-center gap-6 mb-4 fade-in-up1">
          <div className="flex items-center gap-2 h-20 w-60">
            <img src="/assets/BG/New folder (2)/faucet.png" className="h-20 w-20" alt="Water" />
            <span className="text-2xl text-center font-semibold py-10">Water Bills</span>
          </div>
          <span className="hidden sm:block text-3xl">→</span>
          <span className="block sm:hidden text-3xl">↓</span>
          <div className="flex sm:flex-row flex-wrap flex-col gap-3 justify-center items-center w-full">
            {utilityServices.water.map(logo => (
              <img key={logo} src={`/assets/logo/${logo}.png`} className="h-40 w-[80%] sm:h-24 sm:w-24 object-contain" alt={logo} />
            ))}
          </div>
        </div>

        <br /><br />

        {/* Gas */}
        <div className="flex sm:flex-row flex-col items-center gap-6 mb-4 fade-in-up2">
          <div className="flex items-center gap-2 h-20 w-60">
            <img src="/assets/BG/New folder (2)/gas.png" className="h-20 w-20" alt="Gas" />
            <span className="text-2xl text-center font-semibold py-10">Gas Bills</span>
          </div>
          <span className="hidden sm:block text-3xl">→</span>
          <span className="block sm:hidden text-3xl">↓</span>
          <div className="flex sm:flex-row flex-wrap flex-col gap-3 justify-center items-center w-full">
            {utilityServices.gas.map(logo => (
              <img key={logo} src={`/assets/logo/${logo}.png`} className="h-40 w-[80%] sm:h-24 sm:w-24 object-contain" alt={logo} />
            ))}
          </div>
        </div>
      </div>
    ),

    bus: (
      <div id="bus" className="tab-content">
        <h2 className="text-2xl font-bold mb-4 fade-in-up">Bus Ticket</h2>
        <p className="mb-4 fade-in-up1" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          Bus tickets of more than 100+ prominent and top bus operators in the country covering around 3500+ routes across Bangladesh.
        </p>
        <div className="flex gap-4 flex-wrap fade-in-up2">
          <div className="bg-white text-purple-900 p-4 rounded-lg shadow">
            <img src="/assets/images/Pic.jpeg" className="object-contain" alt="Bus Services" />
          </div>
        </div>
      </div>
    ),

    other: (
      <div id="other" className="tab-content">
        <p className="mb-4 fade-in-up" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          Providing bulk mobile top-up services to corporates can be a highly valuable and efficient solution for businesses that need to ensure their employees, clients, or partners always have adequate mobile credit. Key benefits includes:
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="p-2 w-[-50%]">
            <div className="flex gap-2 fade-in-up">
              <div className="circle"></div>
              <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                <span className="text-3xl font-bold">Convenience and Efficiency</span><br />
                Automated Top-Ups: Streamline the process with automated top-ups that save time and reduce administrative burden.
                Bulk Processing: Easily top up multiple mobile numbers at once, minimizing manual input and errors.
              </p>
            </div>
            <br /><br />

            <div className="flex gap-2 fade-in-up1">
              <div className="circle"></div>
              <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                <span className="text-3xl font-bold">Cost-Effectiveness</span><br />
                Volume Discounts: Offer competitive pricing or discounts for bulk purchases, making it cost-effective for businesses.
                Reduced Downtime: Ensure employees always have credit, leading to uninterrupted communication and productivity.
              </p>
            </div>
            <br /><br />

            <div className="flex gap-2 fade-in-up2">
              <div className="circle"></div>
              <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                <span className="text-3xl font-bold">Cost Management</span><br />
                Better manage mobile expenses with predictable costs and detailed expenditure tracking.
              </p>
            </div>
          </div>

          <div className="p-2 w-[-50%]">
            <div className="flex gap-2 fade-in-up">
              <div className="circle"></div>
              <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                <span className="text-3xl font-bold">Customization and Flexibility</span><br />
                Tailored Plans: Customize top-up plans to suit the specific needs of different departments or teams.
              </p>
            </div>
            <br /><br />

            <div className="flex gap-2 fade-in-up1">
              <div className="circle"></div>
              <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                <span className="text-3xl font-bold">Enhanced Control and Management</span><br />
                Detailed Reporting: Provide detailed expenditure reports to help companies monitor and control their mobile expenses. Report includes Transaction ID also helps to maintain audit trail.
              </p>
            </div>
            <br /><br />

            <div className="flex gap-2 fade-in-up2">
              <div className="circle"></div>
              <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                <span className="text-3xl font-bold">Security and Reliability</span><br />
                Secure Transactions: Ensure all transactions are secure to protect corporate data.
                Reliable Service: Guarantee consistent and reliable top-up services to avoid any disruptions.
              </p>
            </div>
            <br /><br />
          </div>
        </div>

        <div className="flex gap-4 flex-wrap fade-in-up2 w-full">
          {bulkLogos.map(num => (
            <div key={num} className="bg-white text-purple-900 p-4 rounded-lg shadow">
              <img src={`/assets/logo/Bulk/${num}.png`} width="50" height="50" alt={`Bulk ${num}`} />
            </div>
          ))}
        </div>
      </div>
    )
  };

 return (
    <section id="feature" className="w-full py-16 px-6 text-center">
      <h3 className="text-7xl font-bold mb-10 text-center feature-card">Services</h3>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        {/* Left Sidebar - Tab Buttons */}
        <div className="md:w-1/4 flex flex-col gap-3 mb-6 md:mb-0">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={[
              "text-3xl p-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg",
              activeTab === tab.id
              ? "bg-purple-500 text-white hover:bg-purple-600"
              : "bg-purple-200 text-purple-900 " + getHoverColor(tab.id)
              ].join(" ")}
              >
              <img src={tab.icon} className="w-10 h-10" alt={tab.label} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Right Content - Tab Content */}
        <div className="md:w-3/4 md:pl-10 text-left">
          {/* সব tab content show করবে, কিন্তু শুধু active tab visible হবে */}
          <div className={activeTab === 'mobile' ? 'block' : 'hidden'}>
            {tabContent.mobile}
          </div>
          <div className={activeTab === 'banking' ? 'block' : 'hidden'}>
            {tabContent.banking}
          </div>
          <div className={activeTab === 'utility' ? 'block' : 'hidden'}>
            {tabContent.utility}
          </div>
          <div className={activeTab === 'bus' ? 'block' : 'hidden'}>
            {tabContent.bus}
          </div>
          <div className={activeTab === 'other' ? 'block' : 'hidden'}>
            {tabContent.other}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function for hover colors
const getHoverColor = (tabId) => {
  const colors = {
    mobile: 'hover:bg-orange-600',
    banking: 'hover:bg-amber-500',
    utility: 'hover:bg-yellow-500',
    bus: 'hover:bg-lime-500',
    other: 'hover:bg-green-500'
  };
  return colors[tabId] || 'hover:bg-purple-600';
};

export default Services;