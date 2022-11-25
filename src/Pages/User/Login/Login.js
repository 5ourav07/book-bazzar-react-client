import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');

    const handleLogin = data => {
        console.log(data);
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

                    <button className='btn btn-outline w-full text-white'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;