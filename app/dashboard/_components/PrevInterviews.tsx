'use client'

import { db } from '@/utils/db';
import { PrepAIMock } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq } from 'drizzle-orm';
import { useEffect, useState } from 'react'
import InterviewCard from './InterviewCard';
import { toast } from 'sonner';

function PrevInterviews() {

    const {user} = useUser();

    const [interviewList, setInterviewList] = useState<any>();

    useEffect(()=>{
        user && FetchPreviousInterview();
    }, [user])

    const FetchPreviousInterview = async() => {

        if (!user?.primaryEmailAddress?.emailAddress) {
            toast("Error occured while fetching Email Address! Refresh Your Page");
            return;
        }
    
        const prevInterviews = await db.select()
        .from(PrepAIMock)
        .where(eq(PrepAIMock.createdByUser, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(PrepAIMock.createdAtTime));
        setInterviewList(prevInterviews);
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            {interviewList && interviewList.map((interview: any, index: any) => (
                <InterviewCard
                interview={interview}
                key={index}
                />
            ))}
        </div>
    )
}

export default PrevInterviews