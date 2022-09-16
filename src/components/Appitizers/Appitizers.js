import React, { useEffect, useState } from 'react';
import { useAppitizers } from '../../hooks/useAppitizers';
import Apitem from './Apitem/Apitem';

const Appitizers = () => {
    const [appitizers] = useAppitizers();

    return (
        <div className='grid grid-cols-3 gap-8 w-11/12 mx-auto'>
            {
                appitizers.map((item, index) => <Apitem
                    key={index}
                    item={item}
                ></Apitem>)
            }
        </div>
    );
};

export default Appitizers;