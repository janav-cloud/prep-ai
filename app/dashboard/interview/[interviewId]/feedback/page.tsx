'use client'

import { db } from '@/utils/db'
import { UserAnswerAIMock } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { GraduationCap } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from 'next/link'

interface InterviewId {
    params: {[key : string] : string}
}

function Feedback({params} : InterviewId) {

    useEffect(()=>{
        fetchFeedback();
    },[])

    const [feedbackResponse, setFeedBackResponse] = useState<any>([]);
    const [feedbackPage, setFeedbackPage] = useState(false);

    const fetchFeedback = async() => {
        const feedback = await db.select()
        .from(UserAnswerAIMock)
        .where(eq(UserAnswerAIMock.interviewIdRef, params.interviewId))
        .orderBy(UserAnswerAIMock.id)

        if(feedback) {
            setFeedBackResponse(feedback);
            setFeedbackPage(true);
        } else {
            setFeedbackPage(false);
            toast('Error fetching Feedback');
        }
    } 

    return (
        <div className='p-5 md:p-8'>
            {feedbackPage? 
                <>
                    <div className='mt-5 flex flex-col items-center lg:items-start gap-1 md:gap-2'>
                        <h2 className='text-2xl font-bold text-blue-600 md:text-5xl'>Practice makes Perfect.</h2>
                        <p className='text-sm italic text-slate-500'>~ Cristiano Ronaldo</p>
                    </div>
                    <div className='flex flex-col items-center mt-5 lg:items-start'>
                        <h3 className='font-semibold text-sm text-slate-700 md:text-xl'>
                            Here's your feedback!
                            <span className='font-bold text-orange-500'>&nbsp; Check your rating per response ⭐</span>
                        </h3>
                    </div>
                    {feedbackResponse.map((item: any, index: any) => (
                        <Accordion type="single" collapsible key={index} className='mt-5 mb-2 bg-slate-600 rounded-lg text-gray-200'>
                        <AccordionItem value='1' className='p-5'>
                            <AccordionTrigger className='text-left'>Q.{index+1}: {item.question}</AccordionTrigger>
                            <AccordionContent>
                                <div className='flex flex-col gap-3'>
                                    <h2 className='flex items-center justify-between bg-blue-500 text-stone-50 p-3 rounded-md'>
                                        <span className='flex flex-col gap-1'>
                                            <span className='text-[16px] font-bold'>
                                                Your Answer
                                            </span>
                                            <span>
                                                {item.userAnswer}
                                            </span>
                                        </span>
                                        <span className='font-bold'>{item.rating} ⭐</span>
                                    </h2>
                                    <h2
                                    className={`flex items-center justify-between p-3 rounded-md
                                        ${item.rating>3?
                                            'bg-emerald-500'    
                                            :
                                            `${item.rating==3?
                                                'bg-yellow-200 text-slate-900'
                                            :
                                                'bg-red-400'
                                            }`
                                        }   
                                        `}
                                    >
                                        <span className='flex flex-col gap-1'>
                                            <span className='text-[16px] font-bold'>
                                                Feedback
                                            </span>
                                            <span>
                                                {item.feedback}
                                            </span>
                                        </span>
                                    </h2>
                                    <h2 className='flex items-center justify-between bg-emerald-600 text-stone-50 p-3 rounded-md'>
                                        <span className='flex flex-col gap-1'>
                                            <span className='text-[16px] font-bold'>
                                                Expected Answer
                                            </span>
                                            <span>
                                                {item.correctAnswer}
                                            </span>
                                        </span>
                                    </h2>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                    ))}
                    <div className='flex justify-center mt-5'>
                        <Link href="/dashboard" className='bg-blue-500 rounded-full hover:bg-blue-600 transition-colors'>
                            <button className='mx-2 p-3 text-white '>Back to Dashboard</button>
                        </Link>
                    </div>
                </>
            :
                 <div className='h-[80vh] flex justify-center items-center'>
                    <GraduationCap className='text-blue animate-bounce size-20 text-blue-600'/>
                 </div>
            }
        </div>
    )
}

export default Feedback