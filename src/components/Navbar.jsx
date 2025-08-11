import React from 'react'
import logo from '../logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4 shadow-2xl '>
        <img className='w-[50px] ' src={logo} alt='Logo'/>

        <Link to='/' className='text-blue-700 text-3xl font-bold'>Movies</Link>
        <Link to='/watchlist' className='text-blue-700 text-3xl font-bold'>WatchList</Link>
    </div>
  )
}

export default Navbar