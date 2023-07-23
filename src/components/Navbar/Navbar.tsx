import { Backdrop, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import NavItem from './NavItem';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// import {
//     returnBgColor,
//     returnColor,
//     returnTitleColor,
// } from '@/components/ChangeColorOnScroll';

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

    const [backgroundColor, setBackgroundColor] = useState('rgb(0, 0, 0)');
    const [titleColor, setTitleColor] = useState('rgb(0, 0, 0)');
    const [color, setColor] = useState('rgb(255, 255, 255)');

    const breakPoint = useMediaQuery('(min-width:900px)');
    const breakPoint2 = useMediaQuery('(min-width:650px)');

    const CustomLink = ({ page, children }) => {
        const lowerCasePage = page.toLowerCase();
        return (
            <AnchorLink
                style={{
                    width: breakPoint ? '13%' : breakPoint2 ? '20%' : '30%',
                }}
                href={`#${lowerCasePage}`}
            >
                {children}
            </AnchorLink>
        );
    };

    // useEffect(() => {
    //     setIsOpen(false);

    //     const handleScroll = () => {
    //         setBackgroundColor(returnBgColor);
    //         setTitleColor(returnTitleColor);
    //         setColor(returnColor);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [breakPoint]);

    const checkNavbarPosition = () => {
        const scrollPosition = window.screenY;
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

    const [isOpen, setIsOpen] = useState(false);

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

    const pages = ['ABOUT', 'GALLERY', 'PROJECTS', 'MEMBERS', 'CONTACT'];

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

    return (
        <>
            {sticky && <div style={{ height: `16vh` }} />}

            <Box
                position={sticky ? 'fixed' : 'relative'}
                ref={navbarRef}
                top={0}
                zIndex="50"
                height="16vh"
                left="50%"
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxSizing="border-box"
                sx={{
                    transform: 'translate(-50%,0)',
                }}
                bgcolor={backgroundColor}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width="85%"
                    height="100%"
                    sx={{
                        borderStyle: 'solid',
                        borderColor: color,
                        borderWidth: '0 0 0.3px 0',
                    }}
                    boxSizing="border-box"
                >
                    <CustomLink page="welcome">
                        <img
                            src="logo new.png"
                            alt="drone image"
                            style={{
                                objectFit: 'cover',
                                height: '70%',
                                width: '100%',
                            }}
                        />
                    </CustomLink>
                    <motion.div
                        style={{
                            display: breakPoint
                                ? 'flex'
                                : isOpen
                                ? 'flex'
                                : 'none',
                            gap: breakPoint ? '4px' : '35px',
                            flexDirection: breakPoint ? 'row' : 'column',
                            position: breakPoint ? 'static' : 'absolute',
                            top: '0',
                            left: '0',
                            minHeight: breakPoint ? '100%' : '100vh',
                            width: breakPoint ? '' : '100vw',
                            justifyContent: breakPoint
                                ? 'space-between'
                                : 'center',
                            alignItems: breakPoint ? 'center' : 'end',
                            backgroundColor: 'black',
                            paddingRight: '35px',
                            paddingTop: breakPoint ? '' : '13vh',
                            boxSizing: 'border-box',
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
                                        breakPoint={breakPoint}
                                    />
                                </span>
                            );
                        })}
                    </motion.div>
                    <Box
                        display={`${breakPoint ? `none` : `block`}`}
                        zIndex="50"
                    >
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
            </Box>
            {/* </div> */}
        </>
    );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
