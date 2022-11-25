import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ category }) => {
    const { _id, name, description } = category;

    return (
        <div>
            <div className="mx-8 mt-8 card card-compact bg-yellow-800 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center text-3xl">{name}</h2>
                    <p className='text-gray-200'>{description}</p>
                    <Link to={`/categories/${_id}`}>
                        <button className="mt-3 font-bold border border-neutral bg-black btn btn-ghost">See Books</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;