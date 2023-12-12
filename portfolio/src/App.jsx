import {ChakraProvider, extendTheme} from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#0A2240',
    600: '#004B98',
    300: '#3DB5E6',
    grey: '#C8C8C8',
    green: '#61BF1A',
    red: '#E1261C',
  },
}


const fonts = {
  body: 'Tahoma',
  heading: 'Courier New'
}

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors, 
  fonts,
});

// if (localStorage.getItem('chakra-ui-color-mode') === 'light') localStorage.removeItem('chakra-ui-color-mode');

export default function App() {

  return (
    <ChakraProvider theme={theme}>
    </ChakraProvider>
  );
}