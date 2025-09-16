import  twilio  from "twilio";


export const verifyOtp = async (req,res) =>{
    try {
        const {phone,code} = req.body;
        const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_SID } = process.env;
        if (!phone || !code) {
            return res.status(400).json({success: false, message: "Phone number and OTP code are required"});
        }

        // Check if this is a mock OTP verification (explicit flag or prior fallback)
        const shouldUseMock = process.env.USE_MOCK_OTP === "true" || (global.mockOtps && global.mockOtps[phone]);
        if (shouldUseMock) {
            if (global.mockOtps && global.mockOtps[phone] && global.mockOtps[phone] === code) {
                delete global.mockOtps[phone];
                return res.json({success: true, message: "OTP verified (mock mode)"});
            }
            return res.status(400).json({success: false, message: "Invalid or expired OTP (mock mode)"});
        }

        // Check if Twilio is configured for real verification
        const isTwilioConfigured = process.env.TWILIO_ACCOUNT_SID && 
                                   process.env.TWILIO_AUTH_TOKEN && 
                                   process.env.TWILIO_SERVICE_SID;

        if (!isTwilioConfigured) {
            return res.status(500).json({
                success: false, 
                message: "Twilio service not configured. Please check environment variables."
            });
        }

        // Try real Twilio verification with timeout
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Twilio API timeout')), 10000);
        });
        const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

        const twilioPromise = client.verify.v2
            .services(process.env.TWILIO_SERVICE_SID)
            .verificationChecks.create({to: phone, code});

        const verificationCheck = await Promise.race([twilioPromise, timeoutPromise]);
            
        if (verificationCheck.status === "approved" || verificationCheck.status === "Approved") {
            res.json({success: true, message: "OTP verified successfully"});
        } else {
            res.json({success: false, message: "Invalid OTP"});
        }
        
    } catch (error) {
        console.error("OTP verification error:", error);
        const isTimeout = error?.code === 'ETIMEDOUT' || /timeout/i.test(error?.message || "");
        const message = isTimeout ? "Twilio connection timed out. Check network/proxy/firewall." : (error?.status ? `Twilio error ${error.status}` : "Failed to verify OTP. Please try again.");
        res.status(500).json({ success: false, message });
    }
}