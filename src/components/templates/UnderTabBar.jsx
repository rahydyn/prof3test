import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FeedContents } from '../feedPages/FeedContents'
import { FriendsContents } from '../friendPages/FriendsContents'
import { HomeContents } from '../homePages/HomeContents'
import { NewFriendModal } from '../friendPages/NewFriendModal'
import { Flex, Spacer } from '@chakra-ui/react'
import { Link, } from "react-router-dom";
import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'
import { MdHome } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import { MdGroup } from "react-icons/md";




export function UnderTabBar() {
    return (
        <>
            <div className='top_bar'>
                <Flex>
                    <Link to="/" className='service_name'>Profile3.0</Link>
                    <Spacer />

                    <Link to="/MyProfilePage">
                        <Wrap className='top_profile_icon'>
                            <WrapItem>
                                <Avatar name='Dan Abrahmov' />
                            </WrapItem>

                        </Wrap>
                    </Link>
                </Flex>
            </div>
            <Tabs variant='soft-rounded' colorScheme='whiteAlpha' isFitted='true' className='under_tab_bar'>
                <TabPanels>
                    <TabPanel>
                        <HomeContents />
                    </TabPanel>
                    <TabPanel>
                        <FeedContents />
                    </TabPanel>
                    <TabPanel>
                        <p className='friend'>Friend</p>
                        <FriendsContents />
                        <NewFriendModal />
                    </TabPanel>
                </TabPanels>
                <TabList className='under_nav_bar'>
                    <Tab color={"yellow.50"}><MdHome />Home</Tab>
                    <Tab color={"yellow.50"}><MdOutlineArticle />Feed</Tab>
                    <Tab color={"yellow.50"}><MdGroup />Friend</Tab>
                </TabList>
            </Tabs>
        </>
    )
}
