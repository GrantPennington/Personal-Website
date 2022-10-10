import React from 'react'
import { Flex } from '@chakra-ui/react';
import Crumb from './Crumb';

function Breadcrumbs({ data, current }) {

    return (
        <Flex width={150} height={45} align='center' justify={'space-evenly'} mt={6}>
            {data.map((item, index) => 
                <Crumb id={item.id} index={index} current={current}/>
            )}
        </Flex>
    )
}

export default Breadcrumbs