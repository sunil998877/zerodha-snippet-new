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
    },
    password: String,
    avatar: String,

}, { timestamps: true });

export default mongoose.model("user", userSchema);