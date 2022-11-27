import React from 'react';

const AddBookCard = ({ category }) => {
    const { _id } = category;
    return (
        <div>
            <h1>{_id}</h1>
        </div>
    );
};

export default AddBookCard;