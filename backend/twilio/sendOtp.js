import twilio from "twilio";

import config from "../config/index.js";

export const sendOTP = async (req, res) => {
    try {
        const { phone } = req.body;
        if (!phone) return res.status(400).json({ success: false, message: "Phone is required" });
        if (!phone.startsWith("+")) return res.status(400).json({ success: false, message: "Phone must include country code" });

        // Check Twilio credentials or explicit mock flag
        const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_SID, USE_MOCK_OTP } = config.TWILIO;
        const shouldUseMock = USE_MOCK_OTP === "true" || !TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_SERVICE_SID;
        if (shouldUseMock) {
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            console.log(`Mock OTP for ${phone}: ${otp}`);
            global.mockOtps = { ...(global.mockOtps || {}), [phone]: otp };
            return res.json({ success: true, sid: "mock_" + Date.now(), status: "pending", message: "Mock OTP generated (mock mode)" });
        }

        // Twilio OTP
        const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
        const verification = await client.verify.v2.services(TWILIO_SERVICE_SID)
            .verifications.create({ to: phone, channel: "sms" });

        res.json({ success: true, sid: verification.sid, status: verification.status });

    } catch (error) {
        console.error("OTP error:", error);
        // Gracefully fall back to mock if Twilio times out or is blocked
        const { phone } = req.body || {};
        if (phone) {
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            console.log(`Mock OTP (fallback) for ${phone}: ${otp}`);
            global.mockOtps = { ...(global.mockOtps || {}), [phone]: otp };
            return res.status(207).json({ success: true, sid: "mock_" + Date.now(), status: "pending", message: "Twilio failed; using mock OTP. See server logs for code." });
        }
        const message = error?.code === 'ETIMEDOUT' ? "Twilio connection timed out. Check network/proxy/firewall." : (error?.status ? `Twilio error ${error.status}` : "Failed to send OTP");
        res.status(500).json({ success: false, message });
    }
};
