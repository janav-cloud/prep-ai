import Link from 'next/link'
import React from 'react'

function Features() {
  return (
    <section className="p-10 text-blue-600">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold md:text-5xl animate-move-out">"AI 🤖 will not replace Humans , but Humans 🙋 using AI 🪄 will replace Humans 🙎!"</h2>

          <p className="mt-4 md:mt-6 text-slate-600 text-[14px] md:text-[16px] animate-move-out">
          Optimize your interview skills, master the conversation flow. Questions tailored to your job profile. Boosts confidence to ace the assessment. Personalized feedback to refine your responses helping to achieve your role and goal.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 animate-move-in">
          <a
            className="bg-blue-600 block rounded-xl border-transparent p-8 shadow-xl transition hover:border-blue-800/10 hover:shadow-blue-800/10 hover:bg-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-gray-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Seamless Journey</h2>

            <p className="mt-1 text-sm text-gray-300">
            Experience a seamless preparation journey with PrepAI's guided paths. From topic selection to interview simulation, each step is streamlined to help you focus on improving specific skills and knowledge areas.
            </p>
          </a>

          <a
            className="bg-blue-600 block rounded-xl border-transparent p-8 shadow-xl transition hover:border-blue-800/10 hover:shadow-blue-800/10 hover:bg-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-gray-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Benefits and Ease</h2>

            <p className="mt-1 text-sm text-gray-300">
            Benefit from PrepAI's interactive AI assistance throughout your preparation. Receive prompt guidance, tips, and clarifications during interview simulations to enhance your understanding and performance readiness.
            </p>
          </a>

          <a
            className="bg-blue-600 block rounded-xl border-transparent p-8 shadow-xl transition hover:border-blue-800/10 hover:shadow-blue-800/10 hover:bg-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-gray-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Interview Simulation</h2>

            <p className="mt-1 text-sm text-gray-300">
              PrepAI conducts realistic interview simulations tailored to your chosen field or industry. It generates questions based on your topic experience and evaluates your responses for depth and relevance.
            </p>
          </a>

          <a
            className="bg-blue-600 block rounded-xl border-transparent p-8 shadow-xl transition hover:border-blue-800/10 hover:shadow-blue-800/10 hover:bg-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-gray-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Feedback & Tips</h2>

            <p className="mt-1 text-sm text-gray-300">
            Receive feedback on your interview responses. PrepAI analyzes your answers, highlighting strengths and areas for improvement. It provides actionable tips to enhance your interview performance.
            </p>
          </a>

          <a
            className="bg-blue-600 block rounded-xl border-transparent p-8 shadow-xl transition hover:border-blue-800/10 hover:shadow-blue-800/10 hover:bg-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-gray-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Adaptive Questioning Algorithm</h2>

            <p className="mt-1 text-sm text-gray-300">
            Utilizing power of Gemini, PrepAI dynamically adjusts its questioning based on your responses. It ensures a challenging yet realistic interview experience, optimizing preparation for diverse interview scenarios.
            </p>
          </a>

          <a
            className="bg-blue-600 block rounded-xl border-transparent p-8 shadow-xl transition hover:border-blue-800/10 hover:shadow-blue-800/10 hover:bg-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 text-gray-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Simple Interface</h2>

            <p className="mt-1 text-sm text-gray-300">
            PrepAI offers an intuitive and user-friendly interface designed to simplify your interview preparation journey. Navigate effortlessly through simulations, feedback, and analytics to optimize your practice sessions.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/dashboard"
            className="inline-block rounded-3xl bg-slate-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Get Started!
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Features