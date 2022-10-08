import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, Input, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BasicDrawer({ content, isToggled, updater }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate = useNavigate()
    
    useEffect(() => {
        if(isToggled){
            onOpen()
        }
    }, [isToggled])

    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={() => updater(false) && onClose()}
          finalFocusRef={btnRef}
          size={'sm'}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Welcome!</DrawerHeader>
  
            <DrawerBody>
                    <Flex direction='column' mt={10}>
                        {content.map((item, index) => 
                        <Flex 
                            key={index}
                            justify={'center'}
                            align={'center'}
                            width={'100%'}
                            height={65}
                            bg={'main.white'}
                            mb={8}
                            _hover={{ bg: 'main.gray', cursor: 'pointer' }}
                            onClick={() => navigate(item.nav) && updater(false) && onClose()}
                        >
                            <Heading fontSize={'1.55rem'}>{item.label}</Heading>
                        </Flex>
                        )}
                </Flex>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={() => updater(false) && onClose()}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }