import { Flex, Spacer, useMediaQuery, Text, Box, Image } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

export default function Welcome () {
    const options = ["Engineering Student", "FRC Alumni and Mentor", "Etown RMI Club President"];
    const [isSmallerScreen] = useMediaQuery("(max-width: 600px)")
    
    if (isSmallerScreen) {
        return(
            <Box w="100%" h="90vh" p="2em" >
                <Flex>
                    <Spacer/>
                    <Box >
                        <Text fontSize="2xl">{`Hi there!`}</Text>
                        <Text fontSize="2xl">
                            I'm{"\u00A0"}
                            <Box as="span" color="brand.300">
                                Steven{"\u00A0"}Klinefelter
                            </Box>
                        </Text>
                        <Box fontSize="md" mt="10%" color="brand.300" mb="10%">
                            <Typewriter options={{strings: options, autoStart: true, loop: true, delay: 50, deleteSpeed: 50,}}/>
                        </Box>
                    </Box>
                    <Spacer/>
                </Flex>
                <Flex>
                    <Spacer />
                    <Image ml="10%" h="45vh" src="/home.png"></Image>
                    <Spacer />
                </Flex>
            </Box>
        );
    }else{
 
        return (
        <Flex alignItems="center" w="100%" h="90vh" p="2em">
            <Spacer />
            <Box >
                <Text fontSize="4xl">{`Hi there!`}</Text>
                <Text fontSize="4xl">
                    I'm{"\u00A0"}
                    <Text as="span" color="brand.300">
                        Steven{"\u00A0"}Klinefelter
                    </Text>
                </Text>
                <Box fontSize="2xl" color="brand.300" mt="10%" mb="10%">
                    <Typewriter options={{strings: options, autoStart: true, loop: true, delay: 50, deleteSpeed: 50,}}/>
                </Box>
            </Box>
            <Image ml="10%" w="35%" src="/home.png"></Image>
            <Spacer />
        </Flex>
        );
    }
}