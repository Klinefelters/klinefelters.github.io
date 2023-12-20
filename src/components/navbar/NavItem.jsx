/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ListItem, Button, useMediaQuery, useTheme } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


export default function NavItem({ link, icon, text }) {
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
    <ListItem sx={style}>
      <NavLink css={linkStyle} to={link}>
        <Button size="xl" variant="unstlyed">{icon}{"\u00A0"}{text}</Button>
      </NavLink>
    </ListItem>
  );
}