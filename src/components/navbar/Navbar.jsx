import { Flex, Image, Spacer, useMediaQuery } from "@chakra-ui/react"
import CollapsableNavbar from "./CollapsableNavbar"
import Navlist from "./Navlist"

export default function Navbar() {
  const [isSmallerScreen] = useMediaQuery("(max-width: 600px)")

  return (
    <Flex 
      as="nav" 
      h="75px" 
      px="4vw" 
      bg="rgba(0, 0, 0, .5)" 
      alignItems="center" 
      backdropFilter="blur(50px)"
    >
      <Image src="/favicon.ico" boxSize="50px" opacity=".75"/>
      <Spacer />
      {isSmallerScreen ? <CollapsableNavbar /> : <Navlist />}
    </Flex>
  )
}