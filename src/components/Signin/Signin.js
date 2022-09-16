import React from 'react';

const Signin = () => {
    const handleSubmit = () => {

    }

    return (
        <div className='w-6/12 mx-auto bg-minor p-8 my-8'>
            <h2 className='text-center font-semibold text-3xl'>Sing in </h2>
            <form onSubmit={handleSubmit} >
                <input className='block my-6 p-3 w-3/4 mx-auto' type="text" placeholder='Email' required />
                <input className='block my-6 p-3 w-3/4 mx-auto' type="password" placeholder='Password' required />
                <input className='block my-6 p-3 w-3/4 mx-auto text-white font-semibold text-lg cursor-pointer bg-major hover:bg-submajor' type="submit" value="Sign in" />
            </form>
            <div className='flex items-center w-3/4 mx-auto gap-4'>
                <div className='w-full bg-black' style={{ height: '1px' }}></div>
                <span className='text-lg'>Or</span>
                <div className='w-full bg-black' style={{ height: '1px' }}></div>
            </div>
            <div>

            </div>

        </div>
    );
};

export default Signin;