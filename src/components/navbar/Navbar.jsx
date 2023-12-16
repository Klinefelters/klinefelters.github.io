import { Flex, Heading, Spacer, useMediaQuery } from "@chakra-ui/react"
import CollapsableNavbar from "./CollapsableNavbar"
import NavList from "./NavList"

export default function Navbar() {
  const [isSmallerScreen] = useMediaQuery("(max-width: 600px)")

  return (
    <Flex as="nav" h="75px" px="4vw" bg="rgba(0, 0, 0, 0.25)" alignItems="center">
      <Heading as="h1" fontSize="2em" color="white">SK.</Heading>
      <Spacer />
      {isSmallerScreen ? <CollapsableNavbar /> : <NavList />}
    </Flex>
  )
}