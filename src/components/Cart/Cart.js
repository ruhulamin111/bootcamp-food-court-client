import React from 'react';
import { useCart } from '../../hooks/useCart';

const Cart = () => {
    const [order] = useCart()

    return (
        <div>
            <h2>cart {order.length}</h2>

        </div>
    );
};

export default Cart;