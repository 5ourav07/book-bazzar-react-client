import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data
        }
    });

    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <CategoriesCard
                        key={category._id}
                        category={category}
                    ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;