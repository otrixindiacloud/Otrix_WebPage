'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in on mount
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const loginWithGoogle = async () => {
    try {
      // Simulate Google OAuth - in real app, integrate with Google OAuth
      const mockUser = {
        id: 'google_' + Date.now(),
        name: 'Google User',
        email: 'user@gmail.com',
        provider: 'google',
        avatar: 'https://via.placeholder.com/150/4285F4/FFFFFF?text=G',
        phone: null
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      router.push('/');
      return { success: true, user: mockUser };
    } catch (error) {
      console.error('Google login error:', error);
      return { success: false, error: error.message };
    }
  };

  const loginWithFacebook = async () => {
    try {
      // Simulate Facebook OAuth - in real app, integrate with Facebook OAuth
      const mockUser = {
        id: 'facebook_' + Date.now(),
        name: 'Facebook User',
        email: 'user@facebook.com',
        provider: 'facebook',
        avatar: 'https://via.placeholder.com/150/1877F2/FFFFFF?text=F',
        phone: null
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      router.push('/');
      return { success: true, user: mockUser };
    } catch (error) {
      console.error('Facebook login error:', error);
      return { success: false, error: error.message };
    }
  };

  const loginWithPhone = async (phoneNumber, otp) => {
    try {
      // Simulate phone verification - in real app, integrate with SMS service
      const mockUser = {
        id: 'phone_' + Date.now(),
        name: 'Phone User',
        email: null,
        provider: 'phone',
        avatar: 'https://via.placeholder.com/150/34C759/FFFFFF?text=P',
        phone: phoneNumber
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      router.push('/');
      return { success: true, user: mockUser };
    } catch (error) {
      console.error('Phone login error:', error);
      return { success: false, error: error.message };
    }
  };

  const registerWithEmail = async (email, password, name) => {
    try {
      // Simulate email registration - in real app, integrate with your backend
      const mockUser = {
        id: 'email_' + Date.now(),
        name: name,
        email: email,
        provider: 'email',
        avatar: 'https://via.placeholder.com/150/6B7280/FFFFFF?text=E',
        phone: null
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      router.push('/');
      return { success: true, user: mockUser };
    } catch (error) {
      console.error('Email registration error:', error);
      return { success: false, error: error.message };
    }
  };

  const registerWithOTP = async (userData) => {
    try {
      // Simulate OTP-based registration - in real app, integrate with your backend
      const { firstName, lastName, email, phone, password, otp } = userData;
      
      // Verify OTP (in real app, this would be verified against backend)
      const storedOTP = sessionStorage.getItem('tempOTP');
      if (otp !== storedOTP) {
        return { success: false, error: 'Invalid OTP' };
      }
      
      // Create user account
      const mockUser = {
        id: 'otp_' + Date.now(),
        name: `${firstName} ${lastName}`,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        provider: 'otp',
        avatar: 'https://via.placeholder.com/150/6B7280/FFFFFF?text=U',
        isVerified: true,
        createdAt: new Date().toISOString()
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      
      // Clear temporary data
      sessionStorage.removeItem('tempOTP');
      sessionStorage.removeItem('tempEmail');
      sessionStorage.removeItem('tempPhone');
      
      return { success: true, user: mockUser };
    } catch (error) {
      console.error('OTP registration error:', error);
      return { success: false, error: error.message };
    }
  };

  const loginWithEmail = async (email, password) => {
    try {
      // Simulate email login - in real app, integrate with your backend
      const mockUser = {
        id: 'email_' + Date.now(),
        name: 'Email User',
        email: email,
        provider: 'email',
        avatar: 'https://via.placeholder.com/150/6B7280/FFFFFF?text=E',
        phone: null
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      router.push('/');
      return { success: true, user: mockUser };
    } catch (error) {
      console.error('Email login error:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/');
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    loading,
    loginWithGoogle,
    loginWithFacebook,
    loginWithPhone,
    registerWithEmail,
    registerWithOTP,
    loginWithEmail,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
