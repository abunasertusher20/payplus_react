import React, { useEffect } from 'react';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-fuchsia-100 text-gray-800 font-sans min-h-screen">
      {/* Main Content */}
      <main className="pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8">
          {/* Header Section */}
          <header className="text-center mb-8 border-b border-gray-200 pb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-2">Terms & Conditions — PayPlus</h1>
            <p className="text-gray-600 text-lg">Effective date: <strong>01 September, 2025</strong></p>
          </header>

          {/* Terms Sections */}
          <section id="intro" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-3">১. ভূমিকা</h2>
            <p className="text-gray-700 leading-relaxed">
              স্বাগতম PayPlus-এ। এই Terms & Conditions (শর্তাবলী) গুলো PayPlus (এর পরবর্তী অংশে "কোম্পানি", "আমরা", বা "আমাদের" বলা হবে) এবং ওয়েবসাইট ভিজিটর বা সেবা গ্রহণকারী (এর পরবর্তী অংশে "আপনি" বা "ব্যবহারকারী" বলা হবে)–এর মধ্যে প্রযোজ্য। ওয়েবসাইটটি কেবল কোম্পানির প্রোফাইল প্রদর্শনের জন্য — ওয়েবসাইটের মাধ্যমে সরাসরি কোনো আর্থিক বা ট্রানজ্যাকশনাল সেবা প্রদান করা হয় না।
            </p>
          </section>

          <section id="services" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-3">২. সেবা ও প্ল্যাটফর্ম</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              PayPlus বিভিন্ন ডিজিটাল সেবা প্রদান করে — যেমন: Utility bill payment, Mobile Recharge, Bulk recharge, Bus Ticket সেবা ইত্যাদি। এই সেবাগুলো শুধুমাত্র আমাদের মোবাইল অ্যাপ্লিকেশন (App) বা অনুমোদিত মোবাইল চ্যানেলগুলোর মাধ্যমে প্রদান করা হয়।
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>ওয়েবসাইট: কোম্পানি প্রোফাইল, কন্টাক্ট ইনফো, এবং সাধারণ তথ্য প্রদানের জন্য।</li>
              <li>অ্যাপলিকেশন: সকল কার্যকরী ট্রানজ্যাকশন, পেমেন্ট এবং সার্ভিস পরিচালনা করা হয় কেবল অ্যাপে।</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              আপনি যদি ওয়েবসাইটে প্রদত্ত কোনো তথ্য দেখে থাকেন, তা সেবা গ্রহণ হিসেবে গণ্য হবে না—সকল ট্রানজ্যাকশন নিশ্চিত হওয়ার জন্য অবশ্যই অ্যাপ ব্যবহার করুন।
            </p> 
          </section>

          <section id="eligibility" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-3">৩. যোগ্যতা</h2>
            <p className="text-gray-700 leading-relaxed">
              PayPlus এর সেবা গ্রহণের জন্য ব্যবহারকারীর বয়স ন্যূনতম ১৮ বছর হতে হবে, অথবা যেকোনো ক্ষেত্রে প্রযোজ্য আইন অনুযায়ী প্রাপ্তবয়স্ক হতে হবে। ব্যবহারকারী যদি আইনত অনুপযুক্ত হন, তবে আপনি আমাদের সেবা ব্যবহার করতে পারবেন না।
            </p>
          </section>

          <section id="account" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-3">৪. অ্যাকাউন্ট ও নিরাপত্তা</h2>
            <p className="text-gray-700 leading-relaxed">
              অ্যাপে সেবা ব্যবহারের জন্য আপনাকে অ্যাকাউন্ট তৈরি করতে হতে পারে। আপনার লগইন তথ্য (যেমন: মোবাইল নম্বর, পাসওয়ার্ড/পিন, OTP) গোপন রাখুন। আপনার অ্যাকাউন্ট থেকে হওয়া কোনো অননুমোদিত কার্যকলাপ সম্পর্কে অবিলম্বে আমাদেরকে জানাতে হবে। কোম্পানি আপনার নিরাপত্তা বজায় রাখতে যথাযথ প্রচেষ্টা করবে, কিন্তু সম্পূর্ণ নিশ্চয়তা দেবে না।
            </p>
          </section>

          <section id="payments" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-3">৫. পেমেন্ট, ফি ও রিফান্ড</h2>
            <p className="text-gray-700 leading-relaxed">
              সকল পেমেন্ট অ্যাপের মাধ্যমে সম্পন্ন হবে এবং প্রযোজ্য ব্যাংক/পেমেন্ট গেটওয়ে নীতিমালা অনুসরণ করবে। রিফান্ড নীতি অ্যাপ-ভিত্তিক এবং প্রতিটি সেবার ক্ষেত্রে আলাদা হতে পারে। কোনো লেনদেন সংক্রান্ত বক্তব্য জানতে বা রিফান্ড দাবি করতে অ্যাপের কাস্টমার সাপোর্ট ব্যবহার করুন।
            </p>
          </section>

          <section id="disclaimer" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-3">৬. দায় ও অস্বীকার</h2>
            <p className="text-gray-700 leading-relaxed">
              ওয়েবসাইটে প্রদত্ত তথ্য সাধারণত তথ্যবহুল; তা ট্রানজ্যাকশন বা চূড়ান্ত সিদ্ধান্ত হিসেবে গ্রহণ করবেন না। কোম্পানি, তার কর্মকর্তা বা প্রতিনিধি কোনো সরাসরি বা পরোক্ষ ক্ষতির জন্য দায়বদ্ধ থাকবে না — যতদূর আইনিভাবে অনুমোদিত। অ্যাপের মাধ্যমে সেবা প্রদান সংক্রান্ত নির্ভুলতা, সময়ানুসার বা ব্যর্থতার জন্য কোম্পানি সীমিতভাবে দায়ী হতে পারে, তবে কুলক্ষেত্রে সংক্রান্ত নীতি অ্যাপের শর্তাবলীতে নির্দিষ্ট থাকলে সেটিই প্রযোজ্য হবে।
            </p>
          </section>

          <section id="intellectual-property" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-3">৭. বৌদ্ধিক সম্পত্তি</h2>
            <p className="text-gray-700 leading-relaxed">
              ওয়েবসাইটে থাকা সকল কন্টেন্ট, লোগো, ট্রেডমার্ক ও ডিজাইনসমূহ PayPlus বা এর অনুমোদিত কপিরাইট ধারকের সম্পত্তি। অনুমতি ব্যতীত কপি, পুনরায় প্রকাশ বা ব্যবহার করা যাবে না।
            </p>
          </section>

          <section id="privacy" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-3">৮. প্রাইভেসি ও ডেটা</h2>
            <p className="text-gray-700 leading-relaxed">
              ব্যবহারকারীর ব্যক্তিগত ডেটা সংগ্রহ, ব্যবহার ও সংরক্ষণ অ্যালাইন করা হবে আমাদের Privacy Policy অনুযায়ী। লক্ষ্য করুন—ট্রানজ্যাকশন এবং অ্যাকাউন্ট সংক্রান্ত ডেটা মূলত অ্যাপ দ্বারা প্রক্রিয়াধীন; ওয়েবসাইট কেবল সীমিত পাবলিক ইনফরমেশন প্রদর্শন করে।
            </p>
          </section>

          <section id="thirdparty" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-3">৯. থার্ড পার্টি সেবা</h2>
            <p className="text-gray-700 leading-relaxed">
              কিছু সেবা প্রদান করতে থার্ড পার্টি (বিলার, টিকিট এজেন্ট, পেমেন্ট গেটওয়ে) ব্যবহার করা হতে পারে। থার্ড পার্টির শর্তাবলী ও নীতিমালা প্রযোজ্য হতে পারে এবং এই ক্ষেত্রে PayPlus শুধুমাত্র মধ্যস্থতাকারী হিসেবে কাজ করে।
            </p>
          </section>

          <section id="changes" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-3">১০. শর্তাবলীতে পরিবর্তন</h2>
            <p className="text-gray-700 leading-relaxed">
              আমরা প্রয়োজনীয় সময়ে এই Terms & Conditions আপডেট করতে পারি। যে কোনো বড় পরিবর্তন অ্যাপ বা ওয়েবসাইটে ঘোষিত হবে। পরিবর্তনগুলো কার্যকর হওয়ার আগে আপনারা আপডেটেড Effective date দেখে নিন।
            </p>
          </section>

          <section id="termination" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-3">১১. টার্মিনেশন</h2>
            <p className="text-gray-700 leading-relaxed">
              কোম্পানি প্রয়োজনে অ্যাকাউন্ট স্থায়ী বা সাময়িকভাবে ব্লক/অ্যাক্টিভেশন বাতিল করতে পারে যদি কোনও নিয়ম লঙ্ঘন ঘটে বা সেবা অপব্যবহার হয়।
            </p>
          </section>
        </div>
      </main>

      {/* Footer is provided globally in `App.js` */}
    </div>
  );
};

export default TermsAndConditions;