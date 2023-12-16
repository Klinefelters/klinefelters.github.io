import { Flex, Heading, Spacer, IconButton, useMediaQuery } from "@chakra-ui/react"
import CollapsableNavbar from "./CollapsableNavbar"
import NavList from "./NavList"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const [isSmallerScreen] = useMediaQuery("(max-width: 600px)")

  return (
    <Flex as="nav" p="1em" bg = "brand.900">
      <Heading as="h1" fontSize="2em" p="5px" color="white">Steven K.</Heading>
      <Spacer />
      {isSmallerScreen ? <CollapsableNavbar /> : <NavList />}
    </Flex>
  )
}