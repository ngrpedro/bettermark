import React from 'react'

import { Button } from "@chakra-ui/react";
import PenaWhite from '../assets/PenaWhite.jsx';


const Conversation = () => {
    return (
        <div className="bg-[#eaeaea]">
            <div className="padding-container relative py-10 gap-10 text-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className='space-y-16'>
                        <div className='space-y-8'>

                            <h1 className="block text-5xl md:text-5xl font-quatt">
                                Increasing your sales is always a challenge.
                            </h1>
                            <div className='p-5  border-l border-purple-200 space-y-8'>
                                <div className='flex gap-4 -ml-[37px]'>

                                    <div className="">
                                        <PenaWhite />
                                    </div>

                                    <div className=' pl-5 space-y-2'>
                                        <h1 className='font-bold text-xl'>The competition is high</h1>
                                        <p className="text-lg">
                                            And although everyone brags about how good online marketing is, its
                                            just very hard to take the best of this opportunity if you are not
                                            an expert.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-4 -ml-[37px]'>
                                    <div className="">
                                        <PenaWhite />
                                    </div>
                                    <div className=' pl-5 space-y-2'>
                                        <h1 className='font-bold text-xl'>The competition is high</h1>
                                        <p className="text-lg">
                                            things change all the time, and the agencies don’t really speak your language:
                                            You don’t want to spend hours trying to making sense of data and analytics.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="space-y-10 max-w-[33rem] m-auto text-justify text-black p-5 border-l border-purple-200">


                            <div className='flex gap-4 -ml-[37px]'>
                                <div className="">
                                    <PenaWhite />
                                </div>
                                <div className=' pl-5 space-y-2'>
                                    <h1 className='font-bold text-xl'>Not only that</h1>
                                    <p className="text-lg">
                                        - how in the world are you supposed to keep it up with
                                        every new trend, Google Ads feature or new platforms coming up?
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-4 -ml-[37px]'>
                                <div className="">
                                    <PenaWhite />
                                </div>
                                <div className=' pl-5 space-y-2'>
                                    <h1 className='font-bold text-xl'>We get it</h1>
                                    <p className="text-lg">
                                        it’s overwhelming. And the truth is, you shouldnt have to worry about it.
                                        You didn’t go to school to become a professional marketer.{" "}
                                        We did.
                                    </p>
                                </div>
                            </div>


                        </div>
                        <div className='w-full flex mt-10'>

                            <Button
                                as={'a'}
                                href="https://calendly.com/bettermarketingau/30min?month=2022-11"
                                target={"_black"}
                                bg={"#FF6E4F"}
                                _hover={{ opacity: 0.8 }}
                                _active={{ opacity: 0.8 }}
                                rounded={"full"}
                                py="18px"
                                px="42px"
                                m={"auto"}
                                fontWeight={"bold"}
                                fontSize="18px"
                                lineHeight={"19px"}
                                color={"white"}
                            >
                                Schedule a call
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Conversation
