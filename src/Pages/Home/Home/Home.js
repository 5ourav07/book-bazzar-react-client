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

            {/* Categories */}
            <div className="text-center text-white py-5">
                <h1 className='text-2xl lg:text-4xl font-bold'>Categories</h1>
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;