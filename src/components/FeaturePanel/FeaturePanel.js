import React, { useState } from 'react'
import { Flex, Heading, IconButton, Box } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import Breadcrumbs from './Breadcrumbs';


function FeaturePanel({ data }) {
    const [current, setCurrent] = useState(0)
    const length = data.length-1
    const isLastElement = current===length
    const isFirstElement = !current


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

            <Flex width={1000} bg={'main.white'} height={600} justify={'center'} align='center' borderRadius={'md'}>
                <Heading> {data[current].label} </Heading>
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