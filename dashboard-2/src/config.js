const inferDefaultBaseUrl = () => {
  try {
    if (typeof window !== "undefined" && window.location && window.location.hostname === "localhost") {
      return "http://localhost:3001";
    }
  } catch {}
  return "https://zerodha-snippet-new-backend.vercel.app";
};

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || inferDefaultBaseUrl();
// export const AUTH_BASE_URL = import.meta.env.VITE_AUTH_BASE_URL || API_BASE_URL;
export const APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL || "";

export const endpoints = {
  profile: `${API_BASE_URL}/api/v1/user/profile`,
  logout: `${API_BASE_URL}/api/v1/user/logout`,
  oauthGoogle: `${API_BASE_URL}/api/v1/user/google`,
  positions: `${API_BASE_URL}/allPositions`,
  holdings: `${API_BASE_URL}/allHoldings`,
};


