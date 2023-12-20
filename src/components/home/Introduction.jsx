import { Flex, Spacer, useMediaQuery, Text, Box, Image, Heading } from "@chakra-ui/react";

export default function Introduction() {
    const [isSmallerScreen] = useMediaQuery("(max-width: 600px)")

    if (isSmallerScreen) {
        return (
            <Box w="calc(100vw - 50px)" h="100%" p="2em" >
            </Box>
        );
    } else {

        return (
            <Box alignItems="center" w="100%" h="90vh" p="2em">
                <Heading as="h1" size="2xl" textAlign="center" pt="25px">LET ME INTRODUCE MYSELF</Heading>

            </Box>
        );
    }
}