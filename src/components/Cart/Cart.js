import React from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../../hooks/useCart';
import CartList from './CartList/CartList';

const Cart = () => {
    const [order] = useCart()
    const confirmOrder = () => {
        // const confirm = order.map(product => product)
        fetch('http://localhost:5000/orders', {
            method: 'DELETE',
            body: JSON.stringify(order)
        })
        toast('Successfully order confirmed')
    }

    return (
        <div className='w-11/12 mx-auto'>
            <div>
                {
                    order.map((product, index) => <CartList
                        key={index}
                        product={product}
                    ></CartList>)
                }
            </div>
            <div className='flex justify-center my-5'>
                <button className='py-1 hover:bg-submajor text-lg border bg-major px-5  text-white' onClick={confirmOrder}>Confirm Order</button>
            </div>
        </div>
    );
};

export default Cart;