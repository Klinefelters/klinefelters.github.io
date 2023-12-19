import { HamburgerIcon } from "@chakra-ui/icons"
import Navlist from "./Navlist"
import {
  Drawer,
  DrawerBody,
  IconButton,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import React from "react"


export default function CollapsableNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
      <IconButton ref={btnRef} colorScheme='blue' size="lg" onClick={onOpen} icon={<HamburgerIcon/>}>
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay colorScheme="blue"/>
        <DrawerContent bg="rgba(0,0,0,.75)" backdropFilter="blur(35px)">
          <DrawerCloseButton />
          <DrawerHeader color="brand.300">Navigation</DrawerHeader>
          <DrawerBody>
            <Navlist />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}