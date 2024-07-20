'use client'

import { db } from '@/utils/db';
import { PrepAIMock } from '@/utils/schema';
import { eq } from 'drizzle-orm'
import { useEffect, useState } from 'react'
import Questions from './_components/Questions';
import { ArrowLeftCircle, ArrowRightCircle, Loader2Icon } from 'lucide-react';
import Record from './_components/Record';
import Link from 'next/link';

interface InterviewStartProps {
  params: {[key : string] : string},
}

function Start({params}: InterviewStartProps) {

  const [interviewData, setInterviewData] = useState<any>();
  const [questionData, setQuestionData] = useState();
  const [questionIndex, setQuestionIndex] = useState<any>(0);

  useEffect(()=>{
    getInterviewDetails();
  },[])

  const getInterviewDetails = async() => {
    try {
      const interviewDetails = await db.select().from(PrepAIMock).where(eq(PrepAIMock.interviewId, params.interviewId))
      if (interviewDetails) {
        console.log("Database entity of type "+PrepAIMock.interviewId+" fetched.")
        const jsonResponseResult = JSON.parse(interviewDetails[0].jsonResponse)
        setQuestionData(jsonResponseResult);
        setInterviewData(interviewDetails[0]);
      } else {
        console.log("Database has no "+PrepAIMock.interviewId+" type entity.")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='p-5'>
    {questionData?
    <>
      <div className='flex flex-col md:flex-row gap-10'>
          <Questions 
          questionData={questionData}
          questionIndex={questionIndex}/>
        <div className='rounded-xl w-full md:w-1/3 bg-slate-700'>
          <Record 
          questionData={questionData}
          questionIndex={questionIndex} 
          interviewData={interviewData} />
          </div>
      </div>
      <div className='mt-3 flex items-center justify-between'>
        <div className='flex gap-2 font-semibold'>
          <button 
          onClick={() => {
              const currentIndex = (questionIndex - 1 + 5) % 5;
              setQuestionIndex(currentIndex);
            }
          }
          className={`flex gap-1 items-center rounded-lg bg-red-400 p-3 hover:bg-red-500 shadow-md transition-colors ${questionIndex>0? '' : 'hidden'}`}>
            <ArrowLeftCircle/>
            <h3>Prev</h3>
          </button>
          <button 
          onClick={() => {
              const currentIndex = (questionIndex + 1) % 5;
              setQuestionIndex(currentIndex);
            }
          }
          className={`flex gap-1 rounded-lg items-center bg-emerald-400 p-3 hover:bg-emerald-500 shadow-md transition-colors ${questionIndex<4? '' : 'hidden'}`}>
            <h3>Next</h3>
            <ArrowRightCircle/>
          </button>
        </div>
        <div>
          <Link href={`/dashboard/interview/${interviewData.interviewId}/feedback`}>
            <button 
            className={`flex gap-1 rounded-lg items-center bg-blue-700 text-white p-3 hover:bg-blue-800 transition-colors ${questionIndex==4? '' : 'hidden'}`}>End Interview</button>          
          </Link>
        </div>
      </div>
    </>
    :
      <div className='h-[80vh] flex items-center justify-center'>
        <Loader2Icon className='animate-spin size-16 text-blue-500'/>
      </div>
    }
    </div>
  )
}

export default Start