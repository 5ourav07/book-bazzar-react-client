import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const OrderModal = ({ bookDetails, setBookDetails, refetch }) => {
    const { title, resale_price } = bookDetails;
    const { user } = useContext(AuthContext);

    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const bookTitle = form.bookTitle.value;
        const bookPrice = form.bookPrice.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const orderBooks = {
            bookTitle,
            bookPrice,
            name,
            email,
            phone,
            location
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderBooks)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setBookDetails(null);
                    toast.success('Booking confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })


    }

    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleOrder}>
                        <input type="text" name='bookTitle' defaultValue={title} disabled className="input input-bordered w-full" />
                        <input type="number" name='bookPrice' defaultValue={resale_price} disabled className="mt-3 input input-bordered w-full" />
                        <input type="text" name='name' disabled defaultValue={user?.displayName} className="mt-3 input input-bordered w-full" />
                        <input type="email" name='email' disabled defaultValue={user?.email} className="mt-3 input input-bordered w-full" />
                        <input type="number" name='phone' placeholder="Phone Number" className="mt-3 input input-bordered w-full" />
                        <input type="text" name='location' placeholder="Location" className="mt-3 input input-bordered w-full" />
                        <input type="submit" value="Submit" className="mt-3 text-white bg-black btn btn-ghost w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;