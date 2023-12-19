import { Box, Text, AspectRatio, Flex, ButtonGroup, Button } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";

export default function ProjectCard({ title, description, buttons, video }) {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box p="4" color="white" bg="rgba(61, 181, 230, .25)" borderRadius="3xl">
            <Text fontSize="xl" mb="2">{title}</Text>
            <Box 
                onMouseEnter={() => {
                    videoRef.current.play();
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    videoRef.current.pause();
                    setIsHovered(false);
                }}
                position="relative"
                maxH="65vh"
            >
                <AspectRatio ratio={16/9} maxH="65vh" maxW="100%">
                    <video ref={videoRef} src={video} style={{maxHeight: "65vh", maxWidth: "100%", objectFit: "cover"}} loop muted />
                </AspectRatio>
                <Flex 
                    position="absolute" 
                    top="0" 
                    right="0" 
                    bottom="0" 
                    left="0" 
                    justifyContent="center" 
                    alignItems="center" 
                    bg={isHovered ? "transparent" : "rgba(0, 0, 0, 0.25)"}
                    backdropFilter={isHovered ? "none" : "blur(5px)"}
                    transition="background-color 0.5s, backdrop-filter 0.5s"
                >
                    <Text color="white" opacity={!isHovered ? 1 : 0} transition="opacity 0.5s">{description}</Text>
                </Flex>
            </Box>
            <ButtonGroup mt="2" spacing="2">
                {buttons.map((button, index) => (
                    <Button key={index} as="a" href={button.url} isExternal ><LinkIcon/>{"\u00A0"}{button.name}</Button>
                ))}
            </ButtonGroup>
        </Box>
    );
}