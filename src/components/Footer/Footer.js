import React from 'react';

const Footer = () => {
    const today = new Date().getFullYear()
    const handleSubmit = (event) => {
        event.preventDefault()

    }

    return (
        <div className='bg-major'>
            <div className='w-11/12 mx-auto py-12 grid grid-cols-3'>
                <div className='flex items-center'>
                    <p className='text-white' >Food Court &copy; all copyrights {today}</p>
                </div>
                <div>
                    <h2 className='text-white text-xl font-semibold'>Join with us</h2>
                    <form onSubmit={handleSubmit} >
                        <input className='block my-4 p-2 w-full' type="email" placeholder='Email' />
                        <textarea className='block w-full p-2 my-4' type="text" placeholder=' Comments' />
                        <input className='py-1 hover:bg-submajor text-lg  border bg-major px-5 text-white' type="submit" value="Subscribe" />
                    </form>
                </div>
                <div className='flex justify-end items-center gap-8 text-white '>
                    <p>Facebook</p>
                    <p>Youtube</p>
                    <p>Google</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;