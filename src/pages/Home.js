import { Box, Flex, Heading, IconButton } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import BasicDrawer from '../components/drawer/BasicDrawer'
import SideBar from '../components/drawer/SideBar';
import { FEATURE_PANEL_DATA, NAVBAR_DATA } from './../data/constants';
import { ArrowRightIcon } from '@chakra-ui/icons'
import FeaturePanel from '../components/FeaturePanel/FeaturePanel';

function Home() {
  const [isToggled, setIsToggled] = useState(false)
  const featureData = FEATURE_PANEL_DATA

  const handleChange = (value) => {
    setIsToggled(value)
  }

  return (
    <Flex overflowX={'hidden'} width={'100vw'} height={'100vh'} direction={'row'} bg={'main.black'} >

      <Flex width={45} height={'100%'} bg={'main.white'} align={'center'} justify={'center'}>
        <IconButton
          height={200}
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
      
      <Flex justify='center' align='center' height={'100%'} width={'100%'} direction='column'>
        <Flex justify='center' align='center'>
          <FeaturePanel data={featureData}/>
        </Flex>
      </Flex>

    </Flex>
  )
}

export default Home