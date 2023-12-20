/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link, Flex, Text, useTheme } from "@chakra-ui/react"
import { FaLinkedin, FaGithubSquare, FaAt } from "react-icons/fa";

export default function Footer() {
  const theme = useTheme();

  const linkStyle = css`
    color: white;
    transition: color 0.5s;

    &:hover {
      color: ${theme.colors.brand[300]};
    }
  `;

  return (
    <Flex
      direction="column"
      as="footer"
      h="75px" px="4vw"
      bg="rgba(61, 181, 230, .25)"
      alignItems="center"
      backdropFilter="blur(50px)"
      mt="25px"
    >
      <Flex m="2">
        <Link css={linkStyle} href="https://www.linkedin.com/in/klinefelters/" isExternal mx="2">
          <FaLinkedin size="30px" />
        </Link>
        {/* <Link css={linkStyle} href="mailto:klinefelters@etown.edu" isExternal mx="2">
          <FaAt size="30px" />
        </Link> */}
        <Link css={linkStyle} href="https://www.github.com/klinefelters/" isExternal mx="2">
          <FaGithubSquare size="30px" />
        </Link>
      </Flex>

      <Text fontSize="md" color="white" >Copyright © 2023 SK</Text>

    </Flex>
  )
}