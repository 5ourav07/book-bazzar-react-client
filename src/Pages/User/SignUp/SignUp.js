import React, { Fragment, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signup, updateUserProfile, googleSignup } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignup(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleSignUp = (data) => {
        setSignUpError('');
        signup(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully')
                const profile = {
                    displayName: data.name
                }
                updateUserProfile(profile)
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => {
                setSignUpError(error.message);
            });
    }

    return (
        <Fragment>
            <div className='flex justify-center items-center bg-black'>
                <div className='border border-white px-20 py-8 mb-3'>
                    <h2 className='text-5xl text-white mb-6 text-center'>Sign Up</h2>

                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full">
                            <input placeholder='Full Name' type="text"
                                {...register("name", {
                                    required: "Your Full Name is Required"
                                })}
                                className="input input-bordered w-full my-3" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>

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

                        {/* <div className='border border-white rounded-lg my-3 px-3'>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text text-white">Buyer</span>
                                    <input {...register("Role", { required: true })} className="radio" type="radio" value="buyer" checked />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text text-white">Seller</span>
                                    <input {...register("Role", { required: true })} className="radio" type="radio" value="seller" />
                                </label>
                            </div>
                        </div> */}

                        <input className='btn btn-outline w-full my-3 text-white' value="Sign Up" type="submit" />
                        <div>
                            {signUpError && <p className='text-red-600'>{signUpError}</p>}
                        </div>
                    </form>

                    <p className='text-white'>
                        Already have an account? <Link className='text-secondary' to="/login">Login Here</Link>
                    </p>

                    <div className="divider text-white">OR</div>

                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full text-white'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </Fragment>
    );
};

export default SignUp;