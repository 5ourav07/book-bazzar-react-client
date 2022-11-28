import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BooksCard from './BooksCard';
import OrderModal from './OrderModal';

const Books = () => {
    const [bookDetails, setBookDetails] = useState(null);
    const { id } = useParams();

    const { data: books = [], refetch } = useQuery({
        queryKey: ['books', id],
        queryFn: async () => {
            const res = await fetch(`https://book-bazzar-server.vercel.app/books?category_id=${id}`)
            const data = await res.json()
            return data
        }
    });

    return (
        <div>
            <div className='grid gap-6 m-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    books.map(book => <BooksCard
                        key={book._id}
                        book={book}
                        setBookDetails={setBookDetails}
                    ></BooksCard>)
                }
            </div>
            {
                bookDetails &&
                <OrderModal
                    bookDetails={bookDetails}
                    setBookDetails={setBookDetails}
                    refetch={refetch}
                ></OrderModal>
            }
        </div>
    );
};

export default Books;