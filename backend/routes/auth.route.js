
import express from "express";
import passport from "passport";
import { login,Signup } from "../controllers/auth.controller.js";
import jwt from "jsonwebtoken";
// import { config } from "dotenv";
import config from "../config/index.js";
export const router = express.Router();

router.post("/login",login);
router.post("/signup",Signup);

// Start Google OAuth with optional app base in state
// Google login
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Helper: pick safe frontend base
const getBase = (req) => {
  const allowed = [
    config.URI.FRONTEND_URL,
    "https://zerodha-snippet-new-dashboard.vercel.app",
    "http://localhost:5173",
    "http://localhost:5173",
  ].filter(Boolean);
  return allowed.includes(req.headers.origin)
    ? req.headers.origin
    : config.URI.FRONTEND_URL || allowed[0];
};

// Google callback
router.get("/google/callback", (req, res, next) => {
    passport.authenticate("google", { session: false }, (err, user) => {
      const base = getBase(req);
      if (err || !user) return res.redirect(`${base}/login`);

      const token = jwt.sign(
        { id: user.id, email: user.email },
        (config.KEY && config.KEY.SECRET_KEY) || "SECRET_KEY",
        { expiresIn: "1h" }
      );

      console.log(token);

      // Redirect back to the caller base without using OAuth state
      res.redirect(`${base}/?token=${token}`);
    })(req, res, next);
  });
  