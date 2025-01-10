import React from "react";

function CallToAction() {
  return (
    <section className="bg-green-100 py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Get a Job You Actually Like
        </h2>
        <p className="text-gray-700 mb-6">
          Create an account today and start exploring opportunities that match
          your skills and aspirations. We are here to help you find your dream
          job quickly and easily!
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-md text-lg shadow-lg hover:bg-green-700 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
