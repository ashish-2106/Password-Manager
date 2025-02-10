"use client";
import { SignInButton } from '@clerk/nextjs';
import React from 'react';
import { Button } from './ui/button';
import { SignedIn, SignedOut, SignUpButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  return (
    <nav className="flex h-16 bg-black text-white items-center justify-between px-8">
      <span>
        <img src="lg.jpg" alt="Logo" width="50px"  />
      </span>
      <ul className="flex items-center justify-end gap-4 cursor-pointer">
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
      </ul>
      <div >
        <SignedOut>
          <div className='bg-white text-black rounded-lg p-1'>
          <SignInButton />
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
