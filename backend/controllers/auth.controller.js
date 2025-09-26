import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/index.js";

const signJwt = (payload, expiresIn = "3h") =>
    jwt.sign(payload, config.KEY.SECRET_KEY || "SECRET_KEY", { expiresIn });

const buildUserResponse = (user) => ({
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    avatar: user.avatar || null
});

export const Signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body || {};
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const existing = await userModel.findOne({ email });
        if (existing) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            provider: "local",
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        const token = signJwt({ id: user.id, email: user.email }, "3h");
        return res.status(201).json({
            success: true,
            message: "Signup successful",
            token,
            user: buildUserResponse(user),
           redirectUrl: `${config.URL.DASHBOARD_URL}?token=${token}`

        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body || {};
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password required" });
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const valid = await bcrypt.compare(password, user.password || "");
        if (!valid) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }
        const token = signJwt({ id: user._id, email: user.email }, "3h");
        const redirectUrl = `${config.URL.DASHBOARD_URL}?token=${token}`;
        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: buildUserResponse(user),
            redirectUrl,
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export default { login, Signup };