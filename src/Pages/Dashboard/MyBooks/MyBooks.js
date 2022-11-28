import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyBooks = () => {
    const [deleteBook, setDeleteBook] = useState(null);
    const { user } = useContext(AuthContext);

    const closeModal = () => {
        setDeleteBook(null);
    }

    const url = `http://localhost:5000/books/mybooks?name=${user?.displayName}`;

    const { data: books = [], isLoading, refetch } = useQuery({
        queryKey: ['books', user?.displayName],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteBook = book => {
        fetch(`http://localhost:5000/books/${book._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${book.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl text-center my-5'>My Books</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-4/5 mx-auto my-5">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Location</th>
                                <th>Condition</th>
                                <th>Seller Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map((book, i) =>
                                    <tr className='hover' key={book._id}>
                                        <th>{i + 1}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={book.image} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{book.title}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{book.resale_price}</td>
                                        <td>{book.location}</td>
                                        <td>{book.condition}</td>
                                        <td>{book.seller_name}</td>
                                        <td>
                                            <button className='btn btn-xs bg-blue-400 mr-3'>Advertise</button>
                                            <label onClick={() => setDeleteBook(book)} htmlFor="confirmation-modal" className='btn btn-xs bg-red-600'>Delete</label>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                {
                    deleteBook && <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deleteBook.title}. It cannot be undone.`}
                        successAction={handleDeleteBook}
                        successButtonName="Delete"
                        modalData={deleteBook}
                        closeModal={closeModal}
                    >
                    </ConfirmationModal>
                }
            </div>
        </div>
    );
};

export default MyBooks;