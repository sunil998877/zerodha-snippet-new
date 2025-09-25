const inferDefaultBaseUrl = () => {
  try {
    if (typeof window !== "undefined" && window.location && window.location.hostname === "localhost") {
      return "http://localhost:3001";
    }
  } catch {}
  return "https://zerodha-snippet-new-backend.vercel.app";
};

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || inferDefaultBaseUrl();

export const endpoints = {
    sendOtp: `${API_BASE_URL}/api/v1/user/send-otp`,
    verifyOtp: `${API_BASE_URL}/api/v1/user/verify-otp`,
    
  };