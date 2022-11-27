import React from 'react';

const BooksCard = ({ book, setBookDetails }) => {
    const { image, title, condition, resale_price, original_price, years_of_use, seller_name, location } = book;

    return (
        <div>
            <div className="card card-side bg-slate-300 shadow-xl">
                <figure><img className='ml-5 rounded-lg' src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Resale Price: {resale_price}</p>
                    <p>Original Price: {original_price}</p>
                    <p>Used Years: {years_of_use}</p>
                    <p>Condition: {condition}</p>
                    <p>Seller's Name: {seller_name}</p>
                    <p>Pickup Location: {location}</p>
                    <div className="card-actions justify-end">
                        <label onClick={() => setBookDetails(book)} htmlFor="order-modal" className="btn btn-primary">Order Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;