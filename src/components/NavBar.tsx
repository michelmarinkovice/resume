'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'
import "../styles/globals.css";

const NavBar = () => {
  const pathname = usePathname()
  const [theme , setTheme] = useState('dark')

  return (
    <nav>
      <div className='bg-navbar-color'>
        <ul className='flex flex-row items-center gap-10 p-4 color-white text-xl text-white'>
          <li className={pathname === '/home' ? 'bg-lightcoral' : ''}>
              <Link href="/home">
                <p className=''>Home</p>
              </Link>
          </li>
          <li className={pathname === '/about-me' ? 'bg-lightcoral' : ''}>
              <Link href="/about-me">
                <p>About me</p>
              </Link>
          </li>
          <li className={pathname === '/experience' ? 'bg-lightcoral' : ''}>
            <Link href="/experience">
              <p>Experience</p>
            </Link>
          </li>
          <div className='flex flex-row'>
            <li className='justify-items-end'>
              <button onClick={() => {console.log('light')}}>
                <svg className="h-6 w-6 sun"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  strokeWidth="1.0"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="5" />  <line x1="12" y1="1" x2="12" y2="3" />  <line x1="12" y1="21" x2="12" y2="23" />  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />  <line x1="1" y1="12" x2="3" y2="12" />  <line x1="21" y1="12" x2="23" y2="12" />  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
              </button>
            </li>
            <li className='justify-items-end'>
              <button onClick={() => {console.log('dark')}}>
                <svg className="h-6 w-6 moon"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.0" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" /></svg>
              </button>
            </li>
          </div>
          
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;