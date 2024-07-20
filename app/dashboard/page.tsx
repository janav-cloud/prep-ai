import React from 'react'
import AddNew from './_components/AddNew'
import PrevInterviews from './_components/PrevInterviews'

function page() {
  return (
    <div>
      <div className='flex flex-col p-6'>
        <h2 className='text-blue-600 font-bold text-xl'>Dashboard</h2>
        <h2 className='text-slate-800 text-sm'>Create and start your prep!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 my-4">
          <AddNew/>
        </div>
        <div className="mt-5 flex flex-col gap-2">
        <h2 className='mb-2 text-blue-500 font-bold text-xl'>Recent Interviews</h2>
          <PrevInterviews/>
        </div>
      </div>
    </div>
  )
}

export default page