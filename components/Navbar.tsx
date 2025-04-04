"use client";
import React from 'react';
import { SignedIn, SignedOut, SignUpButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  return (
    <nav className="flex h-16 bg-black text-white items-center justify-between px-8">
      <span>
        <img src="lgo.jpg" alt="Logo" width="55px"  />
      </span>
      <ul className="flex items-center justify-end gap-4 cursor-pointer">
        <li>Home</li>
        <li>Services</li>
      </ul>
      <div >
        <SignedOut>
          <div className='bg-white text-black rounded-lg p-1 font-medium'>
          <SignUpButton />
          </div>
         
          
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
