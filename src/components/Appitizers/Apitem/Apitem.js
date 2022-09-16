import React from 'react';


const Apitem = ({ item }) => {
    console.log(item);
    const { _id, name, img, description, price } = item;

    return (
        <div className=''>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{price}</p>
            <p>{description}</p>

        </div>
    );
};

export default Apitem;