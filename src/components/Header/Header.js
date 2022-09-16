import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    const active = ({ isActive }) => {
        return {
            color: isActive ? 'black' : '',
        }
    }

    return (
        <div className='bg-submajor'>
            <nav className='w-11/12 mx-auto flex justify-between items-center h-20'>
                <div>
                    <h3 className='text-3xl uppercase font-bold text-white	'>food court </h3>
                </div>
                <div>
                    <NavLink style={active} className='ml-10 text-xl font-medium text-white' to='/home'>Home</NavLink>
                    <NavLink style={active} className='ml-10 text-xl font-medium text-white' to='/appitizers'>Appitizers</NavLink>
                    <NavLink style={active} className='ml-10 text-xl font-medium text-white' to='/maincourse'>Main Course</NavLink>
                    <NavLink style={active} className='ml-10 text-xl font-medium text-white' to='/desart'>Desart</NavLink>
                    <NavLink style={active} className='ml-10 text-xl font-medium text-white' to='/about'>About</NavLink>
                    <NavLink style={active} className='ml-10 text-xl font-medium text-white' to='/signin'>Sign in</NavLink>
                </div>

            </nav>
        </div>
    );
};

export default Header;