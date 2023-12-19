import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import { Box, useBreakpointValue } from '@chakra-ui/react';

export default function RootLayout() {
  const [height, setHeight] = useState(window.innerHeight);
  const heightValue = useBreakpointValue({ base: `${height}px`, md: "100vh" });

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
      h={heightValue}
      display="flex"
      flexDirection="column"
      overflow="hidden"
      position="relative"
      sx={{
        backgroundImage: "radial-gradient(circle, rgba(61, 181, 230, .25), black)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

      }}
    >
      <Box>
        <Navbar />
      </Box>
      <Box
        flex="1"
        overflow="auto"
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          'msOverflowStyle': 'none',
          'scrollbarWidth': 'none',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}