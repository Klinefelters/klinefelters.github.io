import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import { Box } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Box h="100vh" display="flex" flexDirection="column" overflow="hidden">
      <Box>
        <Navbar />
      </Box>
      <Box flex="1" overflow="auto" sx={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      }}>
        <Outlet />
      </Box>
      
    </Box>
  )
}