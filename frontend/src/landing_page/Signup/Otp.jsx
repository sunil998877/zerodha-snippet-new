import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import Signup from '../../pages/Signup'


export default function Otp() {
    const [otp, setOtp] = useState("")
    const [isVerified, setIsVerified] = useState(false)
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const handleVerifyOtp = async () => {
        setLoading(true);
        setError("");
        setIsVerified(false);


        try {
            const phoneNumber = localStorage.getItem("phone");
            const phoneWithCountryCode = `+91${phoneNumber}`;

            const response = await axios.post("https://zerodha-snippet-new-backend.vercel.app/verify-otp", {
                phone: phoneWithCountryCode,
                code: otp
            });

            console.log(response.data);

            if (response.data.success) {
                setIsVerified(true);
                alert("OTP verified successfully!");
             
            
                navigate("/signup_auth");
            } else {
                setError(response.data.message);
                setIsVerified(false);
            }
        } catch (error) {
            console.error("OTP verification error:", error);
            setError(error.response?.data?.message || "Something went wrong");
            setIsVerified(false);
        }
        finally {
            setLoading(false)
        }

    }
    return (
        <div className='d-flex flex-row align-items-center justify-content-start mt-3'>
            <div class="mobile-input trading-otp mt-3">
                <input type="number" autoFocus="" id="number" name="number" placeholder="Enter Otp " value={otp} onChange={(e) => setOtp(e.target.value)} required />
            </div>

            <button className="otp-btn btn  btn-color btn-position  opacity   fs-5  rounded-1   custom-hover trading mt-3 Otp-verified" style={{ width: "255px", height: "50px" }} onClick={handleVerifyOtp}>{loading ? "Verifying..." : "Verify OTP"}</button>



            <div className="alert-container">
                {error && (

                    <div class="alert alert-warning alert-dismissible fade show d-flex justify-content-between" role="alert">
                        <strong>{error}</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                )}
                {isVerified && (

                    <div class="alert alert-warning alert-dismissible fade show d-flex justify-content-between" role="alert">
                        <strong>OTP verified successfully</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                )}
                {loading && (

                    <div class="alert alert-warning alert-dismissible fade show d-flex justify-content-between" role="alert">
                        <strong>Loading...</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                )}
            </div>




        </div>
    );
}
