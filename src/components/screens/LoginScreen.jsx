import React, { useState } from 'react';

const LoginScreen = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onLogin(formData.email, formData.password);
    }
  };

  const isFormValid = formData.email.trim() && formData.password.trim();

  return (
    <div className="flex flex-col h-full bg-white px-6 py-8">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Signin to your<br />
          PopX account
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-purple-600 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter email address"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-purple-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="Enter password"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
        </form>
      </div>
      
      <button 
        onClick={handleSubmit}
        disabled={!isFormValid}
        className={`w-full py-4 rounded-lg font-medium transition-colors ${
          isFormValid 
            ? 'bg-purple-600 text-white hover:bg-purple-700' 
            : 'bg-gray-400 text-white cursor-not-allowed'
        }`}
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;