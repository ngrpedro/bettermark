import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  ListItem,
  Stack,
  Tag,
  UnorderedList,
} from "@chakra-ui/react";

const AllServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight={"bold"}>
                LOCAL SEO and NATIONAL SEO
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <UnorderedList my={4}>
              <ListItem>
                Site Assessment and Intake: We audit your website, online
                presence and gather information about your target audience and
                goals Keyword Research: We research the best keywords based on
                the industry vertical and physical location to bring the most
                effective results. Target keywords are approved by mutual
                consensus.
              </ListItem>
              <ListItem>
                Content and On Page Optimisation: From our site assessment and
                keyword research, we implement high-quality content optimisation
                to your site to engage visitors. Extensive on page optimisation
                includes Google tools integration, plagiarism check, page load
                time & mobile friendly check and implementation of page title,
                meta description, header tags, internal linking, local schema
                setup, image alt and hyperlink optimisation.
              </ListItem>
              <ListItem>
                Monthly Link Building: With monthly link building via editorial
                content posting, local citations and authority business
                listings, we rank the website for target keywords with an
                authoritative backlink portfolio.
              </ListItem>
              <ListItem>
                Local Optimisation (for LOCAL SEO): Once the content
                optimisation is in place, we focus on building the local
                presence by submitting the business to top local search engines
                and directories including Google My Business, Bing Local, Apple
                Maps, Facebook and more.
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight={"bold"}>
                PAID ADVERTISING MANAGEMENT
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <UnorderedList my={4}>
              <ListItem>Advertising via Google Ads</ListItem>
              <ListItem>Advertising in Google Search Network</ListItem>
              <ListItem>Advanced conversion tracking</ListItem>
              <ListItem>Google Extensions set up</ListItem>
              <ListItem>Weekly PPC reports</ListItem>
              <ListItem>Monthly PPC performance reports</ListItem>
              <ListItem>
                Call support with Google & Bing Ads accredited professionals
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight={"bold"}>
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
              <ListItem>
                Automated weekly and monthly ad performance reports
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight={"bold"}>
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
              <ListItem>
                Shopping data feed creation and setup (if opted for)
              </ListItem>
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
              <Box flex="1" textAlign="left" fontWeight={"bold"}>
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
              <ListItem>
                Content based keyword targeting up to 30 keywords
              </ListItem>
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

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight={"bold"}>
                Social Media plans
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <UnorderedList my={4}>
              <ListItem>Instagram Ads</ListItem>
              <ListItem>Twitter Ads</ListItem>
              <ListItem>Facebook Ads</ListItem>
              <ListItem>LinkedIn Ads</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight={"bold"}>
                WebSite Design and Development
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <UnorderedList my={4}>
              <ListItem>Website development with focus on UX</ListItem>
              <ListItem>Designed to convert</ListItem>
              <ListItem>
                Build credibility and clearly communicate the message- which is
                the most important marketing strategy
              </ListItem>
              <ListItem>
                Custom projects according to your business needs
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AllServices;
