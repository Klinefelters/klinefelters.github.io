import { Circle, VStack, Text, Flex, Spacer } from "@chakra-ui/react"
import { useState, useEffect } from "react"

export default function Scrollbar({ refs }) {
    const [hoveredKey, setHoveredKey] = useState(null);
    const [activeKey, setActiveKey] = useState(Object.keys(refs)[0]);
    const [hovered, setHovered] = useState(false);

    function throttle(fn, wait) {
        var time = Date.now();
    
        return function(event) {
          event.preventDefault();
          if (Math.abs(event.deltaY) < 4) return
    
          if ((time + wait - Date.now()) < 0) {
            fn(event);
            time = Date.now();
          }else{
            return
          }
        }
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            const keys = Object.keys(refs);
            const currentIndex = keys.indexOf(activeKey);
        
            if (event.key === 'ArrowUp' && currentIndex > 0) {
                handleClick(keys[currentIndex - 1], refs[keys[currentIndex - 1]]);
            } else if (event.key === 'ArrowDown' && currentIndex < keys.length - 1) {
                handleClick(keys[currentIndex + 1], refs[keys[currentIndex + 1]]);
            }
        };


        const callback = (event) => {
            event.preventDefault();

            const keys = Object.keys(refs);
            const currentIndex = keys.indexOf(activeKey);

            if (event.deltaY < 0 && currentIndex > 0) {
                handleClick(keys[currentIndex - 1], refs[keys[currentIndex - 1]]);
            } else if (event.deltaY > 0 && currentIndex < keys.length - 1) {
                handleClick(keys[currentIndex + 1], refs[keys[currentIndex + 1]]);
            }
        };

        const handleWheel = throttle(callback, 250);
    
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('wheel', handleWheel, { passive: false });
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('wheel', handleWheel);
        };
    }, [activeKey, refs]);

    const handleClick = (key, ref) => {
        setActiveKey(key)
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <Flex 
            position="fixed" 
            right="0" 
            h="calc(100vh - 70px)" 
            alignItems="center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
        <VStack spacing={4} alignItems="end">
            {Object.entries(refs).map(([key, ref]) => (
            <Flex 
                key={key} 
                onClick={() => handleClick(key, ref)} 
                alignItems="center" 
                onMouseEnter={() => handleClick(key, ref)}
                onMouseLeave={() => setHoveredKey(null)}
            >
                <Text
                    mr="1em" 
                    opacity={(hovered === true && activeKey === key )||hoveredKey === key ? 1 : 0}
                >
                    {key}
                </Text>

                <Circle 
                    size={hovered ? "10px" : "10px" }
                    bg={activeKey === key ? "brand.300" : "grey"}
                    mr="1em"
                />
            </Flex>
            ))}
        </VStack>
        </Flex>
    )
}