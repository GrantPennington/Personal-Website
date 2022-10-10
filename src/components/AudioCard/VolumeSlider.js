import { Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react'
import React from 'react'
import { BsFillVolumeOffFill } from 'react-icons/bs'
import { BsFillVolumeUpFill } from 'react-icons/bs'


function VolumeSlider() {
  return (
    <Flex direction='row'>
        <Flex justify={'center'} align='center' width={35} height={35} mr={2}>
            <BsFillVolumeOffFill size={'30px'}/>
        </Flex>
        <Slider aria-label='slider-ex-4' defaultValue={30} width={300}>
        <SliderTrack bg='red.100'>
            <SliderFilledTrack bg='tomato' />
        </SliderTrack>
        <SliderThumb boxSize={6}>
            <BsFillVolumeOffFill />
        </SliderThumb>
        </Slider>
        <Flex justify={'center'} align='center' width={35} height={35} ml={2}>
            <BsFillVolumeUpFill size={'30px'}/>
        </Flex>
    </Flex>
  )
}

export default VolumeSlider