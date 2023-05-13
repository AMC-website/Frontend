import Head from 'next/head';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TextTemplate from '@/components/Home/TextTemplate';

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
                style={{
                    minHeight: '100vh',
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.7)',
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
                        background:
                            'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(208,255,59,1) 43%, rgba(0,0,0,1) 100%)',
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
                        color={theme.palette.secondary.main}
                    >
                        Experience the thrill of engineering and flying your own
                        creations.
                    </Typography>
                </Box>
            </div>

            <TextTemplate
                name="Speciality"
                title="What makes us standout?"
                content="AMC stands out from other aeromodelling clubs because of its focus on applying theoretical concepts of aerodynamics and fluid dynamics into practical projects. This not only enhances the members' understanding of the subject but also provides hands-on experience in building and flying model aircraft and drone projects. Additionally, being a student body under the Science and Technology Council, AMC offers opportunities for interdisciplinary collaboration and networking with other STEM clubs, further enriching the members' experience.
                "
                breakPoint={breakPoint}
                src="black drone old.jpg"
            />
            <TextTemplate
                name="Why us"
                title="Why to choose us?"
                content="AMC is dedicated to applying theoretical concepts in practical projects, promoting innovation and creativity among its members. By sponsoring the club, you would be supporting the development of cutting-edge technologies in aviation and engineering. 
                By sponsoring AMC, you can help the club obtain the necessary resources to build and test their projects, and gain exposure to a community of talented and motivated students who are passionate about the field. Additionally, by investing in the education and development of the next generation of engineers and aviation professionals, you will be making a positive contribution to society while also potentially identifying future talent for your own organization.
                "
                breakPoint={breakPoint}
            />
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
                        color={theme.palette.secondary.main}
                    >
                        Experience the thrill of engineering and flying your own
                        creations.
                    </Typography>
                </Box>
            </div>
        </div>
    );
}
