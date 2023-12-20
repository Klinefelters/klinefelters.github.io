import { useState, useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Footer from '../components/Footer';

export default function RootLayout() {
  const [height, setHeight] = useState(window.innerHeight);
  const heightValue = useBreakpointValue({ base: `${height}px`, md: "100vh" });
  const [init, setInit] = useState(false);
  const options = useMemo(
    () => ({
      name: "Parallax",
      particles: {
        number: {
          value: 100,
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.5,
          },
          animation: {
            enable: true,
            speed: .5,
            sync: false,
          },
        },
        size: {
          value: {
            min: .1,
            max: 2,
          },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
      },
      background: {
        color: "#transparent",
      },
    }),
    [],
  );

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


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
        backgroundColor: "rgba(0, 0, 0, .5)",
        backgroundImage: "radial-gradient(circle, rgba(61, 181, 230, .125), rgba(49, 0, 71, .25), transparent)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {init &&
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        />}
      <Box>
        <Navbar />
      </Box>
      <Box
        overflow="auto"
        zIndex={1}
      >
        <Box minH={`calc(${heightValue} - 175px)`}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}