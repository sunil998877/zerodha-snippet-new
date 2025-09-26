import dotenv from "dotenv";
dotenv.config();

export default {
  PASSPORT: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  URI: {
    FRONTEND_URL: process.env.FRONTEND_URL,
    BACKEND_URL: process.env.BACKEND_URL

  },
  URL:{
    MONGO_URL:process.env.MONGO_URL,
    BACKEND_URL:process.env.BACKEND_URL,
    DASHBOARD_URL:process.env.DASHBOARD_URL 
  },
  PORT:{
    PORT:process.env.PORT
  },
  KEY:{
    SECRET_KEY:process.env.SECRET_KEY || "SECRET_KEY"
  },
  TWILIO:{
    TWILIO_ACCOUNT_SID:process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN:process.env.TWILIO_AUTH_TOKEN,
    TWILIO_SERVICE_SID:process.env.TWILIO_SERVICE_SID,
    USE_MOCK_OTP:process.env.USE_MOCK_OTP
  }
};
