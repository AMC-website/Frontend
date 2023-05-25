import { Box, Typography, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import NavItem from './NavItem';

function Navbar() {
    const breakPoint = useMediaQuery('(min-width:900px)');
    const breakPoint2 = useMediaQuery('(min-width:600px)');

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
                padding="10px 5%"
                width={breakPoint2 ? '70%' : '90%'}
                marginX="auto"
                color={theme.palette.secondary.main}
                position="relative"
                zIndex="10"
                sx={{
                    boxShadow: '0 8px 100px 0 rgba(255,255,255, 0.37 )',
                    '&:hover': {
                        boxShadow: '0',
                    },
                    transition:
                        'box-shadow 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95)',
                }}
            >
                <Box
                    sx={{
                        backdropFilter: 'blur(25px)',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -1,
                        borderRadius: '10px',
                        webkitBackdropFilter: 'blur( 4px )',
                        background: 'rgba(255,255,255,0.075)',
                    }}
                />
                {/* <motion.div
                    style={{
                        height: '30%',
                        width: '10%',
                        backgroundColor: '#9acd32',
                        zIndex: -10,
                        position: 'absolute',
                        top: '35%',
                    }}
                    animate={{
                        left: ['5%', '85%'],
                        width: ['6%', '10%', '6%'],
                    }}
                    transition={{
                        duration: 7,
                        ease: [0.4, 0, 0.6, 1],
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                /> */}
                <div
                    style={{
                        height: '100%',
                        minWidth: '20%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Link href="/">
                        <img
                            src="logo.png"
                            alt="drone image"
                            style={{
                                objectFit: 'cover',
                                height: '30%',
                                width: '30%',
                            }}
                        />
                    </Link>
                </div>
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
