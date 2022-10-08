import { Flex } from '@chakra-ui/react'
import React from 'react'
import { NAVBAR_DATA } from '../../data/constants'
import NavItem from './NavItem'

function Navbar() {
    const navData = NAVBAR_DATA
    
    return (
        <Flex width={265} height={'100vh'} bg={'main.primary'}>
            {navData.map((item, index) => 
                <NavItem key={index} label={item} />
            )}
        </Flex>
    )
}

export default Navbar