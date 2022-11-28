import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItems = () => {
    const { data: reports = [] } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch('https://book-bazzar-server.vercel.app/reportedItems');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h1 className='text-3xl text-center my-5'>Reported Items</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-4/5 mx-auto my-5">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Condition</th>
                                <th>Seller's Name</th>
                                <th>User's Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reports.map((report, i) => <tr key={report._id}>
                                    <th>{i + 1}</th>
                                    <td>{report.title}</td>
                                    <td>{report.resale_price}</td>
                                    <td>{report.condition}</td>
                                    <td>{report.seller_name}</td>
                                    <td>{report.user_name}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReportedItems;