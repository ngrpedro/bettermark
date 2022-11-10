import { IconButton, Select } from '@chakra-ui/react'
import React from 'react'
import Services from './Services';
import eventplanner from "../assets/event-planner.jpg"
import { Button } from '@chakra-ui/react';
import { ArrowRight } from 'phosphor-react';

const Results = () => {
    return (
        <div className='  bg-[#eaeaea] pb-20'>
            <div className='bg-[#011238] h-[15rem]'>
                <div className='padding-container py-14'>
                    <h1 className='text-5xl font-quatt  text-white'>Results</h1>
                </div>
            </div>
            <div className='mx-6 md:mx-24 bg-white py-8 px-2 md:p-8 rounded-xl -mt-16 space-y-8'>
                <div className='max-w-sm'>
                    <Select placeholder='Filter'>
                        <option value='option1'>SEO</option>
                        <option value='option2'>PPC</option>
                    </Select>

                    <p className='text-sm mt-3 ml-1'>
                        Here you can see our <strong>objective</strong>, <strong>approach</strong> and <strong>results</strong>.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    <div className='border border-gray-200 rounded-lg flex flex-col items-start 
                            hover:shadow-md cursor-pointer transition-all group'>
                        <div className='group-hover:opacity-30 transition-all w-full'>
                            <img src={eventplanner} alt="" className='rounded-t-lg w-full h-52 object-cover' />
                            <button>
                                Download
                            </button>
                        </div>
                        <div className='p-4 space-y-2 flex items-center justify-between w-full'>
                            <h1 className='text-lg font-bold block'>
                                PPC -
                                <br />
                                Event Planning
                            </h1>
                            <IconButton aria-label='More' w='40px' rounded={'full'} bg="#e8d7ff" _hover={{}} icon={<ArrowRight size={24} />} />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Results
