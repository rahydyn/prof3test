import React from "react"
import { Link } from 'react-router-dom'
import { Flex, Spacer, Box } from '@chakra-ui/react'

export function SettingPage() {
    return (
        <>

            <Flex>
                <Box p='4' bg='' className='return_button'>
                    <Link to="/MyprofilePage">キャンセル</Link>
                </Box>
                <Spacer />
                <Box p='4' bg='' className='profile_setting'>
                    <Link to="/SettingPage">完了</Link>
                </Box>
            </Flex>
            ここはプロフィール設定画面です
        </>
    )
}