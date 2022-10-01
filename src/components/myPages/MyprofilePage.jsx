import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FeedbackContents } from "../homePages/FeedbackContents";
import { KeywordsContents } from "./KeywordsContents";
import { ProfileTabContents } from "./ProfiileTabContents";
import { ProfileIcon } from "./ProfileIcon";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import { SettingsIcon, ChevronLeftIcon } from "@chakra-ui/icons";

export function MyProfilePage() {
  return (
    <>
      <div className="profilepage_top">
        <Flex>
          <Box p="4" bg="" className="return_button">
            <Link to="/">
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

        <TabPanels className="profile_contents_space">
          <TabPanel>
            <ProfileTabContents />
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
