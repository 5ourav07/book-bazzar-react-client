import React from 'react';
import Categories from '../Categories/Categories';
import './Home.css';

const Home = () => {
    return (
        <div className="banner">
            {/* Top Banner */}
            <div className="text-center text-white py-5">
                <h1 className='text-4xl lg:text-7xl font-bold mt-36'>Welcome to <span className='text-yellow-700'>Book Bazzar</span></h1>
                <p className='text-2xl lg:text-3xl text-gray-400 font-bold pt-7'>Happy Reading</p>
            </div>

            {/* Advertise */}
            <div className="text-center text-white py-20">
                <h1 className='text-2xl lg:text-4xl font-bold'>Advertise</h1>

            </div>

            {/* Categories */}
            <div className="text-center text-white py-20">
                <h1 className='text-2xl lg:text-4xl font-bold'>Categories</h1>
                <Categories></Categories>
            </div>

            {/* Contact Us */}
            <div className="text-center text-white py-10">
                <h1 className='text-2xl lg:text-4xl font-bold'>Contact Us</h1>
                <div className='flex justify-center py-5'>
                    <div className='text-black mx-5 w-full lg:w-1/2'>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full" />
                        <button className="btn btn-square rounded-lg my-1 w-full">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;