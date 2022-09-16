import React from 'react';
import { useDesart } from '../../hooks/useDesart';
import DesItem from './DesItem/DesItem';

const Desart = () => {

    const [desart] = useDesart();

    return (
        <div className='grid grid-cols-3 gap-8 w-11/12 mx-auto'>
            {
                desart.map((item, index) => <DesItem
                    key={index}
                    item={item}
                ></DesItem>)
            }
        </div>
    );
};

export default Desart;