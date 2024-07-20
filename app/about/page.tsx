import React from 'react'

const About = () => {
  return (
    <div className="p-10 space-y-4 animate-move-out">
      <details
        className="group border-s-4 border-blue-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900">
            How does PrepAI work? 💡
          </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
        PrepAI, powered by Gemini AI technology, makes interview prep as easy as pie (chart). Our AI simulates real interviews, analyzes your responses, and serves up feedback hotter than a freshly brewed cup of coffee from&nbsp;<a href="https://corridorseven.coffee/" className='font-bold text-amber-600 underline underline-offset-2'>Corridor 7.</a>
        </p>
      </details>

      <details
        className="group border-s-4 border-blue-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900">
            PrepAI or Interview Wingman? 🪽
          </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
        PrepAI is your go-to interview wingman, whether you're a fresh graduate or a seasoned pro. Everyone deserves a shot at acing interviews, and PrepAI's got your back!
        </p>
      </details>

      <details
        className="group border-s-4 border-blue-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900">
            Highlights of PrepAI 🌟
          </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <div className="mt-4 leading-relaxed text-gray-700">
          <ul className='ml-5 list-disc'>
            <li><span className='font-bold text-blue-500'>Personalized Interview Simulations:</span>&nbsp;Tailored practice sessions that are more fun than a game show (and equally rewarding!)&nbsp; ¯\_(ツ)_/¯
            <span className='text-[8px] flex'>
              <div>
                "I mean you can buy a coffee if it went great from your money 😇"
              </div>
            </span></li>
            <li><span className='font-bold text-blue-500'>Performance Analytics:</span>&nbsp;Track your progress like a boss (or better, like a data scientist).</li>
            <li><span className='font-bold text-blue-500'>Interactive Feedback:</span>&nbsp;Insights that are so on point, you'll think our AI can read minds (almost).</li>
          </ul>
        </div>
      </details>
    </div>
  )
}

export default About