import React, { useEffect, useState } from 'react';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviewsData.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <ReviewsCard
                        key={review._id}
                        review={review}
                    >
                    </ReviewsCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;