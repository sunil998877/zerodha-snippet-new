
import express from "express";
import passport from "passport";
import { login,Signup } from "../controllers/auth.controller.js";
import jwt from "jsonwebtoken";
// import { config } from "dotenv";
import config from "../config/index.js";
export const router = express.Router();

router.post("/login",login);
router.post("/signup",Signup);

router.get("/google", passport.authenticate("google",{scope:["profile","email"]}));
router.get("/google/callback", (req, res, next) => {
    passport.authenticate("google", async (err, user) => {
        if (err || !user) {
            const failureUrl = `${config.URI.FRONTEND_URL || "http://localhost:5173"}/login?error=oauth_failed`;
            return res.redirect(failureUrl);
        }
        try {
            const token = jwt.sign(
                { id: user._id, email: user.email },
                (config.KEY && config.KEY.SECRET_KEY) || "SECRET_KEY",
                { expiresIn: "3h" }
            );
            const redirectUrl = `${config.URI.FRONTEND_URL || "http://localhost:5173"}/?token=${token}`;
            return res.redirect(redirectUrl);
        } catch (e) {
            const failureUrl = `${config.URI.FRONTEND_URL || "http://localhost:5173"}/login?error=token_issue`;
            return res.redirect(failureUrl);
        }
    })(req, res, next);
});

