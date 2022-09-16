import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.int';


const Signin = () => {
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
        event.target.resent()
        navigate(from, { replace: true })
    }

    const googleSignin = () => {
        signInWithGoogle()
    }

    return (
        <div className='w-6/12 mx-auto bg-minor p-8 my-8'>
            <h2 className='text-center font-semibold text-3xl'>Sing in </h2>
            <form onSubmit={handleSubmit} >
                <input name='email' className='block my-6 p-3 w-3/4 mx-auto' type="text" placeholder='Email' required />
                <input name='password' className='block my-6 p-3 w-3/4 mx-auto' type="password" placeholder='Password' required />
                <input className='block my-6 p-3 w-3/4 mx-auto text-white font-semibold text-lg cursor-pointer bg-major hover:bg-submajor' type="submit" value="Sign in" />
            </form>
            <div className='w-3/4 mx-auto flex justify-between'>
                <p className=' font-medium'>New at food court? <Link to='signup' className='text-green'> Sign up</Link></p>
                <p><span className='text-green cursor-pointer font-medium'>Forgot password</span></p>
            </div>
            <div className='flex items-center w-3/4 mx-auto gap-4'>
                <div className='w-full bg-black' style={{ height: '1px' }}></div>
                <span className='text-lg'>Or</span>
                <div className='w-full bg-black' style={{ height: '1px' }}></div>
            </div>
            <div>
                <button onClick={googleSignin} className='block my-6 p-3 w-3/4 mx-auto text-major bg-white font-semibold text-lg cursor-pointer border-2 border-major hover:text-white hover:bg-major' type="submit" value="Sign in" >Continue with google</button>
            </div>

        </div>
    );
};

export default Signin;