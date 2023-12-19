/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { List, ListItem, useMediaQuery, useTheme, Button } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { FaHome, FaAddressBook, FaProjectDiagram } from "react-icons/fa";

export default function Navlist() {
  const [isLargerScreen] = useMediaQuery("(min-width: 600px)")
  const theme = useTheme()

  const style = {
    py: `${isLargerScreen ? "0" : "2vh"}`,
    px: "4vw",
  }

  const linkStyle = css`
    position: relative;
    text-decoration: none;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: -5px;
      left: 0;
      background-color: ${theme.colors.brand[300]};
      transform-origin: bottom right;
      transition: transform .25s ease-out;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    &::after {
      transition: transform .25s ease-out;
      transform-origin: bottom left;
    }
  `;

  return (
    <List color="brand.300" fontSize="1.2em" display="flex" flexDirection={isLargerScreen ? "row" : "column"}>
      <ListItem sx={style}>
        <NavLink css={linkStyle} to="/">
          <Button size="xl" variant="unstlyed"><FaHome />{"\u00A0"}Home</Button>
        </NavLink>
      </ListItem>
      {/* <ListItem sx={style}>
        <NavLink css={linkStyle} to="/about">
          About
        </NavLink>
      </ListItem> */}
      <ListItem sx={style}>
        <NavLink css={linkStyle} to="/projects">
          <Button size="xl" variant="unstlyed"><FaProjectDiagram />{"\u00A0"}Projects</Button>
        </NavLink>
      </ListItem>
      <ListItem sx={style}>
        <NavLink css={linkStyle} to="/resume">
          <Button size="xl" variant="unstlyed"><FaAddressBook />{"\u00A0"}Resume</Button>
        </NavLink>
      </ListItem>
    </List>
  )
}