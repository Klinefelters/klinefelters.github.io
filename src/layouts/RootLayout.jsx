import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import { Box } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Box 
      h="100vh" 
      display="flex" 
      flexDirection="column" 
      overflow="hidden" 
      position="relative"
      sx={{
        backgroundImage:"radial-gradient(circle, rgba(61, 181, 230, .25), black)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box>
        <Navbar />
      </Box>
      <Box flex="1" overflow="auto" sx={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        'msOverflowStyle': 'none',
        'scrollbarWidth': 'none',
      }}>
        <Outlet />
      </Box>
    </Box>
  )
}