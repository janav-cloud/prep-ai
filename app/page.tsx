import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function page() {

  return (
    <section className="p-5 flex flex-col-reverse justify-between items-center md:flex-row animate-move-in">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            <span className='text-blue-600'>Preparing to Impress?</span><br/>Prep<span className='text-blue-500'>AI</span> makes it easy :)
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Boost confidence with <span className='font-bold text-slate-900'>Prep<span className='text-blue-500'>AI</span></span>, your ultimate preparation partner for acing interviews and meetings!
          </p>
          <div className='flex flex-col md:flex-row gap-2'>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Start Prep!
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="/sign-in"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-slate-300 text-gray-900 border border-gray-300 rounded-lg hover:bg-slate-200 focus:ring-4 focus:ring-gray-100 hover:transition-all"
            >
              Already a User?
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4 md:hidden flex justify-center items-center w-64 h-64">
        <Image 
          src="/hero.svg"
          alt="PrepAI"
          height={300}
          width={300}
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default page