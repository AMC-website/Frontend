import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import NavItem from './NavItem';
import { bgColor, color } from '@/constants';
import Logo, { LogoStatic } from './Logo';
import { pages } from './data/pages';
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

type NavProps = {
    sticky: boolean;
    staticLogo: boolean;
};

function Navbar(props: NavProps) {
    const [sticky, setSticky] = useState(false);
    const navbarRef = useRef<HTMLElement | null>(null);

    const breakPoint = useMediaQuery('(min-width:900px)');

    const checkNavbarPosition = () => {
        if (navbarRef.current) {
            const navbarRect = navbarRef.current.getBoundingClientRect();

            if (navbarRect.top <= 0) {
                // Check if the navbar is at or above the top of the viewport
                setSticky(true);
            } else {
                setSticky(false);
            }
        }
    };
    useEffect(() => {
        checkNavbarPosition();
        window.addEventListener('scroll', checkNavbarPosition);
        return () => window.removeEventListener('scroll', checkNavbarPosition);
    }, []);

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
            {sticky && props.sticky && <div style={{ height: `16vh` }} />}

            <Box
                position={sticky && props.sticky ? 'fixed' : 'relative'}
                ref={navbarRef}
                top={0}
                zIndex="50"
                height="16vh"
                left={breakPoint ? '50%' : '50%'}
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxSizing="border-box"
                sx={{
                    transform: 'translate(-50%,0)',
                }}
                bgcolor={bgColor}
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
                        boxSizing: 'border-box',
                    }}
                >
                    <Link href="/" style={{ width: '13%' }}>
                        {props.staticLogo ? <LogoStatic /> : <Logo />}
                    </Link>
                    <motion.div
                        style={{
                            display: 'flex',
                            gap: breakPoint ? '4px' : '10px',
                            flexDirection: breakPoint ? 'row' : 'column',
                            position: breakPoint ? 'static' : 'fixed',
                            top: '0',
                            left: breakPoint ? '-35px' : '',
                            minHeight: breakPoint ? '100%' : '100vh',
                            width: breakPoint ? '' : '100vw',
                            justifyContent: breakPoint
                                ? 'space-between'
                                : 'start',
                            alignItems: breakPoint ? 'center' : 'flex-end',
                            backgroundColor: 'black',
                            paddingTop: breakPoint ? '' : '10vh',
                            paddingRight: breakPoint ? '' : '10vw',
                            boxSizing: 'border-box',
                            zIndex: breakPoint ? 10 : isOpen ? 50 : -999,
                            pointerEvents:
                                !breakPoint && !isOpen ? 'none' : 'auto',
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
                                    onClick={handleClick}
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

export default Navbar;
