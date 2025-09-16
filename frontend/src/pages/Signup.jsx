import './Signup.css'
import { Link } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
const Signup = () => {

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="signup-form     ">

                    <form className='form '>
                        <h3 className=''>Create an  account</h3>
                        <p className=''>Enter your email below to create your account</p>

                        <div className='d-flex justify-content-between gap-3'>
                            <button className=' text-center btn btn-primary  github' >GitHub</button>
                            <button className='google text-center btn btn-primary '>Google</button>
                        </div>
                      

                        <div className="divider mt-3">
                            <span>OR CONTINUE WITH</span>
                        </div>
                        <div className="mt-2 d-flex gap-3 justify-content-between">
                            <div>
                            <label for="exampleInputName" class="form-label label-input">First Name</label>
                            <input type="Name" class="form-control input-field" id="exampleInputName" aria-describedby="nameHelp" required/>
                            </div>

                            <div>
                            <label for="exampleInputName" class="form-label label-input">Second Name</label>
                            <input type="Name" class="form-control input-field" id="exampleInputName" aria-describedby="nameHelp" required/>
                            </div>
                        </div>

                        <div className="mt-2">
                            <label for="exampleInputEmail1" class="form-label label-input">Email address</label>
                            <input type="email" class="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" required/>

                        </div>

                        <div class="mt-2">
                            <label for="exampleInputPassword1" class="form-label label-input">Password</label>
                            <input type="password" class="form-control input-field" id="exampleInputPassword1"required />
                        </div>
                        <button type="submit" className="btn btn-primary mt-4 create-account">Create account</button>

                        <p className='mt-3'>Already have an account?&nbsp; <Link to={"/login"}>Login</Link> </p>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;