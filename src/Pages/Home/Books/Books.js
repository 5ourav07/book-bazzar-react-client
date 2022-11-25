import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BooksCard from './BooksCard';

const Books = () => {
    const [books, setBooks] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/books?category_id=${id}`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [id])

    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    books.map(book => <BooksCard
                        key={book._id}
                        book={book}
                    ></BooksCard>)
                }
            </div>
        </div>
    );
};

export default Books;