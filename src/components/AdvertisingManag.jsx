import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, HStack, ListItem, Stack, Tag, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { FileDoc, Info, ProjectorScreenChart, Textbox } from 'phosphor-react';

const AdvertisingManag = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8'>
                <h1 className='md:col-span-2 py-4 text-xl font-bold'>
                    Our Process:
                </h1>
                <div className='flex flex-col items-start justify-start gap-2 md:border-r border-gray-300'>
                    <div className='p-2 rounded-md bg-[#e8d7ff]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </div>

                    <p className='text-lg font-bold'>Site Assessment and Intake</p>
                    <p className='text-md max-w-sm'>
                        We audit your website, online presence and gather
                        information about your target audience and goals
                    </p>
                </div>

                <div className='flex flex-col items-start justify-start gap-2'>
                    <div className='p-2 rounded-md bg-[#d8f9cc]'>
                        <Textbox size={24} />
                    </div>

                    <p className='text-lg font-bold'>Keyword research and ad groups</p>
                    <p className='text-md  max-w-md'>
                        We will do comprehensive keyword research, ad group creation and bid management for your campaign.
                        In addition, we can prioritise keywords based on your inputs.
                    </p>
                </div>

                <div className='md:col-span-2 flex flex-col items-start justify-start gap-2 md:mb-8'>
                    <div className='p-2 rounded-md bg-[#fff6d7]'>
                        <ProjectorScreenChart size={24} />
                    </div>

                    <p className='text-lg font-bold'>Creating compelling ads</p>
                    <p className='text-md max-w-2xl'>
                        Based on keyword research, our team of PPC Advertising strategists will create
                        relevant ads targeting the keywords that are present in the tightly themed ad groups.
                        <br />
                        <span className='text-sm'>** Ads can be customised to showcase business locations, contact information,
                            service price list, and more</span>
                    </p>
                </div>

                <div className='flex flex-col items-start justify-start gap-2 md:border-r border-gray-300'>
                    <div className='p-2 rounded-md bg-[#E3E9FF]'>
                        <FileDoc size={24} />
                    </div>

                    <p className='text-lg font-bold'>Keyword research and ad groups</p>
                    <p className='text-md max-w-sm'>
                        We will do comprehensive keyword research, ad group creation and bid management for your campaign.
                        In addition, we can prioritise keywords based on your inputs.
                    </p>
                </div>

                <div className='flex flex-col items-start justify-start gap-2'>
                    <div className='p-2 rounded-md bg-[#FFE3F9]'>
                        <Info size={24} />
                    </div>

                    <p className='text-lg font-bold'>Reports</p>
                    <p className='text-md max-w-sm'>
                        Weekly and Monthly PPC performance reports are sent out automatically to
                        keep you informed about the results we’ve achieved.
                    </p>
                </div>
            </div>

            <hr className='my-10 md:my-20' />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>
                <h1 className='md:col-span-2 text-2xl font-bold'>
                    Services:
                </h1>
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left' fontWeight={'bold'}>
                                    The PPC | Retargeting
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <UnorderedList my={4}>
                                <ListItem>Google Ads Account setup</ListItem>
                                <ListItem>Remarketing tag installation</ListItem>
                                <ListItem>Advertising on Google display network</ListItem>
                                <ListItem>Page specific retargeting for up to 5 pages</ListItem>
                                <ListItem>4 image ad</ListItem>
                                <ListItem>2 Google display banner</ListItem>
                                <ListItem>A/B split testing of ads</ListItem>
                                <ListItem>Advanced ad placement optimisation</ListItem>
                                <ListItem>Automated weekly and monthly ad performance reports</ListItem>
                            </UnorderedList>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left' fontWeight={'bold'}>
                                    The PPC | Ecommerce
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <UnorderedList my={4}>
                                <ListItem>Advertising via Google Ads</ListItem>
                                <ListItem>Targeting of up to 1000 products</ListItem>
                                <ListItem>Google Shopping campaign setup</ListItem>
                                <ListItem>Google Merchant Center setup</ListItem>
                                <ListItem>Shopping data feed creation and setup (if opted for)</ListItem>
                                <ListItem>Advanced conversion tracking</ListItem>
                                <ListItem>Optimising keywords</ListItem>
                                <ListItem>Google Analytics funnel tracking</ListItem>
                                <ListItem>Google Analytics ecommerce tracking</ListItem>
                                <ListItem>Weekly PPC reports</ListItem>
                                <ListItem>Monthly PPC performance reports</ListItem>
                                <ListItem>Monthly revenue reporting</ListItem>
                            </UnorderedList>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left' fontWeight={'bold'}>
                                    The PPC | Display
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            <UnorderedList my={4}>
                                <ListItem>Google Ads Account setup</ListItem>
                                <ListItem>Google display network targeting</ListItem>
                                <ListItem>10 image ad</ListItem>
                                <ListItem>5 Google display banner ad</ListItem>
                                <ListItem>Content based keyword targeting up to 30 keywords</ListItem>
                                <ListItem>Display ads and placement optimisation</ListItem>
                                <ListItem>Managed placements</ListItem>
                                <ListItem>Geographic bidding</ListItem>
                                <ListItem>Device bidding</ListItem>
                                <ListItem>Demographic bidding</ListItem>
                                <ListItem>Interest based targeting</ListItem>
                                <ListItem>Intent based targeting</ListItem>
                                <ListItem>Topic targeting</ListItem>
                                <ListItem>Automated weekly PPC status reports</ListItem>
                                <ListItem>Monthly PPC performance reports</ListItem>
                            </UnorderedList>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <div>
                    <div className='mb-5'>
                        <h1 className='text-xl font-bold'>
                            Social Media plans are also available.
                        </h1>
                        <span className='text-[14px]'>
                            Depending on the needs of the business and target audience.
                        </span>
                    </div>
                    <Flex flexWrap={'wrap'} gap={2}>
                        <Tag size={'lg'} fontSize={'sm'} fontWeight={"bold"} bg="#e8d7ff">
                            Instagram Ads
                        </Tag>

                        <Tag size={'lg'} fontSize={'sm'} fontWeight={"bold"} bg="#d8f9cc">
                            Twitter  Ads
                        </Tag>

                        <Tag size={'lg'} fontSize={'sm'} fontWeight={"bold"} bg="#fff6d7">
                            Facebook  Ads
                        </Tag>

                        <Tag size={'lg'} fontSize={'sm'} fontWeight={"bold"} bg="#E3E9FF">
                            Tik Tok  Ads
                        </Tag>

                        <Tag size={'lg'} fontSize={'sm'} fontWeight={"bold"} bg="#FFE3F9">
                            LinkedIn  Ads
                        </Tag>
                    </Flex>
                </div>
            </div>
        </div>
    )
}

export default AdvertisingManag
