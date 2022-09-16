import React from 'react';

const CartList = ({ product }) => {
    const remove = (selected) => {
        fetch('http://localhost:5000/orders', {
            method: 'DELETE',
            body: JSON.stringify(selected)
        })
    }

    return (
        <div className='grid grid-cols-2 my-5'>
            <div className='grid grid-cols-2 gap-6'>
                <div>
                    <img className='w-full ' src={product.img} alt="" />
                </div>
                <div className='text-lg font-medium leading-10'>
                    <p>{product.name}</p>
                    <p>Price : {product.price} $</p>
                </div>
            </div>
            <div className='flex items-center justify-end'>
                <button className='py-1 hover:bg-submajor text-lg border bg-major px-5 float-right text-white' onClick={() => remove(product)}>Remove</button>
            </div>
        </div>
    );
};

export default CartList;