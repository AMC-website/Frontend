import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

export default function WelcomeSection() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:400px)');
    const sentence = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08, // Adjust the stagger delay as needed
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

    const line1 = 'Where ';
    const line2 = 'Engineering';
    const line3 = 'meets ';
    const line4 = 'Art';
    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <img
                src="jets.jpg"
                alt="drone image"
                style={{
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    zIndex: -2,
                }}
            />
            <div style={{ margin: '10% 0 0 0', textAlign: 'center' }}>
                <motion.h3
                    variants={sentence}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    style={{ color: 'white' }}
                >
                    {line1.split('').map((char, index) => (
                        <motion.span key={char + '-' + index} variants={letter}>
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
                    {line2.split('').map((char, index) => (
                        <motion.span key={char + '-' + index} variants={letter}>
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
                    <br />
                    {line3.split('').map((char, index) => (
                        <motion.span key={char + '-' + index} variants={letter}>
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
                    {line4.split('').map((char, index) => (
                        <motion.span key={char + '-' + index} variants={letter}>
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
        </div>
    );
}
