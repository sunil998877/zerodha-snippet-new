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



console.log("Google Client ID:", config.PASSPORT.GOOGLE_CLIENT_ID);
// google strategy
passport.use(new GoogleStrategy({
    clientID: config.PASSPORT.GOOGLE_CLIENT_ID,
    clientSecret: config.PASSPORT.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/api/v1/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await userModel.findOne({ providerId: profile.id, provider: "google" });

        if (!user) {
            user = await userModel.create({
                provider: "google",
                providerId: profile.id,
                firstName: profile.name?.givenName || "",
                lastName: profile.name?.familyName || "",
                // email:profile.email?.[0]?.value,
                email: profile.emails?.[0]?.value || undefined,

                avatar: profile.photos?.[0]?.value

            });

        }
        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

export default passport;