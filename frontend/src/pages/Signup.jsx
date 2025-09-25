import './Signup.css'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import TextField from '@mui/material/TextField';
const Signup = () => {
    const handleLogin = () => {
        const apiBase = (import.meta.env.VITE_API_BASE_URL) || (window.location.hostname === "localhost" ? "http://localhost:3001" : "https://zerodha-snippet-new-backend.vercel.app");
        const redirectUrl = `${apiBase}/api/v1/user/google`;
        window.location.href = redirectUrl;

    };
    // const navigate = useNavigate();
    const [input, setinput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const { firstName, lastName, email, password } = input;
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setinput({
            ...input,
            [name]: value,
        });
    };
    const handleError = (error) => {
        toast.error(error, {
            position: "bottom-right",
        });
    }

    const handleSuccess = (message) => {
        toast.success(message, {
            position: "bottom-left"
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiBase = (import.meta.env.VITE_API_BASE_URL) || (window.location.hostname === "localhost" ? "http://localhost:3001" : "https://zerodha-snippet-new-backend.vercel.app");
            const { data } = await axios.post(`${apiBase}/api/v1/user/signup`, { ...input }, { withCredentials: true });



            const { success } = data;
            if (success) {
                localStorage.setItem("token", data.token);

                // Yaha check karo token null hai ya kuch aur
                const storedToken = localStorage.getItem("token");
                if (storedToken) {
                    console.log(" Token stored successfully:", storedToken);
                } else {
                    console.log("Token is null");
                }


                handleSuccess(data.message);


                window.location.href = data.redirectUrl;
            }
            else {
                handleError(data.message);
                console.log(data.message);
                

            }
        } catch (error) {
            console.log(error);
        }

        setinput({
            ...input,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        });
    };
    return (
        <>
            <div className="container container-signup d-flex justify-content-center">
                <div className="signup-form     ">

                    <div className='form ' >
                        <h3 className=''>Create an  account</h3>
                        <p className=''>Enter your email below to create your account</p>

                        <div className='d-flex justify-content-between gap-3'>
                            <button className=' text-center btn btn-primary  github' >GitHub</button>
                            <button className='google text-center btn btn-primary ' onClick={handleLogin}>Google</button>
                        </div>


                        <div className="divider mt-3">
                            <span>OR CONTINUE WITH</span>
                        </div>
                        <form onSubmit={handleSubmit} >
                            <div className="mt-2 d-flex gap-3 justify-content-between">
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label label-input">First Name</label>
                                    <input type="text"
                                        name="firstName"
                                        value={firstName}
                                        className="form-control input-field"
                                        id="exampleInputfirstName"
                                        aria-describedby="nameHelp"
                                        onChange={handleOnchange}
                                        required />
                                </div>

                                <div>
                                    <label
                                        htmlFor="exampleInputName"
                                        className="form-label label-input">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={lastName}
                                        className="form-control input-field"
                                        id="exampleInputlastName"
                                        aria-describedby="nameHelp"
                                        onChange={handleOnchange}
                                        required />
                                </div>
                            </div>


                            <div className="mt-2">
                                <label htmlFor="exampleInputEmail1" className="form-label label-input">Email address</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    className="form-control input-field"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={handleOnchange}
                                    required />

                            </div>

                            <div class="mt-2">
                                <label htmlFor="exampleInputPassword1" className="form-label label-input">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    className="form-control input-field" id="exampleInputPassword1"
                                    onChange={handleOnchange}
                                    required />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4 create-account">Create account</button>

                        </form>

                        <p className='mt-3'>Already have an account?&nbsp; <Link to={"/login"}>Login</Link> </p>

                    </div>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
}

export default Signup;