import React, { useState } from 'react';
import Axios from 'axios';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    Axios.get('categoriesData.json')
        .then(
            (res) => {
                setCategories(res.data);
            }
        );

    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <CategoriesCard
                        key={category.id}
                        category={category}
                    ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;