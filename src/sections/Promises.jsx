import { CalendarIcon } from '@chakra-ui/icons';
import { Button, IconButton } from '@chakra-ui/react';
import React from 'react';

const Promises = () => {
  return (
    <div className="padding-container py-20 text-center space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-5 text-center md:items-start gap-20">
          <h1 className="md:col-span-5 text-3xl md:text-5xl font-bold font-quatt">
            Getting things done does’t move the needle in your business.
          </h1>
          <div className="space-y-5 md:col-span-2">
            <p className="underline decoration-3 text-xl underline-offset-4">
              Getting things done that matter, does.{" "}
            </p>

            <p>
              <strong>ACTION</strong> is what moves your brand to the next
              level. Take de first step and schedule your call TODAY.
            </p>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex gap-4 items-start justify-start">
              <IconButton
                aria-label="Search database"
                rounded={"full"}
                fontWeight={"bold"}
                fontSize="16px"
                lineHeight={"19pxp"}
                bg={"#524fff"}
                _hover={{ bg: "#524fff" }}
                icon={<CalendarIcon />}
              />
              We want to build a relationship of years with you. So we are
              driven by your results.
            </div>
            <div className="flex gap-4 items-start justify-start">
              <IconButton
                aria-label="Search database"
                rounded={"full"}
                fontWeight={"bold"}
                fontSize="16px"
                lineHeight={"19pxp"}
                bg={"#524fff"}
                _hover={{ bg: "#524fff" }}
                icon={<CalendarIcon />}
              />
              We want to communicate the best. Our data will inform you, not
              confuse you.
            </div>
            <div className="flex gap-4 items-start justify-start">
              <IconButton
                aria-label="Search database"
                rounded={"full"}
                fontWeight={"bold"}
                fontSize="16px"
                lineHeight={"19pxp"}
                bg={"#524fff"}
                _hover={{ bg: "#524fff" }}
                icon={<CalendarIcon />}
              />
              There is no lock-in contract. We want you stay for the results.
            </div>
            <div className="flex gap-4 items-start justify-start">
              <IconButton
                aria-label="Search database"
                rounded={"full"}
                fontWeight={"bold"}
                fontSize="16px"
                lineHeight={"19pxp"}
                bg={"#524fff"}
                _hover={{ bg: "#524fff" }}
                icon={<CalendarIcon />}
              />
              And we are committed to make it work. If you are not happy, we
              don’t get paid.
            </div>
          </div>
        </div>
        <Button
          bg={"#FF6E4F"}
          _hover={{ opacity: 0.8 }}
          _active={{ opacity: 0.8 }}
          rounded={"full"}
          py="12px"
          px="40px"
          fontWeight={"bold"}
          fontSize="16px"
          lineHeight={"19pxp"}
        >
          Schedule a call
        </Button>
      </div>
  )
}

export default Promises