export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://zerodha-snippet-new-backend.vercel.app";

export const endpoints = {
    sendOtp: `${API_BASE_URL}/api/v1/user/send-otp`,
    verifyOtp: `${API_BASE_URL}/api/v1/user/verify-otp`,
    
  };