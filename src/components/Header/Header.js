import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom'
import auth from '../../firebase.int';

const Header = () => {
    const active = ({ isActive }) => {
        return {
            color: isActive ? 'black' : '',
        }
    }
    const [user] = useAuthState(auth)

    return (
        <div className='bg-submajor sticky top-0'>
            <nav className='w-11/12 mx-auto flex justify-between items-center h-20'>
                <div>
                    <NavLink to='/' className='text-2xl uppercase font-medium text-white'>
                        food court
                    </NavLink>
                </div>
                <div>
                    <NavLink style={active} className='ml-10 text-xl  text-white ' to='/home'>Home</NavLink>
                    <NavLink style={active} className='ml-10 text-xl  text-white' to='/appitizers'>Appitizers</NavLink>
                    <NavLink style={active} className='ml-10 text-xl  text-white' to='/maincourse'>Main Course</NavLink>
                    <NavLink style={active} className='ml-10 text-xl  text-white' to='/desart'>Desart</NavLink>
                    <NavLink style={active} className='ml-10 text-xl  text-white' to='/about'>About</NavLink>
                    {user ? <NavLink style={active} className='ml-10 text-xl  text-white border-2 p-2' onClick={() => signOut(auth)} >Sign out</NavLink> :
                        <NavLink style={active} className='ml-10 text-xl  text-white border-2 p-2' to='/signin'>Sign in</NavLink>
                    }
                </div>

            </nav>
        </div>
    );
};

export default Header;