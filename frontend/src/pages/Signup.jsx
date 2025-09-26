import './Signup.css'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { endpoints, APP_BASE_URL } from "../config";
// import TextField from '@mui/material/TextField';
const Signup = () => {
    const handleLogin = () => {
        window.location.href = endpoints.oauthGoogle;
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
            const { data } = await axios.post(endpoints.signup, { ...input }, { withCredentials: true });



            const { success } = data;
            if (success) {
                handleSuccess(data.message);
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    if (APP_BASE_URL) {
                        window.location.href = `${APP_BASE_URL}/?token=${data.token}`;
                        return;
                    }
                }
                // If signup succeeded but token not returned, send to login page to continue
                window.location.href = "http://localhost:5173/login";
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