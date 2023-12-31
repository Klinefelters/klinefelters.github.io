import { Box, Flex, Heading, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../components/projects/projectData";

export default function Projects() {
  const minChildWidth = useBreakpointValue({ base: "55vw", md: "400px", lg: "35vw" });

  return (
    <Box>
      <Heading as="h1" size="2xl" textAlign="center" p="2.5vw">Projects</Heading>
      <Flex justifyContent="center" alignItems="center" m="2em">
        <SimpleGrid w="100%" p="2.5vw" minChildWidth={minChildWidth} spacingX='50px' spacingY='75px'>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}