const inferBaseUrl = () => {
  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1" || host === "::1") {
      return "http://localhost:3001"; // dev backend
    }
  }
  return "https://zerodha-snippet-new-backend.vercel.app"; // default prod
};


export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.trim() || inferBaseUrl();
// export const API_BASE_URL = inferBaseUrl();

// Where to send user after successful local signup/login to load dashboard
const inferAppUrl = () => {
  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1" || host === "::1") {
      // default dashboard dev origin
      return "http://localhost:5174";
    }
  }
  return "https://zerodha-snippet-new-dashboard.vercel.app";
};

export const APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL?.trim() || inferAppUrl();

// group base paths
const USER_BASE = `${API_BASE_URL}/api/v1/user`;

export const endpoints = {
  // OTP
  sendOtp: `${USER_BASE}/send-otp`,
  verifyOtp: `${USER_BASE}/verify-otp`,
  // Auth
  signup: `${USER_BASE}/signup`,
  login: `${USER_BASE}/login`,
  oauthGoogle: `${API_BASE_URL}/api/v1/user/google`,
};
