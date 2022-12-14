import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import BasicDrawer from '../components/drawer/BasicDrawer'
import SideBar from '../components/drawer/SideBar';
import { FEATURE_PANEL_DATA, NAVBAR_DATA } from './../data/constants';
import { ArrowRightIcon } from '@chakra-ui/icons'
import FeaturePanel from '../components/FeaturePanel/FeaturePanel';
import { app, storage } from './../firebase.js';
import FileUpload from '../components/FileUploader/FileUpload';
import { useAudioFile } from './../context/AudioFileContext';
import { readFromDb } from '../data/db';

function Home() {
  const [isToggled, setIsToggled] = useState(false)
  const featureData = FEATURE_PANEL_DATA
  const { files } = useAudioFile()

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
          <FeaturePanel data={files}/>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home


/*

<Flex justify='center' align='center' direction='column'>
          {files.map((file, index) => 
            <Flex justify={'center'} align='center' direction={'column'} p={6}>
              <Text color={'main.white'}>{`File: ${file.song}`}</Text>
              <Text color={'main.white'}>{`URL: ${file.url}`}</Text>
            </Flex>
          )}
        </Flex>
*/