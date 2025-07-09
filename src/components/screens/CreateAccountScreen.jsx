import React, { useState } from 'react';
import ImageUpload from '../common/ImageUpload';

const CreateAccountScreen = ({ onCreateAccount }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: false,
    profileImage: null
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
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    if (formData.isAgency === null) newErrors.isAgency = 'Please select if you are an agency';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onCreateAccount(formData);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white px-6 py-8">
      <div className="flex-1 overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Create your<br />
          PopX account
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center mb-6">
            <ImageUpload 
              currentImage={formData.profileImage}
              onImageChange={(image) => handleInputChange('profileImage', image)}
            />
          </div>

          <div>
            <label className="block text-purple-600 text-sm font-medium mb-2">
              Full Name*
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              placeholder="Enter your full name"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>
          
          <div>
            <label className="block text-purple-600 text-sm font-medium mb-2">
              Phone number*
            </label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              placeholder="Enter your phone number"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
          </div>
          
          <div>
            <label className="block text-purple-600 text-sm font-medium mb-2">
              Email address*
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-purple-600 text-sm font-medium mb-2">
              Password*
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="Enter your password"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          
          <div>
            <label className="block text-purple-600 text-sm font-medium mb-2">
              Company name
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              placeholder="Enter your company name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <label className="block text-purple-600 text-sm font-medium mb-3">
              Are you an Agency?*
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    name="agency"
                    checked={formData.isAgency === true}
                    onChange={() => handleInputChange('isAgency', true)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    formData.isAgency === true ? 'border-purple-600 bg-purple-600' : 'border-gray-300'
                  }`}>
                    {formData.isAgency === true && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                </div>
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    name="agency"
                    checked={formData.isAgency === false}
                    onChange={() => handleInputChange('isAgency', false)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    formData.isAgency === false ? 'border-purple-600 bg-purple-600' : 'border-gray-300'
                  }`}>
                    {formData.isAgency === false && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                </div>
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
            {errors.isAgency && <p className="text-red-500 text-xs mt-1">{errors.isAgency}</p>}
          </div>
        </form>
      </div>
      
      <button 
        onClick={handleSubmit}
        className="w-full bg-purple-600 text-white py-4 rounded-lg font-medium mt-8 hover:bg-purple-700 transition-colors"
      >
        Create Account
      </button>
    </div>
  );
};

export default CreateAccountScreen;