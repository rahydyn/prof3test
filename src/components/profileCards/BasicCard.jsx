import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FeedbackContents } from "../homePages/FeedbackContents";
import { KeywordsContents } from "../myPages/KeywordsContents";
import { ProfileIcon } from "../myPages/ProfileIcon";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import { SettingsIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { ProfileCardContents } from "../myPages/ProfileCardContents";

export function BasicCard() {
  return (
    <>
      <div className="profilepage_top">
        <Flex>
          <Box p="4" bg="" className="return_button">
            <Link to="/MyProfilePage">
              <ChevronLeftIcon boxSize={6} />
            </Link>
          </Box>
          <Spacer />
          <Box p="4" bg="" className="profile_setting">
            <Link to="/SettingPage">
              <SettingsIcon boxSize={6} />
            </Link>
          </Box>
        </Flex>
      </div>

      <div className="profile_info">
        <div className="profile_icon">
          <ProfileIcon />
        </div>
        <div className="profile_name">sayaka yamato</div>
      </div>
      <Tabs>
        <TabList className="profile_tablist">
          <Tab className="tab">profile</Tab>
          <Tab className="tab">keywords</Tab>
          <Tab className="tab">feedback</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ProfileCardContents />
          </TabPanel>

          <TabPanel>
            <KeywordsContents />
          </TabPanel>

          <TabPanel>
            <FeedbackContents />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
