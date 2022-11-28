import React, { Fragment, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../../Hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { login, googleSignup } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleGoogleSignIn = () => {
        googleSignup(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleLogin = (data) => {
        setLoginError('');

        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(data.email);
                toast('Login Successful')
            })
            .catch(error => {
                setLoginError(error.message);
            });
    }

    return (
        <Fragment>
            <div className='pt-20 flex justify-center items-center bg-black'>
                <div className='border border-white mb-8 p-16'>
                    <h2 className='text-5xl text-white mb-8 text-center'>Login</h2>

                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full">
                            <input placeholder='Email' type="email"
                                {...register("email", {
                                    required: "Your Email Address is Required"
                                })}
                                className="input input-bordered w-full my-3" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <input placeholder='******' type="password"
                                {...register("password", {
                                    required: "Your Password is Required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                })}
                                className="input input-bordered w-full my-3" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>

                        <input className='btn btn-outline w-full my-3 text-white' value="Login" type="submit" />
                        <div>
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>
                    </form>

                    <p className='text-white'>
                        Don't have an account? <Link className='text-secondary' to="/signup">Sign Up Here</Link>
                    </p>

                    <div className="divider text-white">OR</div>

                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full text-white'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;