import { Box, Heading, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../components/projects/projectData";

export default function Projects() {
  const [isSmallerScreen] = useMediaQuery("(max-width: 600px)")

  return (
    <>
      <Box >
        <Heading as="h1" size="2xl" textAlign="center" p="25px">Projects</Heading>
        <SimpleGrid w="100%" p="25px" minChildWidth={isSmallerScreen ? "90vw" : "480px"} spacingX='50px' spacingY='75px'>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}