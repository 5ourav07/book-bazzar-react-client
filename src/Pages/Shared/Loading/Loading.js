import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center">
            <div className="spinner-border animate-spin inline-block w-10 h-10 border-5 rounded-lg" role="status">
                <span className="visually-hidden">...</span>
            </div>
        </div>
    );
};

export default Loading;