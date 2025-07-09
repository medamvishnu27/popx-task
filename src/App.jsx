import React, { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import MobileLayout from './components/layout/MobileLayout';
import BottomNavigation from './components/common/BottomNavigation';
import WelcomeScreen from './components/screens/WelcomeScreen';
import CreateAccountScreen from './components/screens/CreateAccountScreen';
import LoginScreen from './components/screens/LoginScreen';
import AccountSettingsScreen from './components/screens/AccountSettingsScreen';

const App = () => {
  const { isAuthenticated, user, login, register, logout, updateUser } = useAuth();
  const [currentScreen, setCurrentScreen] = useState(4);

  const handleNext = () => {
    if (currentScreen < 4) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const handlePrevious = () => {
    if (currentScreen > 1) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const handleHome = () => {
    setCurrentScreen(1);
  };

  const handleCreateAccount = (formData) => {
    register(formData);
    setCurrentScreen(4);
  };

  const handleLogin = (email, password) => {
    login(email, password);
    setCurrentScreen(4);
  };

  const handleLogout = () => {
    logout();
    setCurrentScreen(4);
  };

  const renderCurrentScreen = () => {
    switch(currentScreen) {
      case 1:
        return <WelcomeScreen onCreateAccount={() => setCurrentScreen(3)} onLogin={() => setCurrentScreen(2)} />;
      case 2:
        return <LoginScreen onLogin={handleLogin} />;
      case 3:
        return <CreateAccountScreen onCreateAccount={handleCreateAccount} />;
      case 4:
        return <AccountSettingsScreen user={user} onLogout={handleLogout} onUpdateUser={updateUser} />;
      default:
        return <AccountSettingsScreen user={user} onLogout={handleLogout} onUpdateUser={updateUser} />;
    }
  };

  return (
    <MobileLayout>
      <div className="flex-1 overflow-y-auto">
        {renderCurrentScreen()}
      </div>
      <BottomNavigation 
        currentScreen={currentScreen}
        totalScreens={4}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onHome={handleHome}
      />
    </MobileLayout>
  );
};
 
export default App
