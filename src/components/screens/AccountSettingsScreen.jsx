import React, { useState, useEffect } from 'react';
import { Check, LogOut, Edit, Save, X } from 'lucide-react';
import ImageUpload from '../common/ImageUpload';
import imgss from "../../assets/image.png"

const AccountSettingsScreen = ({ user: propUser, onLogout, onUpdateUser }) => {
  const defaultUser = {
    fullName: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    profileImage:
      '/src/assets/image.png',
    phoneNumber: '',
    companyName: '',
    isAgency: false,
  };

  // Load user from propUser or fallback to defaultUser
  const [user, setUser] = useState(() => {
    return propUser || defaultUser;
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleImageChange = (newImage) => {
    const updatedUser = {
      ...user,
      profileImage: newImage,
    };
    setUser(updatedUser);
    if (onUpdateUser) {
      onUpdateUser(updatedUser);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prev) => {
      const updated = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };
      return updated;
    });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    if (onUpdateUser) {
      onUpdateUser(user);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setUser(propUser);
    setIsEditing(false);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setUser(defaultUser);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] sm:h-[calc(100vh-6rem)] bg-gray-50 px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-medium text-gray-900">Account Settings</h1>
        <div className="flex space-x-2">
          
            <>
           
              <button
                onClick={handleLogout}
                className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </>
          
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="relative">
            {user?.profileImage ? (
              <ImageUpload
                currentImage={user.profileImage}
                onImageChange={handleImageChange}
              />
            ) : (
              <div className="relative">
                <img
                  src="../../assets/image.png"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
            )}
          </div>
          <div className="ml-4 flex-1">
            <h2 className="text-lg font-medium text-gray-900">
              {user?.fullName || 'Marry Doe'}
            </h2>
            <p className="text-gray-500 text-sm">
              {user?.email || 'Marry@Gmail.Com'}
            </p>
          </div>
         
        </div>

       

        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div className="flex-1"></div>
    </div>
  );
};

export default AccountSettingsScreen;
