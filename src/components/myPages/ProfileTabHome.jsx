import React from "react";
import { VStack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function ProfileTabHome() {
  return (
    <>
      <VStack
        // divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align="stretch"
        className="card_button_wrap"
      >
        <Link to="/BasicCard">
          <Box h={"5%"} bg="" className="profile_card_button">
            <p className="card_button_p">Basic</p>
          </Box>
        </Link>
        <Link to="/LikeCard">
          <Box h={"80px"} bg="" className="profile_card_button">
            <p className="card_button_p">Like</p>
          </Box>
        </Link>
        <Link to="/ValueCard">
          <Box h={"80px"} bg="" className="profile_card_button">
            <p className="card_button_p">Values</p>
          </Box>
        </Link>
        <Link to="/ActivityCard">
          <Box h={"80px"} bg="" className="profile_card_button">
            <p className="card_button_p">Activity</p>
          </Box>
        </Link>
      </VStack>
    </>
  );
}
