// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function verifyOTP() {
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState("");
//   const phone = localStorage.getItem("phone");
  
//   const handleVerifyOTP = async () => {
//     try {
//       const res = await axios.post("http://localhost:3001/verify-otp", { phone, code: otp });
//       if (res.data.success) {
//         navigate("/support");
//       } else {
//         alert("Invalid OTP");
//       }
//     } catch (error) {
//       console.error('OTP verification failed:', error.message);
//       alert("OTP verification failed: " + error.message);
//     }
//   };

//   return (
//     <div className="container text-center mt-5">
//       <h2>Verify OTP</h2>
//       <p>Enter the OTP sent to {phone}</p>
//       <div className="mt-4">
//         <input 
//           type="text" 
//           value={otp} 
//           onChange={(e) => setOtp(e.target.value)}
//           placeholder="Enter OTP"
//           className="form-control mb-3"
//           style={{ maxWidth: "300px", margin: "0 auto" }}
//         />
//         <button 
//           onClick={handleVerifyOTP}
//           className="btn btn-primary"
//           style={{ width: "200px" }}
//         >
//           Verify OTP
//         </button>
//       </div>
//     </div>
//   );
// }
