import React from 'react'
import { CalendarCheck, CheckSquareOffset, Textbox } from 'phosphor-react'


const SEOService = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <h1 className='md:col-span-2 text-2xl font-bold'>
                Process
            </h1>
            <div className='flex flex-col items-start justify-start gap-2 text-justify md:border-r border-gray-300'>
                <div className='p-2 rounded-md bg-[#e8d7ff]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                </div>

                <p className='text-lg font-bold'>Site Assessment and Intake</p>
                <p className='text-md max-w-md'>
                    We audit your website, online presence and gather
                    information about your target audience and goals
                </p>
            </div>

            <div className='flex flex-col items-start justify-start gap-2 text-justify'>
                <div className='p-2 rounded-md bg-[#d8f9cc]'>
                    <Textbox size={24} />
                </div>

                <p className='text-lg font-bold'>Keyword Research</p>
                <p className='text-md max-w-md'>
                    We research the best keywords based on the industry
                    vertical and physical location to bring the most effective results.
                    Target keywords are approved by mutual consensus.
                </p>
            </div>

            <div className='md:col-span-2 flex flex-col items-start justify-start gap-2 text-justify md:mb-8'>
                <div className='p-2 rounded-md bg-[#fff6d7]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>

                </div>

                <p className='text-lg font-bold'>Content and On Page Optimisation:</p>
                <p className='text-md max-w-md md:max-w-6xl'>
                    From our site assessment and keyword research, we implement high-quality content
                    optimisation to your site to engage visitors. Extensive on page optimisation includes Google tools integration,
                    plagiarism check, page load time & mobile friendly check and implementation of page title, meta description, header
                    tags, internal linking, local schema setup, image alt and hyperlink optimisation.

                </p>
            </div>

            <div className='flex flex-col items-start justify-start gap-2 text-justify md:border-r border-gray-300'>
                <div className='p-2 rounded-md bg-[#E3E9FF]'>
                    <CalendarCheck size={24} />
                </div>

                <p className='text-lg font-bold'>Site Assessment and Intake</p>
                <p className='text-md max-w-md'>
                    We audit your website, online presence and gather
                    information about your target audience and goals
                </p>
            </div>

            <div className='flex flex-col items-start justify-start gap-2 text-justify'>
                <div className='p-2 rounded-md bg-[#FFE3F9]'>
                    <CheckSquareOffset size={24} />
                </div>

                <p className='text-lg font-bold'>Site Assessment and Intake</p>
                <p className='text-md max-w-md'>
                    We audit your website, online presence and gather
                    information about your target audience and goals
                </p>
            </div>
        </div>
    )
}

export default SEOService
