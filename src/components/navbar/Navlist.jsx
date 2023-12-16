import { List, ListItem, useMediaQuery } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export default function NavList(){
  const [isLargerScreen] = useMediaQuery("(min-width: 600px)")

  return(
    <List color="brand.300" fontSize="1.2em" display="flex" flexDirection={isLargerScreen ? "row" : "column"}>
      <ListItem p="10px">
        <NavLink to="/">
          Home
        </NavLink>
      </ListItem>
      <ListItem p="10px">
        <NavLink to="/">
          About Me
        </NavLink>
      </ListItem>
      <ListItem p="10px">
        <NavLink to="/">
          Portfolio
        </NavLink>
      </ListItem>
    </List>
  )
}