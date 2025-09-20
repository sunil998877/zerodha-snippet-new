
import express from "express";
import passport from "passport";
import { login,Signup } from "../controllers/auth.controller.js";
// import { config } from "dotenv";
import config from "../config/index.js";
export const router = express.Router();

router.post("/login",login);
router.post("/signup",Signup);

router.get("/google", passport.authenticate("google",{scope:["profile","email"]}));
router.get("/google/callback", passport.authenticate("google",{
    successRedirect: `${config.URI.FRONTEND_URL || "http://localhost:5173"}/`,
    failureRedirect: `${config.URI.FRONTEND_URL || "http://localhost:5173"}/login`
}));

