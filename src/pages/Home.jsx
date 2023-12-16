import { Box, Text } from "@chakra-ui/react";
import { useRef } from "react";
import Scrollbar from "../components/Scrollbar";


export default function Home() {
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
      <Box ref={ref1} w="90vw" h="90vh">
        <Text>Section 1</Text>
      </Box>
      <Box ref={ref2} w="90vw" h="90vh">
        <Text>Section 2</Text>
      </Box>
      <Box ref={ref3} w="90vw" h="90vh">
        <Text>Section 3</Text>
      </Box>
      <Box ref={ref4} w="90vw" h="90vh">
        <Text>Section 4</Text>
      </Box>
    </>
  );
}
