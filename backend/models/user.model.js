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
        
    },
    password: String,
    avatar: String,

}, { timestamps: true });

export default mongoose.model("user", userSchema);