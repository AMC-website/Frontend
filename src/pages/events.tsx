import EventCard from '@/components/EventCard';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

const array = [1, 2, 3, 4, 5, 6];

export default function Events() {
    const xMotionValue = useMotionValue(0);
    const yMotionValue = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            xMotionValue.set(-(event.clientX / window.innerWidth - 0.5) * 40);
            yMotionValue.set(-(event.clientY / window.innerHeight - 0.5) * 40);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [xMotionValue, yMotionValue]);
    const theme = useTheme();

    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:400px)');
    return (
        <>
            <Box
                width="100%"
                height="80vh"
                position="relative"
                bgcolor="black"
                textAlign="center"
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                        duration: 0.6,
                        type: 'spring',
                        ease: [0, 0.71, 0.2, 1.01],
                        damping: 10,
                        stiffness: 60,
                        restDelta: 0.001,
                    }}
                    variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                    style={{
                        position: 'absolute',
                        top: '0',
                        bottom: '0',
                        left: '15%',
                        width: '70%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        x: xMotionValue,
                        y: yMotionValue,
                    }}
                >
                    <Typography
                        variant="h1"
                        color={theme.palette.secondary.main}
                        fontSize={`${
                            breakPoint ? '48px' : breakPoint2 ? '40px' : '30px'
                        }`}
                    >
                        AMC&apos;s events: Past marvels, Present wonders.{' '}
                    </Typography>
                    <br />
                    <Typography
                        variant="h3"
                        lineHeight="2"
                        color="white"
                        margin="0 auto"
                        fontSize={`${
                            breakPoint ? '28px' : breakPoint2 ? '20px' : '15px'
                        }`}
                    >
                        AMC&apos;s past events elevated aviation to new heights.
                        A fusion of aeromodelling marvels and cutting-edge
                        drones defied expectations. Imagination and engineering
                        converged, painting the skies with exhilaration. Each
                        showcase embodied AMC&apos;s commitment to pushing
                        boundaries, revealing the magic of flight in
                        unforgettable displays.
                    </Typography>
                </motion.div>
            </Box>

            <Box
                sx={{
                    display: {
                        md: 'grid',
                        xs: 'flex',
                    },
                    gridTemplateColumns: {
                        lg: 'auto auto auto',
                        md: 'auto auto',
                        xs: 'auto',
                    },
                    padding: '140px 100px',
                    gridGap: '30px',
                    flexDirection: 'column',
                }}
                bgcolor="black"
            >
                {array.map((item, index) => (
                    <EventCard key={index + 1}></EventCard>
                ))}
            </Box>
        </>
    );
}
