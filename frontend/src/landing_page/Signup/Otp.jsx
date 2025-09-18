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

            const response = await axios.post("https://zerodha-snippet-backend.vercel.app/verify-otp", {
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

            <input type="number" placeholder='Enter Otp' value={otp} onChange={(e) => setOtp(e.target.value)} style={{ width: "200px", height: "45px" }} className='form-control otp-input' />
            <button onClick={handleVerifyOtp} disabled={loading} className='btn btn-primary ms-3 ' style={{ height: "45px" }}>   <br />  {loading ? "Verifying..." : "Verify OTP"}</button>



            <div className="alert-container">
                {isVerified && (
                    <div className="alert alert-success slide-down" role="alert">
                         OTP verified successfully
                    </div>
                )}

                {error && (
                    <div className="alert alert-danger slide-down" role="alert">
                         {error}
                    </div>
                )}

                {loading && (
                    <div className="alert alert-warning slide-down" role="alert">
                        Loading...
                    </div>
                )}

            
            </div>
            

    </div>
    );
}
