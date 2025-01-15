import CardHolder from '@/components/Home/CardHolder';
import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import AMCSection from '@/components/Home/AMCSection';
import Parallax from '@/components/Home/Parallax';
import MovingText from '@/components/MovingText';
import { bgColor, color, h4, h5, h6, titleColor } from '@/constants';
import Projects from '../components/Projects/projects';
import Image from 'next/image';

export default function Home() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:1000px)');

    return (
        <div>
            <section
                id="welcome"
                style={{
                    backgroundColor: bgColor,
                    padding: breakPoint ? '0 7.5% 100px' : '',
                }}
            >
                <AMCSection />
            </section>
            {breakPoint ? (
                <section id="parallax">
                    <Parallax />
                </section>
            ) : (
                <div> </div>
            )}
            <section id="about">
                <section
                    id="amenities"
                    style={{
                        backgroundColor: bgColor,
                        padding: '50px 7.5%',
                    }}
                >
                    <CardHolder
                        titleColor={titleColor}
                        backgroundColor={bgColor}
                        color={color}
                    />
                </section>
                <section
                    id="about"
                    style={{
                        backgroundColor: bgColor,
                        padding: '100px 7.5%',
                    }}
                >
                    <Box
                        height="auto"
                        position="relative"
                        textAlign="left"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        marginLeft="auto"
                        marginRight="auto"
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: breakPoint2 ? 'row' : 'column',
                                width: '100%',
                                gap: '5px',
                            }}
                        >
                            <div
                                style={{
                                    width: breakPoint2 ? '60%' : 'auto',
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    color={color}
                                    fontSize={breakPoint ? h4 : h5}
                                    mb="35px"
                                >
                                    Why us?
                                </Typography>

                                <Typography
                                    variant="h3"
                                    lineHeight="2"
                                    color={color}
                                    margin="0 auto"
                                    fontSize={h6}
                                >
                                    Sponsor AMC to fuel innovation and
                                    creativity. Your support drives cutting-edge
                                    aviation and engineering projects,
                                    empowering talented students.
                                    <br />
                                    <br />
                                    By sponsoring AMC, you become a catalyst for
                                    transformative change in the aviation and
                                    engineering sectors, creating opportunities
                                    for breakthrough discoveries and
                                    groundbreaking advancements.
                                    <br />
                                    <br />
                                    Invest in <b>education</b>, make an{' '}
                                    <b>impact</b>, and <b>connect</b> with
                                    future industry <b>leaders</b>.
                                </Typography>
                            </div>
                            <div
                                style={{
                                    width: breakPoint2 ? '40%' : '100%',
                                    display: 'flex',
                                    flexDirection: breakPoint2
                                        ? 'column'
                                        : 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Image
                                    src="/flight2.jpg"
                                    alt="drone"
                                    width={3936}
                                    height={2624}
                                    style={{
                                        objectFit: 'cover',
                                        height: breakPoint2 ? '100%' : '100%',
                                        width: breakPoint2 ? '100%' : '100%',
                                        borderRadius: '5px',
                                    }}
                                />
                            </div>
                        </div>
                    </Box>
                </section>
            </section>
            {/* <section
                id="gallery"
                style={{
                    backgroundColor: bgColor,
                    padding: '100px 0',
                }}
            >
                <CustomCarousel />
            </section> */}
            <MovingText />
            <section
                id="projects"
                style={{
                    backgroundColor: bgColor,
                    width: '100%',
                    padding: '100px 0',
                }}
            >
                <Projects />
            </section>
        </div>
    );
}
