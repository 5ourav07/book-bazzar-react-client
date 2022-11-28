import React, { useEffect, useState } from 'react';
import axios from "axios";
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    const [categories, setCategories] = useState(null);

    const url = 'http://localhost:5000/categories';

    useEffect(() => {
        axios.get(url).then((response) => {
            setCategories(response.data);
        });
    }, []);

    if (!categories) return null;

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