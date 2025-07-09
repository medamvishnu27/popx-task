import React from 'react';

const MobileLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: '800px' }}>
        <div className="h-full flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;