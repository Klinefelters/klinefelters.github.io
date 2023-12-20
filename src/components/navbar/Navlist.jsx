import { List, useMediaQuery } from "@chakra-ui/react"
import { FaHome, FaAddressBook, FaProjectDiagram } from "react-icons/fa";
import NavItem from "./NavItem";

export default function Navlist() {
  const [isLargerScreen] = useMediaQuery("(min-width: 600px)")


  return (
    <List color="brand.300" fontSize="1.2em" display="flex" flexDirection={isLargerScreen ? "row" : "column"}>
      <NavItem link="/" icon={<FaHome />} text="Home" />
      <NavItem link="/projects" icon={<FaProjectDiagram />} text="Projects" />
      <NavItem link="/resume" icon={<FaAddressBook />} text="Resume" />
      {/* <NavItem link="/about" icon={<FaProjectDiagram />} text="About" /> */}
    </List>
  )
}