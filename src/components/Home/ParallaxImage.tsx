import { motion } from 'framer-motion';
import styles from '@/styles/home.module.css';
import { useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

export default function ParallaxImage() {
    const [scrollY, setScrollY] = useState(0);
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:400px)');
    const sentence = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.065, // Adjust the stagger delay as needed
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5, // Adjust the duration as needed
            },
        },
    };

    const line1 = 'Technology ';
    const line2 = 'and ';
    // const line3 = 'meets ';
    const line4 = 'Craftsmanship';

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const height = 35 + scrollY * 0.05;
    const width = 35 + scrollY * 0.04;

    return (
        <Box
            sx={{
                height: '300vh',
                backgroundColor: 'black',
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'scroll',
                zIndex: -20,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    position: 'fixed',
                    top: '0',
                    overflow: 'hidden',
                    zIndex: -10,
                }}
            >
                <motion.div
                    className="wrap"
                    style={{
                        borderRadius: 80 - scrollY * 0.055 + 'em',
                        height: height + 'vh',
                        width: width + 'vw',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        boxSizing: 'border-box',
                        display: 'flex',
                        position: 'relative',
                        transitionTimingFunction: 'step-start',
                    }}
                >
                    <div
                        style={{
                            textAlign: 'center',
                            position: 'absolute',
                            top: '65%',
                            zIndex: '4',
                        }}
                    >
                        <motion.h3
                            variants={sentence}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 1 }}
                            style={{ color: 'black' }}
                        >
                            {line1.split('').map((char, index) => (
                                <motion.span
                                    key={char + '-' + index}
                                    variants={letter}
                                >
                                    <Typography
                                        variant="h1"
                                        display="inline"
                                        fontWeight="bold"
                                        fontSize={`${
                                            breakPoint
                                                ? '60px'
                                                : breakPoint2
                                                ? '40px'
                                                : '30px'
                                        }`}
                                    >
                                        {char}
                                    </Typography>
                                </motion.span>
                            ))}
                            {line2.split('').map((char, index) => (
                                <motion.span
                                    key={char + '-' + index}
                                    variants={letter}
                                >
                                    <Typography
                                        variant="h1"
                                        display="inline"
                                        fontSize={`${
                                            breakPoint
                                                ? '60px'
                                                : breakPoint2
                                                ? '40px'
                                                : '30px'
                                        }`}
                                    >
                                        {char}
                                    </Typography>
                                </motion.span>
                            ))}
                            <br />
                            {/* {line3.split('').map((char, index) => (
                                <motion.span
                                    key={char + '-' + index}
                                    variants={letter}
                                >
                                    <Typography
                                        variant="h1"
                                        display="inline"
                                        fontSize={`${
                                            breakPoint
                                                ? '60px'
                                                : breakPoint2
                                                ? '40px'
                                                : '30px'
                                        }`}
                                    >
                                        {char}
                                    </Typography>
                                </motion.span>
                            ))} */}
                            {line4.split('').map((char, index) => (
                                <motion.span
                                    key={char + '-' + index}
                                    variants={letter}
                                >
                                    <Typography
                                        variant="h1"
                                        display="inline"
                                        fontStyle="italic"
                                        fontSize={`${
                                            breakPoint
                                                ? '60px'
                                                : breakPoint2
                                                ? '40px'
                                                : '30px'
                                        }`}
                                    >
                                        {char}
                                    </Typography>
                                </motion.span>
                            ))}
                        </motion.h3>
                    </div>

                    <img
                        className={styles.sticky_circle_img}
                        src="/drone1.jpg"
                        alt="drone"
                    ></img>
                </motion.div>
            </Box>
        </Box>
    );
}
