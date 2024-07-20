import { RefreshCw, Star } from "lucide-react"
import Link from "next/link"

interface InterviewDetails {
    interview: {[key: string] : string}
}

function InterviewCard({interview}:InterviewDetails) {
  return (
    <div className="w-full flex flex-col gap-1 shadow-sm bg-sky-200 p-3 rounded-lg justify-between">
        <h2 className="text-lg font-bold">{interview.jobPosition}</h2>
        <div className="flex flex-row lg:flex-col justify-between text-sm items-center lg:items-start lg:gap-2">
            <h3>{interview.jobDesc}</h3>
            <h3 className="text-[10px]">{interview.createdAtTime}</h3>
        </div>
        <div className="mt-4 flex justify-end gap-3">
            <Link href={`/dashboard/interview/${interview.interviewId}/feedback`}>
                <button className="flex items-center gap-2 p-2 bg-amber-500 text-slate-900 rounded-md">
                    <Star className="size-4 mx-1"/>
                    <span className=" mx-1">
                        Feedback
                    </span>
                </button>
            </Link>
            <Link href={`/dashboard/interview/${interview.interviewId}`}>
                <button className="flex items-center gap-2 p-2 bg-blue-600 text-stone-50 rounded-md">
                    <RefreshCw className="size-4 mx-1 hover:animate-spin"/>
                    <span className=" mx-1">
                        Prep Again
                    </span>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default InterviewCard