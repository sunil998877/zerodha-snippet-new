
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
const DASHBOARD_BASE_URL = config.URL.DASHBOARD_URL || "http://localhost:5174";
const FRONTEND_BASE_URL = config.URI.FRONTEND_URL || "http://localhost:5173";

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", (req, res, next) => {
  passport.authenticate("google", { session: false }, (err, user) => {
    console.log(err);
    console.log(user);
    
    if (err || !user) return res.redirect(`${FRONTEND_BASE_URL}/login`);

    const secret =  config.KEY.SECRET_KEY || "SECRET_KEY";
    if (!secret) {
      console.error("JWT secret missing");
      return res.status(500).send("Internal server error");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      secret,
      { expiresIn: "3h" }
    );

    res.redirect(`${DASHBOARD_BASE_URL}/?token=${token}`);
  })(req, res, next);
});

  