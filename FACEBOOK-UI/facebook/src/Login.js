import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="w-full max-w-xs bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-2 text-center">facebook</h1>
        <p className="text-sm text-gray-600 text-center mb-4">
          Facebook helps you connect and share with the people in your life.
        </p>
        <form>
          <input
            type="text"
            placeholder="Email address or your number"
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log in
          </button>
        </form>
        <div className="text-center mt-3">
          <a
            href="#"
            className="text-blue-600 text-sm hover:underline"
          >
            Forgotten your password?
          </a>
        </div>
        <button
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 mt-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Create new account
        </button>
        <div className="text-center mt-4 text-sm text-gray-600">
          <p>
            Create a page for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
