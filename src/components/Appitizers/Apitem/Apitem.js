import React from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../../../hooks/useCart';

const Apitem = ({ item }) => {
    const { name, img, price } = item;
    const [cart] = useCart()

    const order = (selected) => {
        const check = cart.find(product => product._id === selected._id)
        if (check) {
            return toast('Already selected')
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(selected)
        })
        toast('Order successfull')
    }

    return (
        <div className='w-full my-8 '>
            <img className='hover:scale-105 ' src={img} alt="" />
            <p className='text-xl font-medium my-4'>{name}</p>
            <div className='flex justify-between'>
                <p className='font-medium'>Price: {price} $</p>
                <button className='py-1 hover:bg-submajor text-lg border bg-major px-5 float-right text-white' onClick={() => order(item)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Apitem;