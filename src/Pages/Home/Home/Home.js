import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="top-banner">
            <div className="text-center text-white py-5">
                <h1 className='text-4xl lg:text-7xl font-bold mt-36'>Welcome to <span className='text-red-400'>Book Bazzar</span></h1>
                <p className='text-2xl lg:text-3xl text-gray-400 font-bold pt-7'>Happy Reading</p>
            </div>
        </div>
    );
};

export default Home;