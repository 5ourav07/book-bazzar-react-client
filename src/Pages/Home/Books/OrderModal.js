import React from 'react';

const OrderModal = ({ bookDetails }) => {
    const { title, resale_price } = bookDetails;
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <input type="text" defaultValue={title} disabled placeholder="Name" className="input input-bordered w-full" />
                    <input type="text" defaultValue={resale_price} disabled placeholder="Name" className="mt-3 input input-bordered w-full" />
                    <form>
                        <input type="text" disabled placeholder="Name" className="mt-3 input input-bordered w-full" />
                        <input type="email" disabled placeholder="Email" className="mt-3 input input-bordered w-full" />
                        <input type="number" placeholder="Phone Number" className="mt-3 input input-bordered w-full" />
                        <input type="text" placeholder="Location" className="mt-3 input input-bordered w-full" />
                        <input type="submit" value="Submit" className="mt-3 text-white bg-black btn btn-ghost w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;