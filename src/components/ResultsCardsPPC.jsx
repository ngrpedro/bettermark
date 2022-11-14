import { IconButton } from '@chakra-ui/react'
import eventplanner from "../assets/scheduling.png"
import graduation from "../assets/graduation.png"
import clothing from "../assets/clothing.png"
import handpresenting from "../assets/hand-presenting.png"
import { ArrowRight, DownloadSimple } from 'phosphor-react';
import pdf1 from '../assets/pdf/PPC_event-planning.pdf'
import pdf2 from '../assets/pdf/PPC- job_and_education_industry.pdf'
import pdf3 from '../assets/pdf/PPC-apparel_industry.pdf'
import pdf4 from '../assets/pdf/PPC-real_estate_industry.pdf'

const ResultsCardsPPC = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
            <div className='border border-gray-200 rounded-lg flex flex-col items-start 
                                                hover:shadow-md transition-all group'>
                <div className='w-full relative'>
                    <img src={eventplanner} alt="" className='rounded-t-lg w-full h-52 object-cover
                                                group-hover:opacity-30 transition-all ' />
                    <div className='hidden group-hover:block transition-all' style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }}>
                        <a href={pdf1} target="_blank" download={pdf1}>
                            <IconButton aria-label='More' w='50px' h='50px' rounded={'full'} bg="#011238" _hover={{}}
                                icon={<DownloadSimple size={26} color={"white"} />} />
                        </a>
                    </div>
                </div>
                <div className='p-4 space-y-2 flex items-center justify-between w-full'>
                    <div>
                        <h1 className='text-lg font-bold block'>
                            PPC
                        </h1>
                        <p className='font-bold'>
                            Event Planning
                        </p>
                    </div>
                    <a href={pdf1} target="_blank">

                        <ArrowRight size={24} className="cursor-pointer" />
                    </a>
                </div>
            </div>



            <div className='border border-gray-200 rounded-lg flex flex-col items-start 
                                                hover:shadow-md transition-all group'>
                <div className='w-full relative'>
                    <img src={graduation} alt="" className='rounded-t-lg w-full h-52 object-cover
                                                group-hover:opacity-30 transition-all ' />
                    <div className='hidden group-hover:block transition-all' style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }}>
                        <a href={pdf2} target="_blank" download={pdf2}>
                            <IconButton aria-label='More' w='50px' h='50px' rounded={'full'} bg="#011238" _hover={{}}
                                icon={<DownloadSimple size={26} color={"white"} />} />
                        </a>
                    </div>
                </div>
                <div className='p-4 space-y-2 flex items-center justify-between w-full'>
                    <div>
                        <h1 className='text-lg font-bold block'>
                            PPC
                        </h1>
                        <p className='font-bold'>
                            Job and Education
                        </p>
                    </div>
                    <a href={pdf2} target="_blank">

                        <ArrowRight size={24} className="cursor-pointer" />
                    </a>
                </div>
            </div>

            <div className='border border-gray-200 rounded-lg flex flex-col items-start 
                                                hover:shadow-md transition-all group'>
                <div className='w-full relative'>
                    <img src={clothing} alt="" className='rounded-t-lg w-full h-52 object-cover
                                                group-hover:opacity-30 transition-all ' />
                    <div className='hidden group-hover:block transition-all' style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }}>
                        <a href={pdf3} target="_blank" download={pdf3}>
                            <IconButton aria-label='More' w='50px' h='50px' rounded={'full'} bg="#011238" _hover={{}}
                                icon={<DownloadSimple size={26} color={"white"} />} />
                        </a>
                    </div>
                </div>
                <div className='p-4 space-y-2 flex items-center justify-between w-full'>
                    <div>
                        <h1 className='text-lg font-bold block'>
                            PPC
                        </h1>
                        <p className='font-bold'>
                            Apparel
                        </p>
                    </div>
                    <a href={pdf3} target="_blank">

                        <ArrowRight size={24} className="cursor-pointer" />
                    </a>
                </div>
            </div>


            <div className='border border-gray-200 rounded-lg flex flex-col items-start 
                                                hover:shadow-md transition-all group'>
                <div className='w-full relative'>
                    <img src={handpresenting} alt="" className='rounded-t-lg w-full h-52 object-cover
                                                group-hover:opacity-30 transition-all ' />
                    <div className='hidden group-hover:block transition-all' style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }}>
                        <a href={pdf4} target="_blank" download={pdf4}>
                            <IconButton aria-label='More' w='50px' h='50px' rounded={'full'} bg="#011238" _hover={{}}
                                icon={<DownloadSimple size={26} color={"white"} />} />
                        </a>
                    </div>
                </div>
                <div className='p-4 space-y-2 flex items-center justify-between w-full'>
                    <div>
                        <h1 className='text-lg font-bold block'>
                            PPC
                        </h1>
                        <p className='font-bold'>
                            Real Estate
                        </p>
                    </div>
                    <a href={pdf4} target="_blank">

                        <ArrowRight size={24} className="cursor-pointer" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ResultsCardsPPC
