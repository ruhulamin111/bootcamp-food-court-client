import React from 'react';
import banner from '../../../assets/image/bn1.jpg'

const Banner = () => {
    return (
        <div className='bg-minor h-screen'>
            <div className=' w-11/12 mx-auto flex items-center justify-center'>
                <div className='p-2'>
                    <h2 className='text-5xl text-major font-bold uppercase mt-10 leading-snug	'>Best <span className='text-black'>Food Court</span><br /> in the city </h2>
                    <p className='leading-8 tracking-wider text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse labore harum distinctio adipisci, illo accusamus consequatur nemo unde ducimus quod.</p>
                    <button className='border-2 px-5 py-2 mt-10 hover:text-major'>Explore now</button>
                </div>
                <div className='w-full flex '>
                    <img className='object-cover rounded mt-10' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;