import React from 'react';

const WelcomeScreen = ({ onCreateAccount, onLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-50 px-6">
      <div className="flex-1 flex items-center justify-center">
        {/* <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
          <span className="text-white text-2xl font-bold">1</span>
        </div> */}
      </div>
      
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
      </div>
      
      <div className="space-y-4 w-full">
        <button 
          onClick={onCreateAccount}
          className="w-full bg-purple-600 text-white py-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Create Account
        </button>
        <button 
          onClick={onLogin}
          className="w-full bg-purple-200 text-purple-600 py-4 rounded-lg font-medium hover:bg-purple-300 transition-colors"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;