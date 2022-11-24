import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Fragment>
            <div className="hero flex h-screen justify-center items-center bg-black">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 shadow-2xl bg-white">
                        <h1 className="text-center text-black text-3xl font-bold mt-3">Login</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label mt-2">
                                    <Link to='/signup' className="label-text-alt link link-hover">
                                        Don't Have an Account? Sign Up Here
                                    </Link>
                                </label>
                            </div>

                            <div className="form-control">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <div className="divider text-black">OR</div>

                            <div className="form-control">
                                <button className="btn btn-danger">Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;