import React, { Fragment, useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Report = () => {
    const goBack = () => window.history.back();
    const { user } = useContext(AuthContext);
    const { title, resale_price, condition, seller_name } = useLoaderData();

    const onSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const resalePrice = form.resalePrice.value;
        const condition = form.condition.value;
        const sellerName = form.seller_name.value;
        const userName = form.userName.value;

        const reportData = {
            title,
            resale_price: resalePrice,
            condition,
            seller_name: sellerName,
            user_name: userName
        }

        fetch('https://book-bazzar-server.vercel.app/books/report', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Reported Done');
                    <button onClick={goBack} className='btn btn-primary' to='/'>Go Back</button>
                }
                else {
                    toast.error(data.message);
                }
            })
    };

    return (
        <Fragment>
            <div className='flex justify-center my-10'>
                <div className='w-1/2 border border-black rounded-lg p-5'>
                    <h2 className='text-3xl mb-5 text-center font-bold'>Report</h2>
                    <form onSubmit={onSubmit}>
                        <div className="form-control w-full">
                            <input disabled name='title' defaultValue={title} type="text" className="input input-bordered w-full my-3" />
                        </div>

                        <div className="form-control w-full">
                            <input disabled name='resalePrice' defaultValue={resale_price} type="number" className="input input-bordered w-full my-3" />
                        </div>

                        <div className="form-control w-full">
                            <input disabled name='condition' defaultValue={condition} type="text" className="input input-bordered w-full my-3" />
                        </div>
                        <div className="form-control w-full">
                            <input disabled name='seller_name' defaultValue={seller_name} type="text" className="input input-bordered w-full my-3" />
                        </div>

                        <div className="form-control w-full">
                            <input name='userName' disabled defaultValue={user?.displayName} type="text" className="input input-bordered w-full my-3"
                            />
                        </div>

                        <input className='btn btn-square w-full my-3' value="Report" type="submit" />
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Report;