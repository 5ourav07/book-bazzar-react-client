import React from 'react';

const BooksCard = ({ book, setBookDetails }) => {
    const { image, title, location, resale_price, original_price, years_of_use, seller_name } = book;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{location}</p>
                    <p>{resale_price}</p>
                    <p>{original_price}</p>
                    <p>{years_of_use}</p>
                    <p>{seller_name}</p>
                    <div className="card-actions justify-end">
                        <label onClick={() => setBookDetails(book)} htmlFor="order-modal" className="btn btn-primary">Order Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;