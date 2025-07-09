export const AUTH_KEY = 'popx_auth';

export const saveAuth = (authData) => {
  try {
    localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
  } catch (error) {
    console.error('Error saving auth data:', error);
  }
};

export const getAuth = () => {
  try {
    const auth = localStorage.getItem(AUTH_KEY);
    return auth ? JSON.parse(auth) : null;
  } catch (error) {
    console.error('Error getting auth data:', error);
    return null;
  }
};

export const removeAuth = () => {
  try {
    localStorage.removeItem(AUTH_KEY);
  } catch (error) {
    console.error('Error removing auth data:', error);
  }
};

const getUserDataKey = (email) => `popx_user_data_${email}`;

export const saveUserDataByEmail = (email, userData) => {
  try {
    localStorage.setItem(getUserDataKey(email), JSON.stringify(userData));
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

export const getUserDataByEmail = (email) => {
  try {
    const userData = localStorage.getItem(getUserDataKey(email));
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
};

export const removeUserDataByEmail = (email) => {
  try {
    localStorage.removeItem(getUserDataKey(email));
  } catch (error) {
    console.error('Error removing user data:', error);
  }
};
