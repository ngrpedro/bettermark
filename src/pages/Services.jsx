import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import AdvertisingManag from '../components/AdvertisingManag'
import SEOService from '../components/SEOService'

const Services = () => {
    return (
        <div className='  bg-[#eaeaea] pb-20'>
            <div className='bg-[#011238] h-[15rem]'>
                <div className='padding-container py-14'>
                    <h1 className='text-5xl font-quatt  text-white'>Services and Process</h1>
                </div>
            </div>
            <div className='mx-6 md:mx-24 bg-white py-8 px-2 md:p-8 rounded-xl -mt-16'>
                <Tabs>
                    <TabList className='flex !flex-col sm:!flex-row'>
                        <Tab _selected={{
                            color: "#011238",
                            fontWeight: "700",
                            border: "#011238",
                            borderBottom: "2px"
                        }}>Paid advertising management</Tab>

                        <Tab _selected={{
                            color: "#011238",
                            fontWeight: "700",
                            border: "#011238",
                            borderBottom: "2px"
                        }}>Local SEO and national SEO</Tab>

                        <Tab _selected={{
                            color: "#011238",
                            fontWeight: "700",
                            border: "#011238",
                            borderBottom: "2px"
                        }}>WebSite - Development and Design</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <AdvertisingManag />
                        </TabPanel>
                        <TabPanel>
                            <SEOService />
                        </TabPanel>
                        <TabPanel>
                            <p>WebSite - Development and Design</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}

export default Services
