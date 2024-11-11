'use client'

import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { chatSession } from '@/utils/gemini';
import { LoaderPinwheel } from 'lucide-react';
import { db } from '@/utils/db';
import { PrepAIMock } from '@/utils/schema';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
  

function AddNew() {

    const [dialogState, setDialogState] = useState(false);
    const [jobRole, setJobRole] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [JSONFile, setJSONFile] = useState([]);
    const {user} = useUser();
    const router = useRouter();

    const onSubmit = async(e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        
        const  InputPrompt = "Generate"+process.env.NEXT_PUBLIC_QUESTION_COUNT+"tailored interview questions based on the"+jobRole+","+jobDescription+","+"and"+yearsOfExperience+". Carefully consider the candidate's level of expertise based on"+yearsOfExperience+",the job requirements based on the"+jobDescription+"and the necessary skills and qualifications needed for the position based on"+jobRole+".Aim is to create a list of pertinent, technical and insightful interview questions that will effectively assess the candidate's suitability for the given"+jobRole+". Only Generate Questions and their Answers in JSON file format strictly with no Markdown tags or styling or new line tags.";
        const result = await chatSession.sendMessage(InputPrompt);

        const JSONResponse = (result.response.text()).replace('```json','').replace('```','');
        setJSONFile(JSONResponse);

        if(JSONResponse) {
            try {
                const storeResponse = await db.insert(PrepAIMock)
                .values({
                    jsonResponse:JSONResponse || 'UnknownEntity',
                    jobPosition:jobRole || 'UnknownEntity',
                    jobDesc: jobDescription || 'UnknownEntity',
                    jobExperience: yearsOfExperience || 'UnknownEntity',
                    createdByUser: user?.primaryEmailAddress?.emailAddress || 'UnknownEntity',
                    createdAtTime: Date().toString() || 'UnknownEntity',
                    interviewId:uuidv4()
                }).returning({interviewId:PrepAIMock.interviewId});

                if(storeResponse) {
                    setDialogState(false);
                    router.push('/dashboard/interview/'+storeResponse[0]?.interviewId)
                }
            } catch (error) {
                console.log("Database not updated"+error);
            }
        } else {
            console.log("Unexpected Error! No Response");
        }

        setLoading(false);
    }

    useEffect(() => {
        if (jobRole && jobDescription && yearsOfExperience) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [jobRole, jobDescription, yearsOfExperience]);
    
    return (
        <div>
            <div className='p-12 rounded-lg border border-slate-300 bg-slate-100 hover:bg-slate-200 transition-colors shadow-md cursor-pointer'
                onClick={() => setDialogState(true)}
            >
                <h2 className='font-semibold text-lg text-center'>+ Create New</h2>
            </div>
            <Dialog open={dialogState}>
            <DialogContent className='rounded-xl scale-90 md:scale-100'>
                <DialogHeader>
                <DialogTitle className='font-bold text-2xl text-left'>{`Before we start! Let's get to know some details </>`}</DialogTitle>
                    <form onSubmit={onSubmit} className='flex flex-col gap-4'>
                        <div className='mt-2 text-left w-full'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold text-md'>Job Role 📝</label>
                                <input type="text" 
                                className='p-2 bg-slate-100 border border-gray-300 rounded-md text-[12px]' 
                                placeholder='Enter Job Role...'
                                value={jobRole}
                                onChange={(e)=>{setJobRole(e.target.value)}}
                                required
                                />    
                            </div>
                        </div>
                        <div className='text-left w-full'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold text-md'>Job Description/Tech Stack 🌐</label>
                                <textarea 
                                className='h-20 resize-none p-2 bg-slate-100 border border-gray-300 rounded-md text-[12px]' 
                                placeholder='Keep it concise and to the point...'
                                value={jobDescription}
                                maxLength={220}
                                onChange={(e)=>{setJobDescription(e.target.value)}}
                                required
                                />    
                            </div>
                        </div>
                        <div className='text-left w-full'>
                            <div className='flex flex-col gap-2'>
                                <label className='font-semibold text-md'>Years of Experience 📈</label>
                                <input type="number" 
                                className='p-2 bg-slate-100 border border-gray-300 rounded-md text-[12px]' 
                                placeholder='...'
                                value={yearsOfExperience}
                                onChange={(e)=>{setYearsOfExperience(e.target.value)}}
                                required
                                max={50}
                                />    
                            </div>
                        </div>
                        <div className='mt-2 flex gap-5 justify-end text-center text-gray-600 font-semibold'>
                            <button className='bg-slate-200 p-2 rounded-md hover:bg-gray-300 transition-all' onClick={()=>setDialogState(false)}>
                                <span className='mx-2'>Cancel</span>
                            </button>
                            <button type="submit" className={`p-2 rounded-md transition-all ${isButtonDisabled || loading ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`} disabled={isButtonDisabled}>
                                {
                                loading?
                                <div className='flex items-center'>
                                    <LoaderPinwheel className='w-5 h-5 animate-spin'/>
                                    <span className='mx-1'>
                                        Generating 🪄
                                    </span>
                                </div>
                                :
                                <span className='mx-2'>
                                    Start Interview
                                </span>
                                }
                            </button>
                        </div>
                    </form>
                </DialogHeader>
            </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNew
