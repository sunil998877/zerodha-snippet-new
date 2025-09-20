import dotenv from "dotenv";
dotenv.config();

export default {
  PASSPORT: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  URI: {
    FRONTEND_URL: process.env.FRONTEND_URL
  },
  URL:{
    MONGO_URL:process.env.MONGO_URL
  },
  PORT:{
    PORT:process.env.PORT
  }
};
