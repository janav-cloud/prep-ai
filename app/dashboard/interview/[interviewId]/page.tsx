'use client'

import { db } from '@/utils/db';
import { PrepAIMock } from '@/utils/schema';
import { eq } from 'drizzle-orm'
import { WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import Webcam from "react-webcam";

interface InterviewProps {
    params: {[key : string] : string};
}

function Interview({params}: InterviewProps) {

  const [interviewData, setInterviewData] = useState<any>();
  const [webCam, setWebCam] = useState(false);

  useEffect(()=>{
    getInterviewDetails();
  },[])

  const getInterviewDetails = async() => {
    try {
      const interviewDetails = await db.select().from(PrepAIMock).where(eq(PrepAIMock.interviewId, params.interviewId))
      if (interviewDetails) {
        console.log("Database entity of type "+PrepAIMock.interviewId+" fetched.")
        setInterviewData(interviewDetails[0]);
      } else {
        console.log("Database has no "+PrepAIMock.interviewId+" type entity.")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div className='p-5'>
      <div className='mt-3 flex flex-col items-center justify-center'>
        <h2 className='text-blue-600 text-3xl font-bold text-center underline underline-offset-4'>Let's Get Started!</h2>
      </div>
      <div className='mt-10 flex flex-col-reverse justify-center items-center gap-5 lg:flex-row lg:gap-64'>
        <div className='flex flex-col gap-2'>
          <div className=''>
            <h2 className='text-blue-500 font-bold text-lg md:text-xl'>Job Role/Job Position: </h2>
            <h3 className='bg-slate-300 rounded-lg p-2 text-sm md:text-md'>{interviewData && interviewData.jobPosition}</h3>
          </div>
          <div className=''>
            <h2 className='text-blue-500 font-bold text-lg md:text-xl'>Job Description: </h2>
            <h3 className='bg-slate-300 rounded-lg p-2 text-sm md:text-md'>{interviewData && interviewData.jobDesc}</h3>
          </div>
          <div className=''>
            <h2 className='text-blue-500 font-bold text-lg md:text-xl'>Years of Experience: </h2>
            <h3 className='bg-slate-300 rounded-lg p-2 text-sm md:text-md'>{interviewData && interviewData.jobExperience}</h3>
          </div>
        </div>
        <div id='webcam-container-div'>
          {webCam?
          <div className='flex flex-col gap-3'>
            <Webcam 
              onUserMedia={()=>setWebCam(true)}
              onUserMediaError={()=>setWebCam(false)}
              className='rounded-lg transition-all duration-150'
              width={320}
            />
            <button className='flex justify-center items-center bg-slate-300 hover:bg-gray-300 rounded-2xl transition-colors' onClick={()=>setWebCam(false)}>
              <span className='py-1 text-center text-sm'>
                Disable Camera
              </span>
            </button>
          </div>
          :
          <div className='rounded-lg bg-sky-200 flex flex-col justify-center items-center gap-2 w-80 h-48 md:w-96 md:h-56 transition-all duration-150'>
            <WebcamIcon className='w-20 h-20'/>
            <button className='flex items-center bg-blue-300 rounded-2xl hover:bg-blue-400 transition-colors' onClick={()=>setWebCam(true)}>
              <span className='px-3 py-1 text-center text-sm'>
                Enable Camera
              </span>
            </button>
          </div>
          }
        </div>
      </div>
      <div className='mt-8 mb-4 flex justify-center items-center text-sm md:text-lg'>
        <Link href={`/dashboard/interview/${params.interviewId}/start`} className='p-2 rounded-2xl bg-blue-600 text-white hover:bg-blue-500 transition-colors'>
          <span className='px-3'>Start Interview</span>
        </Link>
      </div>
    </div>
  );
}

export default Interview