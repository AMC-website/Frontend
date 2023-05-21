import { Box, Typography, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import NavItem from './NavItem';

function Navbar() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    function handleClick() {
        setIsOpen(!isOpen);
    }

    const [hoveredIndex, setHoveredIndex] = useState(-1);

    function handleMouseEnter(index) {
        setHoveredIndex(index);
    }

    function handleMouseLeave() {
        setHoveredIndex(-1);
    }

    const pages = ['Projects', 'Events', 'Members', 'About'];

    return (
        <>
            <Box
                height="10vh"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="10px 60px"
                width="50%"
                marginX="auto"
                sx={{
                    backdropFilter: 'blur(30px)',
                }}
                color={theme.palette.secondary.main}
                bgcolor="rgba(255,255,255,0.05)"
            >
                <Typography variant="h1">Hello</Typography>
                <Box
                    display={breakPoint ? 'flex' : isOpen ? 'grid' : 'none'}
                    gap="4px"
                    position={breakPoint ? 'static' : 'absolute'}
                    top="100%"
                    left="0"
                    width={`${breakPoint ? '70%' : '100%'}`}
                    minHeight="100%"
                    justifyContent={breakPoint ? 'space-between' : ''}
                    alignItems={breakPoint ? 'center' : ''}
                    padding="5px"
                >
                    {pages.map((title, index) => {
                        return (
                            <span
                                key={index} // Add a unique key for each iteration
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <NavItem
                                    title={title}
                                    isHovered={index === hoveredIndex}
                                    onSomethingElse={
                                        index !== hoveredIndex &&
                                        hoveredIndex !== -1
                                    }
                                />
                            </span>
                        );
                    })}
                </Box>
                <Box display={`${breakPoint ? `none` : `block`}`}>
                    <CloseIcon
                        onClick={() => {
                            handleClick();
                        }}
                    />
                </Box>
            </Box>
        </>
    );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
