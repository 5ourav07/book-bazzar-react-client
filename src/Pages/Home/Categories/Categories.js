import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    // const [categories, setCategories] = useState([]);

    // Axios.get('http://localhost:5000/categories')
    //     .then(
    //         (res) => {
    //             setCategories(res.data);
    //         }
    //     );

    // useEffect(() => {
    //     fetch('http://localhost:5000/categories')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])

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