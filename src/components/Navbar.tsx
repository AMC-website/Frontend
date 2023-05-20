import { Box, Typography, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';

function Navbar() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };

    function handleClick() {
        setIsOpen(!isOpen);
    }
    const linkStyles = {
        textDecoration: 'none',
        '&:hover': {
            cursor: 'pointer',
        },
        color: 'white',
    };

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
                    <span
                        style={{
                            opacity:
                                hoveredIndex !== -1 && hoveredIndex !== 0
                                    ? '0.4'
                                    : '1',
                            transition: 'opacity 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {' '}
                        <Link sx={linkStyles}>
                            <Typography variant="h3" padding="10px">
                                Projects
                            </Typography>
                        </Link>
                    </span>
                    <span
                        style={{
                            opacity:
                                hoveredIndex !== -1 && hoveredIndex !== 1
                                    ? '0.4'
                                    : '1',
                            transition: 'opacity 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link sx={linkStyles} href="/events">
                            <Typography variant="h3" padding="10px">
                                Events
                            </Typography>
                        </Link>
                    </span>
                    <span
                        style={{
                            opacity:
                                hoveredIndex !== -1 && hoveredIndex !== 2
                                    ? '0.4'
                                    : '1',
                            transition: 'opacity 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link sx={linkStyles}>
                            <Typography variant="h3" padding="10px">
                                Members
                            </Typography>
                        </Link>
                    </span>
                    <span
                        style={{
                            opacity:
                                hoveredIndex !== -1 && hoveredIndex !== 3
                                    ? '0.4'
                                    : '1',
                            transition: 'opacity 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter(3)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link sx={linkStyles}>
                            <Typography variant="h3" padding="10px">
                                About
                            </Typography>
                        </Link>
                    </span>
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
