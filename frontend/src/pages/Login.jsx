import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { endpoints, APP_BASE_URL } from "../config";

const Login = () => {
    const [input, setinput] = useState({
        email: "",
        password: ""
    });

    const { email, password } = input;

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
    };

    const handleSuccess = (message) => {
        toast.success(message, {
            position: "bottom-left",
        });
    };

    const handleGoogle = () => {
        window.location.href = endpoints.oauthGoogle;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(endpoints.login, { ...input }, { withCredentials: true });
            if (data.success) {
                handleSuccess(data.message || "Login successful");
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    if (data.redirectUrl) {
                        window.location.href = data.redirectUrl;
                        return;
                    }
                    if (APP_BASE_URL) {
                        window.location.href = `${APP_BASE_URL}/?token=${data.token}`;
                        return;
                    }
                }
                // If backend didn't return token, don't append null; ask user to try Google or check creds
                handleError("No token received. Try Google login or sign up again.");
            } else {
                handleError(data.message || "Login failed");
            }
        } catch (error) {
            handleError(error.response?.data?.message || error.message);
        }
    };

    return (
        <>
            <div className=" container container-signup container-login auth-center-login">
                <div className="signup-form login-form">
                    <div className="form">
                        <h3>Welcome back</h3>
                        <p>Enter your credentials to sign in</p>
                        <div className='d-flex justify-content-between gap-3'>
                            <button className='text-center btn btn-primary github'>GitHub</button>
                            <button className='google text-center btn btn-primary' onClick={handleGoogle}>Google</button>
                        </div>
                        <div className="divider mt-3">
                            <span>OR CONTINUE WITH</span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-2">
                                <label htmlFor="loginEmail" className="form-label label-input">Email address</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    className="form-control input-field"
                                    id="loginEmail"
                                    onChange={handleOnchange}
                                    required
                                />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="loginPassword" className="form-label label-input">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    className="form-control input-field"
                                    id="loginPassword"
                                    onChange={handleOnchange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4 create-account">Login</button>
                        </form>
                        <p className='mt-3'>Don't have an account?&nbsp; <Link to={"/signup_auth"}>Create one</Link></p>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
};

export default Login;


