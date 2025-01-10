import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold mb-4">GetAJob</h3>
          <p className="text-sm">
            GetAJob provides full job services tailored to your needs.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2024 GetAJob. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
