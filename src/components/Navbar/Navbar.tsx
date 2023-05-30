import { Box, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import NavItem from './NavItem';
import changeColorOnScroll from '../ChangeColorOnScroll';
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
    const [sticky, setSticky] = useState(false);
    const navbarRef = useRef<HTMLElement | null>(null);
    const [navbarOffsetTop, setNavbarOffsetTop] = useState(0);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const breakPoint3 = useMediaQuery('(min-width:950px)');
    const router = useRouter();
    const isAbout = router.pathname === '/about';
    const [titleColor, setTitleColor] = useState('rgb(0, 0, 0)');
    const [color, setColor] = useState('rgb(255, 255, 255)');
    const startPercentage = isAbout ? 0.66 : breakPoint3 ? 0.42 : 0.6;
    const endPercentage = isAbout ? 0.67 : breakPoint3 ? 0.44 : 0.62;

    useEffect(() => {
        const handleScroll = () => {
            changeColorOnScroll(
                startPercentage,
                endPercentage,
                { r: 154, g: 205, b: 50 },
                { r: 0, g: 0, b: 0 },
                setTitleColor
            );
            changeColorOnScroll(
                startPercentage,
                endPercentage,
                { r: 255, g: 255, b: 255 },

                { r: 0, g: 0, b: 0 },
                setColor
            );
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (navbarRef.current) {
            // get the initial offset of the navbar and its height
            setNavbarOffsetTop(navbarRef.current.offsetTop);
            setNavbarHeight(navbarRef.current.offsetHeight);
        }
    }, []);

    const checkNavbarPosition = () => {
        const scrollPosition = window.pageYOffset;
        if (navbarOffsetTop <= scrollPosition) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkNavbarPosition);
        return () => window.removeEventListener('scroll', checkNavbarPosition);
    }, [navbarOffsetTop]);

    const breakPoint = useMediaQuery('(min-width:900px)');
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
            {/* <div style={{ position: sticky ? 'fixed' : 'relative' }}> */}
            {sticky && <div style={{ height: `${navbarHeight}px` }} />}

            <Box
                ref={navbarRef}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="10px 5%"
                width="80%"
                // marginLeft="auto"
                // marginRight="auto"
                position={sticky ? 'fixed' : 'relative'}
                top={0}
                zIndex="50"
                left="50%"
                sx={{
                    boxShadow: '0 2.5px 40px 0 rgba(255,255,255, 0.2)',
                    '&:hover': {
                        boxShadow: '0',
                    },
                    borderRadius: '10px',
                    backdropFilter: 'blur(25px)',

                    webkitBackdropFilter: 'blur( 4px )',
                    background: 'rgba(255,255,255,0.075)',
                    transform: 'translate(-50%,0)',

                    transition:
                        'box-shadow 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95)',
                }}
            >
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
                        backgroundColor: breakPoint ? '' : 'rgba(0,0,0,0.02)',
                        backdropFilter: breakPoint ? '' : 'blur(25px)',
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
                                    color={
                                        router.pathname === '/events'
                                            ? 'white'
                                            : color
                                    }
                                    backgroundColor={
                                        router.pathname === '/events'
                                            ? theme.palette.secondary.main
                                            : titleColor
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
            {/* </div> */}
        </>
    );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
