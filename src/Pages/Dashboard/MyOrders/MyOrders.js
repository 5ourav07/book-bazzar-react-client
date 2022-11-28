import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `https://book-bazzar-server.vercel.app/orders?email=${user?.email}`;

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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, i) =>
                                    <tr className='hover' key={order._id}>
                                        <th>{i + 1}</th>
                                        <td>{order.bookTitle}</td>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.location}</td>
                                        <td>
                                            {
                                                order.bookPrice && !order.paid &&
                                                <Link to={`/dashboard/myorders/payment/${order._id}`}>
                                                    <button className='btn btn-primary btn-sm'>Pay</button>
                                                </Link>
                                            }
                                            {
                                                order.bookPrice && order.paid && <span className='text-green-500'>Paid</span>
                                            }
                                        </td>

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