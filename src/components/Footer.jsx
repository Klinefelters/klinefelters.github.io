import { Flex, Image, Spacer, useMediaQuery } from "@chakra-ui/react"

export default function Footer() {
  const [isSmallerScreen] = useMediaQuery("(max-width: 600px)")

  return (
    <Flex as="nav" h="75px" px="4vw" bg="rgba(61, 181, 230, .25)" alignItems="center" backdropFilter="blur(50px)">
      <Image src="/favicon.ico" boxSize="50px" />
      <Spacer />
      {isSmallerScreen ? <CollapsableNavbar /> : <Navlist />}
    </Flex>
  )
}