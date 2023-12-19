import { Box, Heading, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../projectData";
import Footer from "../components/Footer";

export default function Projects() {
  const [isSmallerScreen] = useMediaQuery("(max-width: 600px)")

  return (
    <>
      <Box overflowY="auto" h="100%" sx={{
        '&::-webkit-scrollbar': {
          display: 'auto',
        },
        'msOverflowStyle': 'auto',
        'scrollbarWidth': 'auto',
      }}>
        <Heading as="h1" size="2xl" textAlign="center" p="25px">Projects</Heading>
        <SimpleGrid w="100%" p="25px" minChildWidth={isSmallerScreen ? "90vw" : "480px"} spacingX='50px' spacingY='75px'>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </SimpleGrid>

        <Footer />
      </Box>
    </>
  );
}