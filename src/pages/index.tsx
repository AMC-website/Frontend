import useMediaQuery from '@mui/material/useMediaQuery';
import { motion, useMotionValue, useScroll } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TextTemplate from '@/components/Home/TextTemplate';
import Timeline from '../components/Home/Timeline/Timeline';
import { useState, useEffect } from 'react';
import React from 'react';
import CardHolder from '@/components/Home/CardHolder';
import changeColorOnScroll from '@/components/ChangeColorOnScroll';
import Navbar from '@/components/Navbar/Navbar';
import WelcomeSection from '@/components/Home/WelcomeSection';
import AMCSection from '@/components/Home/AMCSection';
import ParallaxImage from '@/components/Home/ParallaxImage';
import MovingText from '@/components/Home/MovingText';
import CustomTilt from '@/components/TiltComponent';
import Tilt from 'react-parallax-tilt';

export default function Home() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:1000px)');

    const theme = useTheme();
    const [backgroundColor, setBackgroundColor] = useState('rgb(0, 0, 0)');
    const [titleColor, setTitleColor] = useState('rgb(0, 0, 0)');
    const [color, setColor] = useState('rgb(255, 255, 255)');
    const [cardColor, setCardColor] = useState('');
    const startPercentage = breakPoint2 ? 0.5 : 0.6;
    const endPercentage = breakPoint2 ? 0.52 : 0.62;
    useEffect(() => {
        const handleScroll = () => {
            changeColorOnScroll(
                startPercentage,
                endPercentage,
                { r: 0, g: 0, b: 0 },
                { r: 240, g: 228, b: 220 },
                setBackgroundColor
            );
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
            changeColorOnScroll(
                startPercentage,
                endPercentage,
                { r: 255, g: 255, b: 255 },

                { r: 0, g: 0, b: 0 },
                setCardColor
            );
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const options = {
        scale: 1.1,
        speed: 1000,
        max: 10,
        reverse: true,
        glare: true,
    };

    return (
        <div>
            <WelcomeSection />

            <Box
                sx={{
                    height: '100px' /* adjust based on your needs */,
                    background: 'linear-gradient(to bottom, #4bb6fe, #000000)',
                }}
                position="relative"
            >
                <Box
                    width="100%"
                    height="110px"
                    sx={{
                        backdropFilter: 'blur(10px)',
                    }}
                    position="absolute"
                    bottom="0"
                    left="0"
                ></Box>
            </Box>

            <div
                style={{
                    backgroundColor: 'black',
                    width: '100%',
                    padding: '20px 0',
                }}
            >
                <Navbar />
            </div>
            <AMCSection />

            <ParallaxImage></ParallaxImage>

            <CardHolder
                titleColor={titleColor}
                backgroundColor={backgroundColor}
                color={color}
                // cardColor={cardColor}
            />
            <MovingText
                color={titleColor}
                bgColor={backgroundColor}
                fontSize={breakPoint ? '48px' : '40px'}
            ></MovingText>

            <div
                style={{
                    backgroundColor: `${backgroundColor}`,
                    padding: '60px 0',
                }}
            >
                <Timeline titleColor={titleColor} color={color} />
            </div>

            <div style={{ backgroundColor: '#f0e4dc' }}>
                <TextTemplate
                    name="Sponsors"
                    title="Sponsors"
                    breakPoint={breakPoint}
                    bgcolor={backgroundColor}
                    titleColor={titleColor}
                    color={color}
                />

                <Box
                    width="100%"
                    height="auto"
                    position="relative"
                    textAlign="center"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1}
                        gyroscope={true}
                        style={{
                            width: '50%',
                            padding: breakPoint ? '40px' : '20px',
                            borderRadius: '10px',
                            backdropFilter: 'blur(25px)',
                            position: 'relative',
                            background: 'rgba(255,255,255,0.3)',
                        }}
                    >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.7 }}
                            transition={{
                                duration: 0.6,
                            }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                        >
                            <Typography
                                variant="h1"
                                color={titleColor}
                                fontSize={`${breakPoint ? '88px' : '48px'}`}
                            >
                                Why to choose us?
                            </Typography>

                            <br />
                            <Typography
                                variant="h3"
                                lineHeight="2"
                                color={color}
                                margin="0 auto"
                                fontSize={`${breakPoint ? '28px' : '18px'}`}
                            >
                                Sponsor AMC to fuel innovation and creativity.
                                Your support drives cutting-edge aviation and
                                engineering projects, empowering talented
                                students.
                                <br />
                                <br />
                                Invest in <b>education</b>, make an{' '}
                                <b>impact</b>, and <b>connect with</b> future
                                industry <b>leaders</b>.
                            </Typography>
                        </motion.div>
                    </Tilt>
                </Box>

                <div
                    style={{
                        minHeight: '100vh',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                    }}
                >
                    <Box
                        display="flex"
                        gap="30px"
                        justifyContent="center"
                        width="100%"
                        alignItems="center"
                        textAlign={breakPoint ? 'left' : 'center'}
                    >
                        <Typography
                            variant="h1"
                            width="70%"
                            color={theme.palette.primary.main}
                            fontSize={`${breakPoint ? '48px' : '40px'}`}
                            textAlign="center"
                        >
                            Join us, unleash your potential in engineering,
                            aviation, and teamwork.
                        </Typography>
                    </Box>
                </div>
            </div>
        </div>
    );
}
