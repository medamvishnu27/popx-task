import React from 'react';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';

const BottomNavigation = ({ 
  currentScreen, 
  totalScreens, 
  onPrevious, 
  onNext, 
  onHome 
}) => {
  return (
    <div className="bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <button 
          onClick={onHome}
          className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Home className="w-6 h-6 text-gray-400 hover:text-purple-600" />
        </button>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onPrevious}
            disabled={currentScreen === 1}
            className="disabled:opacity-50 p-1 hover:bg-gray-100 rounded-lg transition-colors disabled:hover:bg-transparent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-400" />
          </button>
          <span className="text-sm text-gray-500">
            {currentScreen} of {totalScreens}
          </span>
          <button 
            onClick={onNext}
            disabled={currentScreen === totalScreens}
            className="disabled:opacity-50 p-1 hover:bg-gray-100 rounded-lg transition-colors disabled:hover:bg-transparent"
          >
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;