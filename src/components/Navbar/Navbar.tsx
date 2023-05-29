import { Box, Typography, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import { useState,useEffect,useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import NavItem from './NavItem';
import { useRouter } from 'next/router';

function Path(props) {
    return (
        <motion.path
            fill="transparent"
            strokeWidth="2"
            stroke="white"
            strokeLinecap="round"
            {...props}
        ></motion.path>
    );
}

function Navbar() {
    const route = useRouter()
    const homeCondition = route.pathname==="/";
    const [stickyClass, setStickyClass] = useState(false);
    const ref = useRef(HTMLElement);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 740 ? setStickyClass(true) : setStickyClass(false);
    }
  };
    const breakPoint = useMediaQuery('(min-width:900px)');
    const breakPoint2 = useMediaQuery('(min-width:600px)');
    const boxVariants = {
        open: {
            height: 'auto',
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100,
                duration: 0.3,
            },
        },
        closed: {
            height: 0,
            opacity: breakPoint ? 1 : 0,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100,
                duration: 0.3,
            },
        },
    };

    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    function handleClick() {
        if (breakPoint) {
            setIsOpen(false);
        } else {
            setIsOpen(!isOpen);
        }
    }

    const [hoveredIndex, setHoveredIndex] = useState(-1);

    function handleMouseEnter(index) {
        setHoveredIndex(index);
    }

    function handleMouseLeave() {
        setHoveredIndex(-1);
    }

    const pages = ['Projects', 'Events', 'About'];

    return (
        <>
            <Box
            ref={ref}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="10px 5%"
                width={homeCondition?(breakPoint2 ? (stickyClass ?'90%':'70%') : (stickyClass ?'100%':'90%')):"90%"}
                marginX="auto"
                position=  { homeCondition? (stickyClass? "fixed":"relative"):"fixed" }
                top={0}
                
                zIndex="50"
                sx={{
                    boxShadow: '0 2.5px 40px 0 rgba(255,255,255, 0.2 )',
                    '&:hover': {
                        boxShadow: '0',
                    },
                    borderRadius: '10px',

                    transition:
                        'box-shadow 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95)',
                }}
                color={theme.palette.secondary.main}
                bgcolor={"black"}
            >
                <Box
                    sx={{
                        backdropFilter: 'blur(25px)',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -1,
                        borderRadius: '10px',
                        webkitBackdropFilter: 'blur( 4px )',
                        background: 'rgba(255,255,255,0.075)',
                    }}
                />

                <div
                    style={{
                        height: '100%',
                        minWidth: '20%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Link href="/" style={{ display: 'inline-block' }}>
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
                <div style={{ width: '50%' }}></div>
                <motion.div
                    style={{
                        display: breakPoint ? 'flex' : isOpen ? 'grid' : 'none',
                        gap: '4px',
                        position: breakPoint ? 'static' : 'absolute',
                        top: '100%',
                        left: '0',
                        width: breakPoint ? '55%' : '100%',
                        minHeight: '100%',
                        justifyContent: breakPoint ? 'space-between' : '',
                        alignItems: breakPoint ? 'center' : '',
                        padding: '5px',
                        backgroundColor: breakPoint ? '' : 'black',
                    }}
                    initial={false}
                    animate={isOpen ? 'open' : 'closed'}
                    variants={boxVariants}
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
                </motion.div>
                <Box display={`${breakPoint ? `none` : `block`}`}>
                    <Box sx={{ cursor: 'pointer' }} onClick={handleClick}>
                        <svg width="23" height="23" viewBox="0 0 23 23">
                            <Path
                                variants={{
                                    closed: { d: 'M 2 2.5 L 20 2.5' },
                                    open: { d: 'M 3 16.5 L 17 2.5' },
                                }}
                                animate={isOpen ? 'open' : 'closed'}
                            />
                            <Path
                                d="M 2 9.423 L 20 9.423"
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 },
                                }}
                                animate={isOpen ? 'open' : 'closed'}
                                transition={{ duration: 0.1 }}
                            />
                            <Path
                                variants={{
                                    closed: { d: 'M 2 16.346 L 20 16.346' },
                                    open: { d: 'M 3 2.5 L 17 16.346' },
                                }}
                                animate={isOpen ? 'open' : 'closed'}
                            />
                        </svg>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
