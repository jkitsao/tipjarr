import React, { useState, useContext } from "react";
import { UserInfo } from "../../../../../context/UserInfo";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
  Icon,
  Avatar,
} from "@chakra-ui/core";
function Userbar() {
  const { userInfo } = useContext(UserInfo);
  return (
    <div className="text-center  shadow-sm my-3">
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionHeader>
              <Box flex="1" textAlign="left" paddingX="2">
                <Avatar
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                  display="inline-block"
                  zIndex="0"
                />
                <span className="ml-4 mt-3 inline-block text-sm text-blue-600">
                  {userInfo && userInfo.username}
                </span>
              </Box>
              <Icon size="12px" name={isExpanded ? "minus" : "add"} />
            </AccordionHeader>
            <AccordionPanel pb={4}>
              <div className="text-left px-2">
                <p>Name</p>
                <p className="text-left  text-sm text-blue-600">
                  {userInfo && userInfo.name}
                </p>
                <p>Email</p>
                <p className="text-left  text-sm text-blue-600">
                  {userInfo && userInfo.email}
                </p>
                <p>username</p>
                <p className="text-left  text-sm text-blue-600">
                  {userInfo && userInfo.username}
                </p>
                <p>Bio</p>
                <p className="text-left  text-sm text-blue-600">
                  {userInfo && userInfo.bio}
                </p>
              </div>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </div>
  );
}

export default Userbar;
