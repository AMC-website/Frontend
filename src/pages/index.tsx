import Head from 'next/head';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Home() {
    const breakPoint = useMediaQuery('(min-width:600px)');

    const theme = useTheme();
    return (
        <div>
            <div
                id="one"
                style={{
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'center',
                    height: '86.1vh',
                    width: '100vw',
                    overflowX: 'hidden',
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
                        top: '7%',
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

                <Box width="30%" marginLeft="8.3%">
                    <Typography
                        color="white"
                        variant="h1"
                        style={{ fontSize: `${breakPoint ? '80px' : '60px'}` }}
                        display="grid"
                        justifyItems={breakPoint ? 'left' : 'center'}
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
            <div
                id="two"
                style={{
                    height: '100vh',
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    display: 'flex',
                    justifyContent: 'center',
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
                        top: '100vh',
                        left: '0',
                    }}
                >
                    <img
                        src="/black drone old.jpg"
                        alt="drone image"
                        style={{
                            objectFit: 'cover',
                            height: '95%',
                            width: '95%',
                            position: 'relative',
                            right: '18%',
                        }}
                    />
                </div>
                <Box
                    color="white"
                    display="flex"
                    gap="30px"
                    flexDirection="column"
                    justifyContent="center"
                    width="70%"
                    textAlign={breakPoint ? 'left' : 'center'}
                >
                    <Typography
                        variant="h1"
                        color={theme.palette.secondary.main}
                    >
                        About us
                    </Typography>
                    <Typography
                        variant="h3"
                        lineHeight="2.5"
                        color="rgba(255,255,255,0.85)"
                        fontSize={breakPoint ? '18px' : '14px'}
                    >
                        Welcome to the Aero Modelling Club of IIT BHU, a highly
                        accomplished and decorated organization at the forefront
                        of innovation in aviation. With a legacy of remarkable
                        achievements, we foster a vibrant community of
                        passionate enthusiasts and engineers. Our diverse team
                        brings together expertise in aerospace engineering,
                        mechanical engineering, electronics, and computer
                        science, allowing us to push boundaries and redefine
                        standards. <br />
                        <br />
                        We have secured top positions in prestigious
                        competitions, gaining recognition for our excellence and
                        professionalism. Through workshops and seminars, we
                        actively contribute to the growth of the aeromodelling
                        community, sharing knowledge and empowering members.
                        Join us on this exciting journey as we continue to soar
                        to new heights.
                    </Typography>
                </Box>
            </div>
        </div>
    );
}
