import React from 'react';

const MainItem = ({ item }) => {
    const { _id, name, img, description, price } = item;

    return (
        <div className='w-full my-8 '>
            <img className='hover:scale-105 ' src={img} alt="" />
            <p className='text-xl font-medium my-4'>{name}</p>
            <div className='flex justify-between'>
                <p className='font-medium'>Price: {price} $</p>
                <button className='py-1 hover:bg-submajor text-lg  border bg-major px-5 float-right text-white'>Details</button>
            </div>
        </div>
    );
};

export default MainItem;