import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function NavItem({ label }) {
  return (
    <Flex width={150} height={75} bg={'main.secondary'} justify={'center'} align={'center'}>
        <Heading fontSize={'1.5rem'}>{label}</Heading>
    </Flex>
  )
}

export default NavItem