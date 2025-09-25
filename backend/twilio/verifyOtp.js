import twilio from "twilio";
import config from "../config/index.js";

export const verifyOtp = async (req, res) => {
    try {
        const { phone, code } = req.body;
        const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_SID } = config.TWILIO;
        if (!phone || !code) {
            return res.status(400).json({ success: false, message: "Phone number and OTP code are required" });
        }

        // Check if this is a mock OTP verification (explicit flag only)
        const shouldUseMock = (config.TWILIO.USE_MOCK_OTP === "true");
        if (shouldUseMock) {
            if (global.mockOtps && global.mockOtps[phone] && global.mockOtps[phone] === code) {
                delete global.mockOtps[phone];
                return res.json({ success: true, message: "OTP verified (mock mode)" });
            }
            return res.status(400).json({ success: false, message: "Invalid or expired OTP (mock mode)" });
        }

        // Check if Twilio is configured for real verification
        const isTwilioConfigured = config.TWILIO.TWILIO_ACCOUNT_SID &&
            config.TWILIO.TWILIO_AUTH_TOKEN &&
            config.TWILIO.TWILIO_SERVICE_SID;

        if (!isTwilioConfigured) {
            return res.status(500).json({
                success: false,
                message: "Twilio service not configured. Please set credentials or enable USE_MOCK_OTP explicitly."
            });
        }

        // Try real Twilio verification with timeout
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Twilio API timeout')), 10000);
        });
        const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

        const twilioPromise = client.verify.v2
            .services(config.TWILIO.TWILIO_SERVICE_SID)
            .verificationChecks.create({ to: phone, code });

        const verificationCheck = await Promise.race([twilioPromise, timeoutPromise]);

        if (verificationCheck.status === "approved" || verificationCheck.status === "Approved") {
            console.log("[Twilio Verify] verify-otp ok:", { to: phone, status: verificationCheck?.status });
            res.json({ success: true, message: "OTP verified successfully" });
        } else {
            console.warn("[Twilio Verify] verify-otp invalid:", { to: phone, status: verificationCheck?.status });
            res.json({ success: false, message: "Invalid OTP" });
        }

    } catch (error) {
        const twilioInfo = {
            name: error?.name,
            code: error?.code,
            status: error?.status,
            message: error?.message,
            moreInfo: error?.moreInfo,
            details: error?.details
        };
        console.error("[Twilio Verify] verify-otp error:", twilioInfo);
        const isTimeout = error?.code === 'ETIMEDOUT' || /timeout/i.test(error?.message || "");
        const message = isTimeout ? "Twilio connection timed out. Check network/proxy/firewall." : (error?.message || "Failed to verify OTP. Please try again.");
        res.status(500).json({ success: false, message, twilio: { code: error?.code, status: error?.status } });
    }
}