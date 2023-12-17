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
                setActiveSection(keys[currentIndex - 1], refs[keys[currentIndex - 1]]);
            } else if (event.key === 'ArrowDown' && currentIndex < keys.length - 1) {
                setActiveSection(keys[currentIndex + 1], refs[keys[currentIndex + 1]]);
            }
        };

        let touchStartY = null;

        const handleTouchStart = (event) => {
            touchStartY = event.touches[0].clientY;
        };

        const handleTouchMove = (event) => {
            event.preventDefault();
            if (!touchStartY) {
                return;
            }

            const touchEndY = event.touches[0].clientY;
            const deltaY = touchStartY - touchEndY;

            const keys = Object.keys(refs);
            const currentIndex = keys.indexOf(activeKey);

            if (deltaY > 0 && currentIndex < keys.length - 1) { // Swiped up
                setActiveSection(keys[currentIndex + 1], refs[keys[currentIndex + 1]]);
            } else if (deltaY < 0 && currentIndex > 0) { // Swiped down
                setActiveSection(keys[currentIndex - 1], refs[keys[currentIndex - 1]]);
            }

            touchStartY = null;
        };
        const callback = (event) => {
            event.preventDefault();

            const keys = Object.keys(refs);
            const currentIndex = keys.indexOf(activeKey);

            if (event.deltaY < 0 && currentIndex > 0) {
                setActiveSection(keys[currentIndex - 1], refs[keys[currentIndex - 1]]);
            } else if (event.deltaY > 0 && currentIndex < keys.length - 1) {
                setActiveSection(keys[currentIndex + 1], refs[keys[currentIndex + 1]]);
            }
        };

        const handleWheel = throttle(callback, 250);
    
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [activeKey, refs]);

    const setActiveSection = (key, ref) => {
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
                onClick={() => setActiveSection(key, ref)} 
                alignItems="center" 
                onMouseEnter={() => setActiveSection(key, ref)}
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