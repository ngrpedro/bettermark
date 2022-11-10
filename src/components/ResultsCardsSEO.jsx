import { IconButton } from '@chakra-ui/react'
import housekeys from "../assets/housekeys.jpg"
import { ArrowRight, DownloadSimple } from 'phosphor-react';

const ResultsCardsSEO = () => {
    return (
        <div className='border border-gray-200 rounded-lg flex flex-col items-start 
                                                hover:shadow-md transition-all group'>
            <div className='w-full relative'>
                <img src={housekeys} alt="" className='rounded-t-lg w-full h-52 object-cover
                                                group-hover:opacity-30 transition-all ' />
                <div className='hidden group-hover:block transition-all' style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}>
                    <IconButton aria-label='More' w='50px' h='50px' rounded={'full'} bg="#011238" _hover={{}}
                        icon={<DownloadSimple size={26} color={"white"} />} />
                </div>
            </div>
            <div className='p-4 space-y-2 flex items-center justify-between w-full'>
                <div>
                    <h1 className='text-lg font-bold block'>
                        SEO
                    </h1>
                    <p className='font-bold'>
                        Engineering Services
                    </p>
                </div>
                <ArrowRight size={24} className="cursor-pointer" />
            </div>
        </div>
    )
}

export default ResultsCardsSEO
