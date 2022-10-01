import React from 'react';
import { Avatar } from '@chakra-ui/react'

export function FriendsComponent(){
    return(
        <>
        <div className='friend_component'>
            <div className='friend_photo'><Avatar src='https://bit.ly/broken-link' /></div>
            <div className='friend_name'>友達の名前</div>
        </div>
        </>
    )
}