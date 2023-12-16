import { Circle, VStack, Text, Flex } from "@chakra-ui/react"
import { useState, useEffect } from "react"

export default function Scrollbar({ refs }) {
    const [hoveredKey, setHoveredKey] = useState(null);
    const [activeKey, setActiveKey] = useState(Object.keys(refs)[0]);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            event.preventDefault();

            const keys = Object.keys(refs);
            const currentIndex = keys.indexOf(activeKey);
        
            if (event.key === 'ArrowUp' && currentIndex > 0) {
                handleClick(keys[currentIndex - 1], refs[keys[currentIndex - 1]]);
            } else if (event.key === 'ArrowDown' && currentIndex < keys.length - 1) {
                handleClick(keys[currentIndex + 1], refs[keys[currentIndex + 1]]);
            }
        };
    
        let lastExecution = Date.now();

        const handleWheel = (event) => {
            event.preventDefault();

            const keys = Object.keys(refs);
            const currentIndex = keys.indexOf(activeKey);

            if (Date.now() - lastExecution > 250) {
                if (event.deltaY < 0 && currentIndex > 0) {
                    handleClick(keys[currentIndex - 1], refs[keys[currentIndex - 1]]);
                    lastExecution = Date.now();
                } else if (event.deltaY > 0 && currentIndex < keys.length - 1) {
                    handleClick(keys[currentIndex + 1], refs[keys[currentIndex + 1]]);
                    lastExecution = Date.now();
                }
            }
        };
    
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
        <VStack spacing={4}>
            {Object.entries(refs).map(([key, ref]) => (
            <Flex 
                key={key} 
                onClick={() => handleClick(key, ref)} 
                alignItems="center" 
                onMouseEnter={() => handleClick(key, ref)}
                onMouseLeave={() => setHoveredKey(null)}
            >
                <Text mr="1em" opacity={(activeKey === key && hovered )||hoveredKey === key ? 1 : 0}>{key}</Text>
                <Circle 
                    size="15px" 
                    bg={activeKey === key ? "brand.300" : "brand.900"}
                    mr="1em"
                />
            </Flex>
            ))}
        </VStack>
        </Flex>
    )
}