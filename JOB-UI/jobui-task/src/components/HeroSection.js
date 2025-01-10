import React from "react";
import Paystack from "../assets/paystack.svg"
import Google from "../assets/google.svg"
import KPMG from "../assets/kpmg.svg"
import Hero from "../assets/hero-image.svg"

function HeroSection() {
  return (
    <section className="bg-green-50 py-12 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
            Find a <span className="text-green-500">job</span> easily
          </h1>
          <p className="mt-4 text-gray-600">
            With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers and data seekers alike.
          </p>
          <div className="mt-6 flex space-x-2">
            <input
              type="text"
              placeholder="Enter keywords, skill, or role"
              className="p-2 border rounded-md flex-grow"
            />
            <button className="bg-green-500 text-white px-4 rounded-md">Search</button>
          </div>
          <p className="mt-4 text-sm text-gray-500">Trusted by:</p>
          <div className="flex space-x-4 mt-2">
            <img src={Paystack} alt="Paystack" className="h-6" />
            <img src={Google} alt="Google" className="h-6" />
            <img src={KPMG} alt="KPMG" className="h-6" />
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <img src={Hero} alt="Job Finder" className="rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
