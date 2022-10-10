import { ArrowRightIcon } from '@chakra-ui/icons'
import { Flex, Heading, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import SideBar from './../components/drawer/SideBar';

function Music() {
    const [isToggled, setIsToggled] = useState(false)

    const handleChange = (value) => {
      setIsToggled(value)
    }
  
    return (
      <Flex overflowX={'hidden'} width={'100vw'} height={'100vh'} direction={'row'} bg={'main.black'} >
  
        <Flex width={45} height={'100%'} bg={'main.white'} align={'center'} justify={'center'}>
          <IconButton
            height={200}
            aria-label='Search database'
            icon={<ArrowRightIcon />}
            colorScheme={'main.white'}
            color={'main.black'}
            _hover={{ bg: '#c3c3c3', cursor: 'pointer' }}
            onClick={() => handleChange(true)}
          />
          {
          isToggled &&
            <SideBar 
              isToggled={isToggled}
              updater={handleChange}
            />
          }
        </Flex>
        
        <Flex justify='center' align='center' height={'100%'} width={'100%'}>
          <Flex>
            <Heading color={'main.white'}> Music Page </Heading>
          </Flex>
        </Flex>
  
      </Flex>
    )
}
export default Music