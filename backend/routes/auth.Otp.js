
import express from "express";
import { sendOTP } from "../twilio/sendOtp.js";
import { verifyOtp } from "../twilio/verifyOtp.js";

export const routerOTP = express.Router();

routerOTP.post("/send-otp", sendOTP);

// verify otp
routerOTP.post("/verify-otp", verifyOtp);
