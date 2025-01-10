import React from "react";
import Logo from "../assets/Logos.svg"

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Logo" className="h-8" />
        <ul className="hidden md:flex space-x-6">
          <li className="text-gray-700">Companies</li>
          <li className="text-gray-700">Candidates</li>
          <li className="text-gray-700">Assessment</li>
          <li className="text-gray-700">Post a Job</li>
          <li className="text-gray-700">Career Advice</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hidden md:block text-gray-700">Sign Up</button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-md">Log In</button>
      </div>
    </nav>
  );
}

export default Navbar;
