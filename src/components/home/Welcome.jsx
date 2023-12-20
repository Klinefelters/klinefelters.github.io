import { Flex, Spacer, useMediaQuery, Text, Box, Image } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

export default function Welcome() {
    const options = [
        "Engineering Student",
        "FRC Alumni and Mentor",
        "Robotics Hobbyist",
        "Amateur Programmer",
        "Etown RMI Club President"
    ];
    const [isSmallerScreen] = useMediaQuery("(max-width: 600px)")

    if (isSmallerScreen) {
        return (
            <Box p="2em" >
                <Flex>
                    <Spacer />
                    <Box justifyItems="center">
                        <Text fontSize="2xl">{`Hi there!`}</Text>
                        <Text fontSize="2xl">
                            I'm{"\u00A0"}
                            <Box as="span" color="brand.300">
                                Steven{"\u00A0"}Klinefelter
                            </Box>
                        </Text>
                        <Box fontSize="md" mt="10%" color="brand.300" mb="10%">
                            <Typewriter options={{ strings: options, autoStart: true, loop: true, delay: 50, deleteSpeed: 50, }} />
                        </Box>
                    </Box>
                    <Spacer />
                </Flex>
                <Flex>
                    <Spacer />
                    <Image maxW="100%" maxH="50vh" src="/home.png"></Image>
                    <Spacer />
                </Flex>
            </Box>
        );
    } else {

        return (
            <Flex direction="column" justifyContent="center" h="calc(100vh - 175px)" >
                <Flex justifyContent="center" alignContent="center">
                    <Flex direction="column" justifyContent="center" >
                        <Text fontSize="4xl">{`Hi there!`}</Text>
                        <Text fontSize="4xl">
                            I'm{"\u00A0"}
                            <Text as="span" color="brand.300">
                                Steven{"\u00A0"}Klinefelter
                            </Text>
                        </Text>
                        <Box fontSize="2xl" color="brand.300" mt="10%">
                            <Typewriter options={{ strings: options, autoStart: true, loop: true, delay: 50, deleteSpeed: 50, }} />
                        </Box>
                    </Flex>
                    <Image ml="10%" maxW="35%" maxH="75vh" src="/home.png"></Image>
                </Flex>
            </Flex>
        );
    }
}