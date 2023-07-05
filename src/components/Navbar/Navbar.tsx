import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import NavItem from './NavItem';
import {
    returnBgColor,
    returnColor,
    returnTitleColor,
} from '@/components/ChangeColorOnScroll';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
    const theme = useTheme();
    const [sticky, setSticky] = useState(false);
    const navbarRef = useRef<HTMLElement | null>(null);
    const [navbarOffsetTop, setNavbarOffsetTop] = useState(0);
    const [navbarHeight, setNavbarHeight] = useState(0);

    const [backgroundColor, setBackgroundColor] = useState('rgb(0, 0, 0)');
    const [titleColor, setTitleColor] = useState('rgb(0, 0, 0)');
    const [color, setColor] = useState('rgb(255, 255, 255)');

    const breakPoint = useMediaQuery('(min-width:900px)');

    useEffect(() => {
        setIsOpen(false);

        const handleScroll = () => {
            setBackgroundColor(returnBgColor);
            setTitleColor(returnTitleColor);
            setColor(returnColor);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [breakPoint]);

    useEffect(() => {
        if (navbarRef.current) {
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

    const pages = ['Projects', 'Events', 'About'];

    return (
        <>
            {sticky && <div style={{ height: `${navbarHeight}px` }} />}

            <Box
                position={sticky ? 'fixed' : 'relative'}
                top={0}
                zIndex="50"
                left="50%"
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
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
                    padding="0 10px"
                    sx={{
                        borderStyle: 'solid',
                        borderColor: color,
                        borderWidth: '0 0 0.3px 0',
                    }}
                >
                    <Link href="/" style={{ width: '13%' }}>
                        <img
                            src="logo.png"
                            alt="drone image"
                            style={{
                                objectFit: 'cover',
                                height: '70%',
                                width: '100%',
                            }}
                        />
                    </Link>
                    <motion.div
                        style={{
                            display: breakPoint
                                ? 'flex'
                                : isOpen
                                ? 'grid'
                                : 'none',
                            gap: '4px',
                            position: breakPoint ? 'static' : 'absolute',
                            top: '100%',
                            left: '0',
                            width: breakPoint ? '30%' : '100%',
                            minHeight: '100%',
                            justifyContent: breakPoint ? 'space-between' : '',
                            alignItems: breakPoint ? 'center' : '',
                            padding: '5px',
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
                                        color={color}
                                        backgroundColor={
                                            theme.palette.secondary.main
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
            </Box>
            {/* </div> */}
        </>
    );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
