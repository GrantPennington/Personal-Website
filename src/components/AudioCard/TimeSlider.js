import { Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillVolumeOffFill } from 'react-icons/bs'
import { BsFillVolumeUpFill } from 'react-icons/bs'


function TimeSlider() {
  return (
    <Flex direction='row'>
        <Flex justify={'center'} align='center' width={35} height={35} mr={2}>
            <Text>{'0:00'}</Text>
        </Flex>
        <Slider aria-label='slider-ex-4' defaultValue={0} width={400}>
        <SliderTrack bg='red.100'>
            <SliderFilledTrack bg='tomato' />
        </SliderTrack>
        <SliderThumb boxSize={3}>
            <Box bg={'main.black'}/>
        </SliderThumb>
        </Slider>
        <Flex justify={'center'} align='center' width={35} height={35} ml={2}>
            <Text>{'0:00'}</Text>
        </Flex>
    </Flex>
  )
}

export default TimeSlider