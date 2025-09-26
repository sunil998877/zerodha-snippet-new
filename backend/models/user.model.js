import mongoose, { Schema } from "mongoose";
//login
const userSchema = Schema({
    provider: {
        type: String,
        default: "local"
    },
    providerId: String,
    firstName: String,
    lastName:String,
    email: {
        type: String,
        unique: true,
    sparse: true, // allows null values without throwing duplicate errors
    lowercase: true,
    trim: true
    },
    password: String,
    avatar: String,

}, { timestamps: true });

export default mongoose.model("user", userSchema);