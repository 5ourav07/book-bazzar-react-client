import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/orders?email=${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-3xl text-center my-5'>My Orders</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-4/5 mx-auto my-5">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, i) =>
                                    <tr className='hover' key={order._id}>
                                        <th>{i + 1}</th>
                                        <td>{order.bookTitle}</td>
                                        <td>{order.bookPrice}</td>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.location}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;