import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppitizers } from '../../hooks/useAppitizers';
import Apitem from '../Appitizers/Apitem/Apitem';
import Banner from './Banner/Banner';

const Home = () => {
    const [appitizers] = useAppitizers()
    const navigate = useNavigate()


    return (
        <div>
            <Banner></Banner>
            <div className='w-11/12 mx-auto'>
                <h2 className='font-bold text-3xl my-8 px-5 py-1 text-major text-center'>Our delicious appitizers items</h2>
                <div className='grid grid-cols-3 gap-8 '>
                    {
                        appitizers.slice(0, 3).map((item, index) => <Apitem
                            key={index}
                            item={item}
                        ></Apitem>)
                    }
                </div>
                <div className='flex justify-center'>
                    <button onClick={() => navigate('/appitizers')} className='text-white bg-major my-5 text-xl px-8 py-2 hover:bg-submajor'>See all appitizers </button>
                </div>
            </div>

            <div className='w-11/12 mx-auto'>
                <h2 className='font-bold text-3xl my-8 px-5 py-1 text-major text-center'>Our delicious main course items</h2>
                <div className='grid grid-cols-3 gap-8 '>
                    {
                        appitizers.slice(0, 3).map((item, index) => <Apitem
                            key={index}
                            item={item}
                        ></Apitem>)
                    }
                </div>
                <div className='flex justify-center'>
                    <button onClick={() => navigate('/appitizers')} className='text-white bg-major my-5 text-xl px-8 py-2 hover:bg-submajor'>See all main course </button>
                </div>
            </div>

        </div>
    );
};

export default Home;