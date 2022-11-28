import React, { Fragment, useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddBook = () => {
    const { user } = useContext(AuthContext);

    const onSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const image = form.image.value;
        const title = form.title.value;
        const location = form.location.value;
        const resalePrice = form.resalePrice.value;
        const originalPrice = form.originalPrice.value;
        const used = form.used.value;
        const condition = form.condition.value;
        const sellerName = form.sellerName.value;

        const addBook = {
            category_id: category,
            image,
            title,
            location,
            resale_price: resalePrice,
            original_price: originalPrice,
            years_of_use: used,
            condition,
            seller_name: sellerName
        }

        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addBook)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Created confirmed');
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
                    <h2 className='text-3xl mb-5 text-center font-bold'>New Book</h2>
                    <form onSubmit={onSubmit}>
                        <div className='border border-black rounded-lg my-3 px-3'>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Humayun Ahmed</span>
                                    <input readOnly name='category' className="radio" type="radio" value="6380a8716da9ff020530d1cd" checked />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Muhammad Zafar Iqbal</span>
                                    <input readOnly name='category' className="radio" type="radio" value="6380a8716da9ff020530d1ce" checked />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Tin Goyenda</span>
                                    <input readOnly name='category' className="radio" type="radio" value="6380a8716da9ff020530d1cf" checked />
                                </label>
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <input name='image' placeholder='Image Link (ImgBB Direct Link)' type="text" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <input name='title' placeholder='Book Title' type="text" className="input input-bordered w-full my-3" />
                        </div>

                        <div className="form-control w-full">
                            <input name='location' placeholder='Location' type="text" className="input input-bordered w-full my-3" />
                        </div>

                        <div className="form-control w-full">
                            <input name='resalePrice' placeholder='Resale Price' type="number" className="input input-bordered w-full my-3" />
                        </div>

                        <div className="form-control w-full">
                            <input name='originalPrice' placeholder='Original Price' type="number" className="input input-bordered w-full my-3" />
                        </div>

                        <div className="form-control w-full">
                            <input name='used' placeholder='Years of Use' type="number" className="input input-bordered w-full my-3" />
                        </div>

                        <div className='border border-black rounded-lg my-3 px-3'>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Excellent</span>
                                    <input readOnly name='condition' className="radio" type="radio" value="Excellent" checked />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Good</span>
                                    <input readOnly name='condition' className="radio" type="radio" value="Good" checked />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Fair</span>
                                    <input readOnly name='condition' className="radio" type="radio" value="Fair" checked />
                                </label>
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <input name='sellerName' disabled defaultValue={user?.displayName} type="text" className="input input-bordered w-full my-3"
                            />
                        </div>

                        <input className='btn btn-square w-full my-3' value="Create" type="submit" />
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default AddBook;