import { List, ListItem, useMediaQuery } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export default function NavList(){
  const [isLargerScreen] = useMediaQuery("(min-width: 600px)")
  
  const style = {
    py:`${isLargerScreen ? "0" : "2vh"}`,
    px:"4vw",
  }

  return(
    <List color="brand.300" fontSize="1.2em" display="flex" flexDirection={isLargerScreen ? "row" : "column"}>
      <ListItem sx={style}>
        <NavLink to="/">
          Home
        </NavLink>
      </ListItem>
      <ListItem sx={style}>
        <NavLink to="/about">
          About
        </NavLink>
      </ListItem>
      <ListItem sx={style}>
        <NavLink to="/projects">
          Projects
        </NavLink>
      </ListItem>
    </List>
  )
}