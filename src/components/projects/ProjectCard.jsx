import { Box, Text, AspectRatio, Flex, ButtonGroup, Button, Spacer, Heading, useMediaQuery } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";

export default function ProjectCard({ title, description, buttons, video }) {
    const [isSmallerScreen] = useMediaQuery("(max-width: 600px)")
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Flex
            flexDirection="column"
            p="4" maxW="800px"
            maxH="70vh"
            color="white"
            bg="rgba(61, 181, 230, .25)"
            borderRadius="3xl"
        >
            <Heading textAlign="center" fontSize="3xl" m="2">{title}</Heading>
            <Spacer />
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
                borderRadius="2xl"
                overflow="hidden"
            >
                <AspectRatio ratio={isSmallerScreen ? 5 / 4 : 16 / 9} maxW="100%">
                    <video ref={videoRef} src={video} style={{ maxHeight: "65vh", maxWidth: "100%" }} loop muted />
                </AspectRatio>
                <Flex
                    position="absolute"
                    top="0"
                    right="0"
                    bottom="0"
                    left="0"
                    justifyContent="center"
                    alignItems="center"
                    bg={isHovered ? "transparent" : "rgba(0, 0, 0, 0.5)"}
                    backdropFilter={isHovered ? "none" : "blur(15px)"}
                    transition="background-color 1s, backdrop-filter 1s"
                >
                    <Text color="white" m="5" textAlign="center" fontSize="md" opacity={!isHovered ? 1 : 0} transition="opacity 1s">{description}</Text>
                </Flex>
            </Box >
            <Spacer />
            <ButtonGroup m="2" spacing="2">
                {buttons.map((button, index) => (
                    <Button fontSize="md" key={index} colorScheme="blue" as="a" href={button.url} target="_blank" >
                        <LinkIcon />{"\u00A0"}{button.name}
                    </Button>
                ))}
            </ButtonGroup>
        </Flex >
    );
}