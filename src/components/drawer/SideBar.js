import React from 'react'
import BasicDrawer from './BasicDrawer';
import { NAVBAR_DATA } from './../../data/constants';
import { Flex, Heading } from '@chakra-ui/react';

function SideBar({ isToggled, updater }) {
    const navData = NAVBAR_DATA

    return (
        <div>
            <BasicDrawer content={navData} isToggled={isToggled} updater={updater} />
        </div>
    )
}

export default SideBar