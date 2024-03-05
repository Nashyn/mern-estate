// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <header className='bg-slate-300 shadow-md'>
      
     <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
     <Link to='/'>
     <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
      <span className='text-slate-800'>Real</span>
      <span className='text-slate-700'>Estate</span>
      </h1>
      </Link>
      <form>
        <input type='text' placeholder='searchbar...' className='bg-transparent focus:outline-none w-24 sm:2-64'/>
        <SearchIcon className='text-slate-700'></SearchIcon>
      </form>
      <ul className='flex gap-4'>
        <Link to='/'>
        <li className='hidden sm:inline text-slate-700 hover:underline
        '>Home</li>
        </Link>
        <Link to='/about'>
        <li className='hidden sm:inline text-slate-700 hover:underline
        '>About</li>
        </Link>
        <Link to='sign-in'>
        <li className=' text-slate-700 hover:underline
        '>SignIn</li>
        </Link>
      </ul>
     </div>
    </header>
  )
}
