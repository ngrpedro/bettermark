import { At, Phone } from 'phosphor-react'
import React from 'react'
import { Button } from '@chakra-ui/react';

const ContactUs = () => {
    return (
        <div>
            <div className='padding-container pb-20 pt-10 md:pt-20 md:pb-10 space-y-10'>
                <div className='bg-gray-300 rounded-lg w-full h-40'></div>

                <div className='grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-lg'>

                    <div className='bg-gray-100 rounded-l-lg space-y-5  p-10'>
                        <h1 className='text-3xl font-bold'>
                            Get in touch
                        </h1>
                        <div className='space-y-3'>
                            <p className='text-gray-600'>
                                584 Evergreen Terrace
                            </p>
                            <p className='text-gray-600 flex items-center justify-start gap-2'>
                                <Phone size={22} />
                                +1 (555) 123-4567
                            </p>
                            <p className='text-gray-600 flex items-center justify-start gap-2'>
                                <At size={22} />
                                support@example.com
                            </p>
                            <p className='text-gray-700 text-lg  font-bold pt-5'>Let's keep in touch!</p>
                        </div>

                    </div>

                    <div className='col-span-2 p-10 space-y-4'>
                        <div className='grid grid-cols-2 gap-5'>
                            <input type="text" placeholder='Full Name'
                                className='p-4 border border-gray-300 w-full rounded-lg 
                                placeholder:text-gray-400 placeholder:font-normal shadow-sm 
                                    hover:border hover:border-[#FF6E4F]'/>
                            <input type="text" placeholder='Phone Number'
                                className='p-4 border border-gray-300 w-full rounded-lg 
                                placeholder:text-gray-400 placeholder:font-normal shadow-sm 
                                    hover:border hover:border-[#FF6E4F]'/>
                        </div>
                        <input type="text" placeholder='Web Site'
                            className='p-4 border border-gray-300 w-full rounded-lg 
                                placeholder:text-gray-400 placeholder:font-normal shadow-sm 
                                    hover:border hover:border-[#FF6E4F]'/>

                        <input type="text" placeholder='Email'
                            className='p-4 border border-gray-300 w-full rounded-lg 
                                placeholder:text-gray-400 placeholder:font-normal shadow-sm 
                                    hover:border hover:border-[#FF6E4F]'/>
                        <textarea name="obg" id="obg" cols="30" rows="3" placeholder='Tell something to us'
                            className='p-4 border border-gray-300 w-full rounded-lg 
                                    placeholder:text-gray-400 placeholder:font-normal shadow-sm 
                                        hover:border hover:border-[#FF6E4F]'></textarea>

                        <Button
                            border={'2px'}
                            borderColor={"#FF6E4F"}
                            bg="transparent"
                            _hover={{ opacity: 0.8 }}
                            _active={{ opacity: 0.8 }}
                            rounded={"full"}
                            py="18px"
                            px="42px"
                            m={"auto"}
                            fontWeight={"bold"}
                            fontSize="18px"
                            lineHeight={"19px"}
                            color={"#FF6E4F"}
                        >
                            Submit
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactUs
