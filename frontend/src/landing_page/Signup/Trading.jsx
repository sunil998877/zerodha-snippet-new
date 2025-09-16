import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import about from "../About/AboutPage";
import Otp from "./Otp";
// import { fetchUserHello } from "../../services/apiServices";
// import { SchemaTypeOptions } from "mongoose";

function Trading() {
    // const navigate = useNavigate();
    const [phone, setphone] = useState("");
    const [showOtp, setShowOtp] = useState(false);


    const sendOtp = async () => {
        try {
            // Validate phone number
            if (!phone || phone.length !== 10) {
                alert("Please enter a valid 10-digit mobile number");
                return;
            }

            // Add country code to phone number
            const phoneWithCountryCode = `+91${phone}`;

            // const data = await fetchUserHello({userId:"23tr2hfhgsfqywr126"});
            // console.log(data, "data")
            const response = await axios.post("https://zerodha-snippet-backend.vercel.app/send-otp", { 
                phone: phoneWithCountryCode
            });
            
            if (response.data.success) {
                localStorage.setItem("phone", phone); // save number without country code
                setShowOtp(true);
                
                // Show appropriate message based on response
                if (response.data.message && response.data.message.includes("Mock OTP")) {
                    alert("Development Mode: Mock OTP generated! Check the backend console for the OTP code.");
                } else if (response.data.message && response.data.message.includes("fallback")) {
                    alert("Network issue detected. Fallback OTP generated! Check the backend console for the OTP code.");
                } else {
                    alert("OTP sent successfully to your mobile number!");
                }
            } else {
                alert("Failed to send OTP: " + response.data.message);
            }

        } catch (error) {
            console.error("OTP Error:", error);
            if (error.response && error.response.data && error.response.data.message) {
                alert("Error sending OTP: " + error.response.data.message);
            } else {
                alert("Error sending OTP: " + error.message);
            }
        }
    }

    return (
        <>

            <div className="container Hero2  text-center  ">
                <h1 className="opacity fs-3">Open a free demat and trading account online</h1>
                <p className=" text-muted fs-5 mt-4 ">Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
                <div className="row   top1  margin ">

                    <div className="col-md-6   ">
                        <img src="public\media\account_open.svg" alt="" className="img-fluid img " />
                    </div>
                    {/* <div className="col-1"></div> */}
                    <div className="col-md-6  application   mt-5">
                        <h1 className="text-start fs-4 opacity">Signup now</h1>
                        <p className="text-start text-muted">Or track your existing application</p>
                        <div class="mobile-input trading">
                            <span class="country-code">
                                <img src="public\media\india-flag.svg" alt="India Flag" />&nbsp; +91

                            </span>

                            <input type="number" autoFocus="" id="number" name="number" placeholder="Enter your mobile number " value={phone} onChange={(e) => setphone(e.target.value)} required />
                        </div>
                        <div className="text-start ">
                            <button className="otp-btn btn btn-position btn-color  opacity   fs-5  rounded-1   custom-hover trading" style={{ width: "255px", height: "50px" }} onClick={sendOtp}>Get OTP</button>
                        </div>
                        {showOtp && <Otp />}

                        <p className="font-size3 text-start ">By proceeding, you agree to the Zerodha <a className="text-decoration-none" href="">terms</a> & <a href="" className="text-decoration-none">privacy policy</a></p>



                    </div>



                </div>
            </div>
        </>
    );
}

export default Trading;
