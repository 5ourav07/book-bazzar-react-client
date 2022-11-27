import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AddBookCard from './AddBookCard';

const AddBook = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data;
        }
    });

    return (
        <div>
            <h1>Add A Book</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <AddBookCard
                        key={category._id}
                        category={category}
                    ></AddBookCard>)
                }
            </div>
        </div>
    );
};

export default AddBook;