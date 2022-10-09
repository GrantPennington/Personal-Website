import React, { useEffect, useState } from 'react'
import { Box, Flex } from '@chakra-ui/react';

function Crumb({ id, index, current }) {
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        if(current===index){
            setSelected(true)
        } else {
            setSelected(false)
        }
    }, [current, index])

    return (
        <Flex width={40} height={40} justify='center' align='center'
            key={id}
        >
            <Box width={17} height={17} bg={selected ? 'main.primary' : 'main.gray'} borderRadius={'50%'} 
            />
        </Flex>
    )
}

export default Crumb