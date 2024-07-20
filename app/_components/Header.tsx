'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Menu } from 'lucide-react'

function Header() {

    const path = usePathname();
    const { user, isSignedIn } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='p-3 bg-slate-100 flex flex-row items-center justify-between shadow-sm shadow-slate-200 relative'>
            <div className='flex flex-row gap-2 items-center text-[18px] md:text-[20px] lg:text-[24px]'>
                <Link href="/">
                    <Image 
                        src="/logo.svg"
                        alt="PrepAI"
                        width={28}
                        height={28}
                        className='object-contain'
                    />
                </Link>
                <h1 className='font-semibold'>Prep<span className='text-blue-500 font-bold'>AI</span></h1>
            </div>
            <div className='md:hidden flex justify-center'>
                <button onClick={toggleMenu}>
                    <Menu size={20} />
                </button>
            </div>
            <div className={`z-10 text-[12px] mt-2 mr-2 absolute bg-slate-200 md:bg-transparent top-14 right-0 w-36 rounded-lg shadow-lg transition-all duration-300 ease-out transform ${isMenuOpen ? 'block opacity-100 scale-100' : 'hidden opacity-0 scale-95'} md:relative md:top-0 md:w-auto md:flex md:flex-row md:gap-6 md:shadow-none md:opacity-100 md:scale-100`}>
                {isSignedIn ? (
                    <>
                        <div className='flex flex-col md:items-center md:flex-row gap-6 md:text-[14px] lg:text-[16px] p-4 md:p-0'>
                            <Link href="/dashboard" onClick={closeMenu}>
                                <h3 className={`hover:text-blue-500 hover:font-bold hover:scale-105 cursor-pointer transition-all ${path == '/dashboard' && 'text-blue-500 font-bold'}`}>Dashboard</h3>
                            </Link>
                            <Link href="/features" onClick={closeMenu}>
                                <h3 className={`hover:text-blue-500 hover:font-bold hover:scale-105 cursor-pointer transition-all ${path == '/features' && 'text-blue-500 font-bold'}`}>Features</h3>
                            </Link>
                            <Link href="/about" onClick={closeMenu}>
                                <h3 className={`hover:text-blue-500 hover:font-bold hover:scale-105 cursor-pointer transition-all ${path == '/about' && 'text-blue-500 font-bold'}`}>About</h3>
                            </Link>
                        </div>
                        <div className='flex items-center gap-3 pl-3 py-2 md:mr-5'>
                            <UserButton />
                            <p className='md:hidden text-blue-800 font-bold'>You :)</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='flex flex-col items-center md:flex-row gap-6 md:text-[14px] lg:text-[16px] p-4 md:p-0'>
                            <Link href="/features" onClick={closeMenu}>
                                <h3 className={`hover:text-blue-500 hover:font-bold hover:scale-105 cursor-pointer transition-all ${path == '/features' && 'text-blue-500 font-bold'}`}>Features</h3>
                            </Link>
                            <Link href="/about" onClick={closeMenu}>
                                <h3 className={`hover:text-blue-500 hover:font-bold hover:scale-105 cursor-pointer transition-all ${path == '/about' && 'text-blue-500 font-bold'}`}>About</h3>
                            </Link>
                        </div>
                        <div className='flex items-center justify-center text-[12px] md:text-[14px] lg:text-[16px] p-2 md:p-0'>
                            <Link href="/sign-up" onClick={closeMenu}>
                                <button className='px-4 py-2 rounded-full bg-blue-500 text-slate-100 hover:bg-blue-600 transition-colors'>Get Started</button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header
