import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, HStack, ListItem, Stack, Tag, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const AdvertisingManag = () => {
    return (
        <div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>
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
