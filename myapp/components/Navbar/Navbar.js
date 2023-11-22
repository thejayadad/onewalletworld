'use client'
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import AuthLinks from './AuthLinks';

const Navbar = () => {
  return (
    <header className='px-4 py-8'>
      <div className='flex justify-between '>
        <div className='flex items-center'>
            <Logo />
          <div className='hidden  lg:flex lg:flex-row gap-6 ml-6'>
            <Link href='/'>Home</Link>
            <Link href='/gallery'>Gallery</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </div>
        </div>
        <AuthLinks />
      </div>
    </header>
  );
};

export default Navbar;
