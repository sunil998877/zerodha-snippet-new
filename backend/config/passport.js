import passport from "passport";
import config from "./index.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import userModel from "../models/user.model.js";

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userModel.findOne({ _id: id });
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});



// console.log("Google Client ID:", config.PASSPORT.GOOGLE_CLIENT_ID);
// google strategy
passport.use(new GoogleStrategy({
    clientID: config.PASSPORT.GOOGLE_CLIENT_ID,
    clientSecret: config.PASSPORT.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/api/v1/user/google/callback" || "https://zerodha-snippet-new-backend.vercel.app/api/v1/user/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const email = profile?.emails?.[0]?.value?.toLowerCase().trim();

        let user = await userModel.findOne({
            $or: [
                { providerId: profile.id },
                { email: email }
            ]
        });

        if (!user) {
            user = await userModel.create({
                provider: "google",
                providerId: profile.id,
                firstName: profile?.name?.givenName?.trim() || "",
                lastName: profile?.name?.familyName?.trim() || "",
                email: email,
                avatar: profile?.photos?.[0]?.value || null
            });
        } else {
            // Optional: Update missing providerId if not already linked
            if (!user.providerId) {
                user.providerId = profile.id;
                user.provider = "google";
                await user.save();
            }
        }

        // let user = await userModel.findOne({ providerId: profile.id, provider: "google" });

        // if (!user) {
        //     user = await userModel.create({
        //         provider: "google",
        //         providerId: profile.id,
        //         firstName: profile?.name?.givenName?.trim() || "",
        //         lastName: profile?.name?.familyName?.trim() || "",
        //         email: profile?.emails?.[0]?.value?.toLowerCase().trim() || undefined,
        //         avatar: profile?.photos?.[0]?.value || null
        //     });


        
        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

export default passport;