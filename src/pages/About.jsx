import { Box, Flex, Spacer, Heading } from "@chakra-ui/react";
import { useRef } from "react";
import Scrollbar from "../components/Scrollbar";
import UnderConstruction from "../components/UnderConstruction";


export default function About() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  // Add more refs as needed

  const refs = {
      section1: ref1,
      section2: ref2,
      section3: ref3,
      section4: ref4,
      // Add more key-ref pairs as needed
  }

  return (
    <>
      <Scrollbar refs={refs} />
      <Box ref={ref1} w="100%" h="90vh">
        <Flex w="100%">
          <Spacer />
          <Heading>About Me</Heading>
          <Spacer />
        </Flex>
        <UnderConstruction />
      </Box>
      <Box ref={ref2} w="100%" h="90vh">
        <UnderConstruction />
      </Box>
      <Box ref={ref3} w="100%" h="90vh">
        <UnderConstruction />
      </Box>
      <Box ref={ref4} w="100%" h="90vh">
        <UnderConstruction />
      </Box>
    </>
  );
}
