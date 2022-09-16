import React, { useEffect, useState } from 'react';
import Apitem from './Apitem/Apitem';

const Appitizers = () => {

    const [appitizers, setAppitizers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/appitizers')
            .then(res => res.json())
            .then(data => setAppitizers(data))
    }, [])
    console.log(appitizers);
    return (
        <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto'>
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