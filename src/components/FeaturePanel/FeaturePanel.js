import React, { useState } from 'react'
import { Flex, Heading, IconButton, Box, Text } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, SmallCloseIcon } from '@chakra-ui/icons';
import Breadcrumbs from './Breadcrumbs';
import { usePlayer } from './../../context/PlayerContext';
import { FaPlay } from 'react-icons/fa'
import { GiPauseButton } from 'react-icons/gi'
  

function FeaturePanel({ data }) {
    const [current, setCurrent] = useState(0)
    const length = data.length-1
    const isLastElement = current===length
    const isFirstElement = !current

    const  { isPlaying, initializeAudio } = usePlayer()

    const handleForward = () => {
        if(!isLastElement){
            setCurrent(current + 1)
        }
    }

    const handleBack = () => {
        if(!isFirstElement){
            setCurrent(current - 1)
        }
    }

    const handleAudioPlayback = () => {
        initializeAudio(data[current]?.song, data[current]?.url)
    }

    return (
        <Flex direction='column' align='center' justify='center'>
        <Flex direction='row' width={1300} height={600} justify={'space-evenly'} align='center'>
            <Flex>
                {!isFirstElement ?
                    <IconButton 
                        bg={'main.black'}
                        height={75}
                        width={75}
                        
                        icon={<ArrowLeftIcon w={30} h={30} color={'main.white'}/>} 
                        _hover={{ bg: 'main.gray', cursor: 'pointer' }}
                        onClick={handleBack}
                    />
                    : 
                    <Box height={75} width={75} />
                }
            </Flex>

            <Flex width={1000} bg={'main.white'} height={600} justify={'center'} align='center' borderRadius={'md'} direction='column'>
                <Flex>
                    <Heading> {data[current]?.song.substring(0, data[current]?.song.length-4)} </Heading>
                </Flex>
                <Flex>
                    <Text fontSize={'1.25rem'} fontWeight={'thin'}>Grant Pennington</Text>
                </Flex>
                <Flex>
                    <Text mt={3}>{data[current]?.url}</Text>
                </Flex>
                <Flex>
                    <IconButton 
                        bg={'main.gray'}
                        height={75}
                        width={75}
                        icon={isPlaying ? <GiPauseButton color='main.black' size={'40px'}/> : <FaPlay color='main.black' size={'40px'}/>} 
                        _hover={{ bg: 'main.gray', cursor: 'pointer' }}
                        onClick={handleAudioPlayback}
                        //FaPlay GiPauseButton
                    />
                </Flex>
            </Flex>

            <Flex>
                {!isLastElement ?
                    <IconButton 
                        bg={'main.black'}
                        height={75}
                        width={75}
                        icon={<ArrowRightIcon w={30} h={30} color={'main.white'}/>} 
                        _hover={{ bg: 'main.gray', cursor: 'pointer' }}
                        onClick={handleForward}
                    />
                    : 
                    <Box height={75} width={75} />
                }
            </Flex>
        </Flex>
        <Breadcrumbs data={data} current={current}/>
        </Flex>
    )
}

export default FeaturePanel