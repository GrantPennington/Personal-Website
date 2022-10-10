import { Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { GiPauseButton } from 'react-icons/gi'
import { usePlayer } from '../../context/PlayerContext'
import TimeSlider from './TimeSlider'
import VolumeSlider from './VolumeSlider'

function AudioCard({ data }) {
    const [isPaused, setIsPaused] = useState(true)
    const { isPlaying, initializeAudio, selected } = usePlayer()
    const songTitle = data?.song.substring(0, data?.song.length-4)

    const handleAudioPlayback = () => {
        initializeAudio(data?.song, data?.url)
        setIsPaused(!isPaused)
    }

    return (
        <Flex width={600} height={325} bg={'main.white'} m={6} direction='column' borderRadius={'md'}>
            <Flex width={'100%'} height={100} justify='center' align='center' direction='column' mt={2}>
                <Heading>{songTitle}</Heading>
                <Text fontSize={'1.25rem'}>{'Grant Pennington'}</Text>
            </Flex>
            <Divider />
            <Flex width={'100%'} height={50} justify='center' align='center' mt={2}>
                <TimeSlider />
            </Flex>
            <Flex width={'100%'} height={50} justify='center' align='center' mt={8} mb={2}>
                <IconButton
                    bg={'main.gray'}
                    height={75}
                    width={75}
                    icon={!isPaused ? <GiPauseButton color='main.black' size={'40px'}/> : <FaPlay color='main.black' size={'40px'}/>} 
                    _hover={{ bg: 'main.gray', cursor: 'pointer' }}
                    onClick={handleAudioPlayback}
                />
            </Flex>
            <Flex width={'100%'} height={50} justify='center' align='center' mt={2}>
                <VolumeSlider />
            </Flex>
        </Flex>
    )
}

export default AudioCard