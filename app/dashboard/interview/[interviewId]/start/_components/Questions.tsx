import { LucideLightbulb, Volume2Icon } from "lucide-react"

interface Question {
    question: string,
    answer: string,
}

interface QuestionArray {
    questionData: Question[],
    questionIndex: any
}

function Questions({questionData, questionIndex}:QuestionArray) {

    const textToSpeech = (text: string | undefined) => {
        if('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        }
        else {
            alert("Browser doesn't support Text To Speech Functionality!")
        }
    }

    return (
        <div className='flex flex-col justify-between border border-slate-300 shadow-md 00 w-full md:w-2/3 rounded-3xl'>
            <div className='mt-3 p-3 grid grid-cols-3 md:grid-cols-3 gap-2'>
                {questionData.map((question, index) => (
                    <h2
                    key={index}
                    className={`font-semibold p-2 text-center bg-blue-300 rounded-full text-[10px] md:text-[14px] cursor-pointer ${questionIndex===index&&'bg-blue-600 text-white'} transition-colors`}>
                        Question #{index+1}
                    </h2>
                ))}
            </div>
            <div className='flex flex-col gap-2 p-3 text-[16px] md:text-[20px]'>
                <p>
                    {questionData[questionIndex].question}
                </p>
                <div className="flex items-center gap-2 text-blue-400">
                    <Volume2Icon
                    width={20}
                    className="cursor-pointer"
                    onClick={()=>textToSpeech(questionData[questionIndex].question)}/>
                </div>
            </div>
            <div className="p-3">
                <div className="bg-blue-200 p-2 flex flex-col rounded-xl gap-2 shadow-md">
                    <div className="font-bold text-blue-600 mt-2 flex items-center gap-1">
                        <LucideLightbulb/>
                        <h1>Note</h1>
                    </div>
                    <p className="ml-1 mb-2 text-sm text-slate-600">You can use the 🔴 TV button to toggle camera and in case feeling blank or need a break use the arrow buttons to restore some nostalgia :)</p>
                </div>
            </div>
        </div>
    )
}

export default Questions