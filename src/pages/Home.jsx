import { Box, Highlight, Text } from "@chakra-ui/react";
import Welcome from "../components/home/Welcome";
import { useRef } from "react";
import Scrollbar from "../components/Scrollbar";
import UnderConstruction from "../components/UnderConstruction";

const Home = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const refs = {
    "Welcome": ref1,
    "Introduction": ref2,
    "Highlights": ref3,
  };

  return (
    <>
      <Scrollbar refs={refs} />

      <Box ref={ref1} w="100%" h="90vh">
        <Welcome />
      </Box>
      <Box ref={ref2} w="100%" h="90vh">
        <UnderConstruction />
      </Box>
      <Box ref={ref3} w="100%" h="90vh">
        <UnderConstruction />
      </Box>
    </>
  );
};

export default Home;