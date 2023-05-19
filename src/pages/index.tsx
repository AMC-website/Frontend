import Head from 'next/head';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TextTemplate from '@/components/Home/TextTemplate';
import Timeline from '../components/Home/Timeline';
import { useState, useEffect } from 'react';
import React from 'react';
import CardHolder from '@/components/Home/CardHolder';

export default function Home() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const theme = useTheme();
    const yLimit = breakPoint ? 3125 : 4000;
    const [backgroundColor, setBackgroundColor] = useState('rgb(0, 0, 0)');
    const [titleColor, setTitleColor] = useState('rgb(0, 0, 0)');
    const [color, setColor] = useState('rgb(255, 255, 255)');

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY || window.pageYOffset;
            if (y >= yLimit) {
                const progress = Math.min((y - 3150) / 200, 1);
                const r = Math.round(240 * progress);
                const g = Math.round(228 * progress);
                const b = Math.round(220 * progress);
                setBackgroundColor(`rgb(${r}, ${g}, ${b})`);

                const tR = Math.round((0 - 154) * progress + 154);
                const tG = Math.round((0 - 205) * progress + 205);
                const tB = Math.round((0 - 50) * progress + 50);
                setTitleColor(`rgb(${tR}, ${tG}, ${tB})`);

                const cR = Math.round((0 - 255) * progress + 255);
                const cG = Math.round((0 - 255) * progress + 255);
                const cB = Math.round((0 - 255) * progress + 255);
                setColor(`rgb(${cR}, ${cG}, ${cB})`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div
                id="one"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100vw',
                    overflowX: 'hidden',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        overflow: 'hidden',
                        backgroundColor: 'black',
                        display: 'flex',
                        justifyContent: 'right',
                        alignItems: 'center',
                        zIndex: '-10',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                    }}
                >
                    <img
                        src="/black drone new.jpg"
                        alt="drone image"
                        style={{
                            objectFit: 'cover',
                            height: '95%',
                            width: '95%',
                        }}
                    />
                </div>

                <Box width="auto" textAlign="center">
                    <Typography
                        color="white"
                        variant="h1"
                        style={{
                            fontSize: `${breakPoint ? '100px' : '60px'}`,
                        }}
                        display="grid"
                        justifyItems="center"
                        gap="10px"
                    >
                        <div>
                            <span
                                style={{
                                    color: `${theme.palette.secondary.main}`,
                                }}
                            >
                                A
                            </span>
                            ero{' '}
                        </div>
                        <div>
                            <span
                                style={{
                                    color: `${theme.palette.secondary.main}`,
                                }}
                            >
                                M
                            </span>
                            odelling {` `}
                        </div>
                        <div>
                            <span
                                style={{
                                    color: `${theme.palette.secondary.main}`,
                                }}
                            >
                                C
                            </span>
                            lub
                        </div>
                        <Typography
                            color="white"
                            variant="h2"
                            style={{ fontSize: '20px' }}
                        >
                            {' '}
                            IIT (BHU), Varanasi
                        </Typography>
                    </Typography>
                </Box>
            </div>

            {/* <div
                    style={{
                        height: '100%',
                        width: '100%',
                        overflow: 'hidden',
                        backgroundColor: 'black',
                        display: 'flex',
                        justifyContent: 'right',
                        alignItems: 'center',
                        zIndex: '-10',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        background:
                            'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 35%, rgba(0,0,0,1) 70%)',
                    }}
                ></div> */}
            <Box
                color="white"
                display="flex"
                gap="30px"
                width="100%"
                alignItems="center"
                textAlign="center"
                minHeight="50vh"
                bgcolor="black"
            >
                <Box
                    width="50%"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="40px"
                >
                    <Typography
                        variant="h1"
                        color={theme.palette.secondary.main}
                        fontSize={`${breakPoint ? '48px' : '40px'}`}
                        textAlign="center"
                    >
                        What do we do?
                    </Typography>
                    <Typography variant="h3" width="70%" lineHeight="2">
                        We are a community of builders with a passion for
                        aviation, fostering a culture of intellectual curiosity
                        and collaborative ingenuity.
                    </Typography>
                </Box>
                <Box
                    width="50%"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="40px"
                >
                    <Typography
                        variant="h1"
                        color={theme.palette.secondary.main}
                        fontSize={`${breakPoint ? '48px' : '40px'}`}
                        textAlign="center"
                    >
                        What do we do?
                    </Typography>
                    <Typography variant="h3" width="70%" lineHeight="2">
                        We engineer airborne wonders, defying limits.
                    </Typography>{' '}
                </Box>
            </Box>

            <CardHolder />

            <div
                style={{
                    width: '100%',
                    backgroundColor: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    padding: '30px 0',
                }}
            ></div>

            <div style={{ backgroundColor: '#f0e4dc' }}>
                <TextTemplate
                    name="Sponsors"
                    title="Sponsors"
                    breakPoint={breakPoint}
                    bgcolor={backgroundColor}
                    titleColor={titleColor}
                    color={color}
                />

                <TextTemplate
                    name="Why us"
                    title="Why to choose us?"
                    content="AMC is dedicated to applying theoretical concepts in practical projects, promoting innovation and creativity among its members. By sponsoring the club, you would be supporting the development of cutting-edge technologies in aviation and engineering. 
                By sponsoring AMC, you can help the club obtain the necessary resources to build and test their projects, and gain exposure to a community of talented and motivated students who are passionate about the field. Additionally, by investing in the education and development of the next generation of engineers and aviation professionals, you will be making a positive contribution to society while also potentially identifying future talent for your own organization.
                "
                    bgcolor={backgroundColor}
                    breakPoint={breakPoint}
                    titleColor={titleColor}
                    color={color}
                />
                <div
                    style={{
                        backgroundColor: `${backgroundColor}`,
                    }}
                >
                    <Timeline titleColor={titleColor} color={color} />
                </div>
                <div
                    style={{
                        minHeight: '100vh',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            height: '100%',
                            width: '100%',
                            overflow: 'hidden',
                            backgroundColor: 'black',
                            display: 'flex',
                            justifyContent: 'right',
                            alignItems: 'center',
                            zIndex: '-10',
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            background: ` linear-gradient(180deg, rgba(0,0,0,1) 45%, ${theme.palette.secondary.main} 98%)`,
                        }}
                    ></div>
                    <Box
                        color="white"
                        display="flex"
                        gap="30px"
                        justifyContent="center"
                        width="100%"
                        alignItems="center"
                        textAlign={breakPoint ? 'left' : 'center'}
                        sx={{
                            backdropFilter: 'blur(15px)',
                        }}
                    >
                        <Typography
                            variant="h1"
                            width="70%"
                            color={theme.palette.primary.main}
                            fontSize={`${breakPoint ? '48px' : '40px'}`}
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
