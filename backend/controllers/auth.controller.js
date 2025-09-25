import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/index.js";




const Signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const existinger = await userModel.findOne({ email });
        if (existinger) {
            return res.status(400).json({ message: "user already exist" });
        }

        const hashedpassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            provider: "local",
            firstName,
            lastName,
            email,
            password: hashedpassword
        });
        //generate token 
        const token = jwt.sign({ id: user.id, email: user.email }, config.KEY.SECRET_KEY || "SECRET_KEY" , { expiresIn: "3h" });

        res.status(201).json({
            success: true,
            message: "Signup successfully",
            redirectUrl: `${(config.URI && config.URI.FRONTEND_URL) || "https://zerodha-snippet-new-dashboard.vercel.app"}/dashboard?token=${token}`,
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                avatar: user.avatar || null
            }
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};

// login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const User = await userModel.findOne({ email });
        if (!User) {
            return res.status(404).json({ message: "user not found" });
        }

        const ismatch = await bcrypt.compare(password, User.password);
        if (!ismatch) {
            return res.status(400).json({ message: "invalid cridential" });
        }

        // token generate after successful password verification
        const token = jwt.sign(
            { id: User._id, email: User.email },
            config.KEY.SECRET_KEY || "SECRET_KEY",
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "login successfully", token, User: {
                id: User._id,
                firstName: User.firstName,
                lastName: User.lastName,
                email: User.email,
                avatar: User.avatar || null,
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

// callback handler

const Oath = async (profile,done) =>{
    try {
        let User = await userModel.findOne({provider:profile.provider, providerId:profile.id});
        if (!User) {
            User = await userModel.create({
                provider:profile.provider,
                providerId:profile.id,
                name:profile.displayName,
                email:profile.emaisl[0].value,
                avatar:profile.photos[0].value
            });
        }
        return done(null,User);
    } catch (error) {
        return done(error,null);
    }
};

export { login, Signup };