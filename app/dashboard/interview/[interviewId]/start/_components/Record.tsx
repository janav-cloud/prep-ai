'use client'

import { ArrowBigLeftIcon, ArrowBigRightIcon, CameraIcon,  } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { toast } from 'sonner';
import { chatSession } from '@/utils/gemini';
import { db } from '@/utils/db';
import { UserAnswerAIMock } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';

interface Question {
  question: string,
  answer: string,
}

interface QuestionArray {
  questionData: Question[],
  questionIndex: any,
  interviewData: any
}

function Record({questionData, questionIndex, interviewData}:QuestionArray) {

  const {user} = useUser();

  const {
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  const [webCam, setWebCam] = useState(true);
  const [userAnswerResponse, setUserAnswerResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const images = [
    {src:'xp.jpg'},
    {src:'mario.webp'},
    {src:'purble.jpg'},
    {src:'ps2.webp'}
  ]

  const [tvCounter, setTVCounter] = useState(0);
  const [tvImage, setTVImage] = useState(images[tvCounter].src);
  

  useEffect(() => {
    results.map((result) => {
      if(typeof result != 'string') {
        setUserAnswerResponse(prevAns => prevAns + result.transcript)
      }
    })
  },[results]);

  useEffect(() => {
    if(!isRecording && userAnswerResponse.length>10) {
      UpdateDatabase();
    } 
  }, [userAnswerResponse])

  const RecordAnswer = async() => {
    if(isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  }

  const UpdateDatabase = async() => {
    setLoading(true);
    const feedbackPrompt = "Question: "+questionData[questionIndex].question+", User Answer: "+userAnswerResponse+". On the basis of the question and user answer, give us rating (out of 5) for the answer and the feedback, if there is any area of improvement needed include it in the feedback. Also compare with the Default Answer: "+questionData[questionIndex].answer+" for ease of comparison. Keep the feedback of 3-5 lines and return the response in JSON format with rating field and feedback field."
    
    const aiResult = await chatSession.sendMessage(feedbackPrompt);

    const feedbackResponse = (aiResult.response.text()).replace('```json','').replace('```','');

    const jsonFeedbackResponse = JSON.parse(feedbackResponse);

    const storeResult = await db.insert(UserAnswerAIMock)
    .values({
      interviewIdRef: interviewData.interviewId,
      question: questionData[questionIndex].question,
      correctAnswer: questionData[questionIndex].answer,
      userAnswer: userAnswerResponse,
      feedback: jsonFeedbackResponse.feedback,
      rating: jsonFeedbackResponse.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAtTime: Date().toString() 
    })

    if(storeResult) {
      toast("Answer saved Successfully!")
    } else {
      toast("Unexpected error occured!")
    }

    setUserAnswerResponse('');
    setResults([]);
    setLoading(false);
  }

  return (
    <div className={`flex flex-col justify-between p-3 gap-3 md:gap-5 ${loading? 'opacity-15' : 'opacity-100'}`}>
      {webCam?
        <div>
          <Webcam 
          onUserMedia={()=>setWebCam(true)}
          onUserMediaError={()=>setWebCam(false)}
          className='rounded-lg transition-all duration-150'/>
        </div>
      :
        <div>
          <Image 
            src={`/${tvImage}`}
            alt="Bliss"
            height={500}
            width={500}
            className='object-contain rounded-lg transition-all duration-150 w-full'
          />
        </div>
      }
      <div className='flex justify-between items-center'>
          <div className='flex items-center gap-1'>
            <div 
            onClick={()=>setWebCam(!webCam)}
            className='rounded-full w-7 h-7 bg-red-500 text-xs flex items-center justify-center text-white hover:bg-red-600 transition-colors'>
              <CameraIcon width={16}/>
            </div>
            <div 
            onClick={()=>{
              const newIndex = (tvCounter - 1 + images.length) % images.length;
              setTVCounter(newIndex);
              setTVImage(images[newIndex].src);
            }}
            className='rounded-full w-7 h-7 bg-green-700 text-xs flex items-center justify-center text-green-300 hover:bg-green-600 transition-colors'>
              <ArrowBigLeftIcon width={22}/>
            </div>
            <div 
            onClick={() => {
              const newIndex = (tvCounter + 1) % images.length;
              setTVCounter(newIndex);
              setTVImage(images[newIndex].src);
            }}
            className='rounded-full w-7 h-7 bg-green-700 text-xs flex items-center justify-center text-green-300 hover:bg-green-600 transition-colors'>
              <ArrowBigRightIcon width={22}/>
            </div>
          </div>
        <button 
        onClick={RecordAnswer}
        className='text-sm ring-2 ring-white bg-slate-600 hover:bg-slate-500 transition-colors p-2 rounded-md font-semibold'>
          {isRecording?
            <p className='text-red-200 animate-pulse'>
              Stop 🎙️
            </p>
            :
            <p className='text-emerald-300'>
              Answer 🔊
            </p>
          }
        </button>      
      </div>
      {webCam?
        <></>
      :
        <div className='mt-auto rounded-md flex flex-col items-center border border-gray-500'>
          <div className='text-xl p-4 font-mono text-gray-300'>
            Macintosh SE
          </div>
        </div>
      }
    </div>
  )
}

export default Record