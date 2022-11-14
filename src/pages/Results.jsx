import { IconButton, Select, Tab, TabPanels } from '@chakra-ui/react'
import React, { useState } from 'react'
import Services from './Services';
import eventplanner from "../assets/event-planner.jpg"
import { Button, Tabs, TabList, TabPanel } from '@chakra-ui/react';
import { ArrowRight, CloudArrowDown, DownloadSimple } from 'phosphor-react';
import ResultsCardsPPC from '../components/ResultsCardsPPC';
import ResultsCardsSEO from '../components/ResultsCardsSEO';


const Results = () => {

    return (
        <div className='  bg-[#eaeaea] pb-20'>
            <div className='bg-[#011238] h-[15rem]'>
                <div className='padding-container py-14'>
                    <h1 className='text-5xl font-quatt  text-white'>Results</h1>
                </div>
            </div>
            <div className='mx-6 md:mx-24 bg-white py-8 px-2 md:p-8 rounded-xl -mt-16 space-y-8'>
                <Tabs>
                    <TabList className='flex !flex-col sm:!flex-row'>
                        <Tab _selected={{
                            color: "#011238",
                            fontWeight: "700",
                            border: "#011238",
                            borderBottom: "2px"
                        }}>PPC</Tab>
                        <Tab _selected={{
                            color: "#011238",
                            fontWeight: "700",
                            border: "#011238",
                            borderBottom: "2px"
                        }}>SEO</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <ResultsCardsPPC />
                        </TabPanel>
                        <TabPanel className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                            <ResultsCardsSEO />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}

export default Results
