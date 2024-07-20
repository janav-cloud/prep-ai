import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <div className='bg-slate-900 p-2 flex items-center justify-between mt-auto'>
        <div className='flex items-center gap-2 ml-2'>
            <Link href="/">
                <Image 
                    src="/logo.svg"
                    alt="PrepAI"
                    width={28}
                    height={28}
                    className='object-contain mix-blend-lighten'
                />
            </Link>
            <h1 className='font-semibold text-blue-400'>Prep<span className='text-white font-bold'>AI</span></h1>
        </div>
        <div className='flex flex-col text-right'>
            <h3 className='text-gray-200 text-[12px] mr-2 font-medium'>Built on Next JS :)</h3>
            <p className='text-gray-300 text-[8px] mr-2'>Made by @janavdua7</p>
        </div>
    </div>
  );
}

export default Footer