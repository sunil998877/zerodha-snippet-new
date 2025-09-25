import twilio from "twilio";

import config from "../config/index.js";

export const sendOTP = async (req, res) => {
    try {
        const { phone } = req.body;
        if (!phone) return res.status(400).json({ success: false, message: "Phone is required" });
        if (!phone.startsWith("+")) return res.status(400).json({ success: false, message: "Phone must include country code" });

        // Check explicit mock flag ONLY
        const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_SID, USE_MOCK_OTP } = config.TWILIO;
        const shouldUseMock = USE_MOCK_OTP === "true";
        if (shouldUseMock) {
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            console.log(`Mock OTP for ${phone}: ${otp}`);
            global.mockOtps = { ...(global.mockOtps || {}), [phone]: otp };
            return res.json({ success: true, sid: "mock_" + Date.now(), status: "pending", message: "Mock OTP generated (mock mode)" });
        }

        // Validate Twilio configuration strictly (do not silently mock)
        if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_SERVICE_SID) {
            return res.status(500).json({
                success: false,
                message: "Twilio is not configured. Set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_SID and unset USE_MOCK_OTP."
            });
        }

        // Twilio OTP
        const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
        const verification = await client.verify.v2.services(TWILIO_SERVICE_SID)
            .verifications.create({ to: phone, channel: "sms" });

        console.log("[Twilio Verify] send-otp ok:", {
            to: phone,
            status: verification?.status,
            sid: verification?.sid
        });
        res.json({ success: true, sid: verification.sid, status: verification.status });

    } catch (error) {
        const twilioInfo = {
            name: error?.name,
            code: error?.code,
            status: error?.status,
            message: error?.message,
            moreInfo: error?.moreInfo,
            details: error?.details
        };
        console.error("[Twilio Verify] send-otp error:", twilioInfo);
        const isTimeout = error?.code === 'ETIMEDOUT' || /timeout/i.test(error?.message || "");
        const message = isTimeout
            ? "Twilio connection timed out. Check network/proxy/firewall."
            : (error?.message || "Failed to send OTP");
        res.status(500).json({ success: false, message, twilio: { code: error?.code, status: error?.status } });
    }
};
