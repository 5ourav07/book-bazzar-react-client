import React from 'react';

const goBack = () => window.history.back();

const NotFound = () => (
    <div className='flex h-screen justify-center items-center bg-black '>
        <button onClick={goBack} className='btn btn-primary' to='/'>Page Not Found! Go Back</button>
    </div>
);

export default NotFound;