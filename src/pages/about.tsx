import { Box, Stack, Typography, Divider, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import MemberCard from '@/components/MembersPage/MembersCard';
import { motion, useMotionValue } from 'framer-motion';

const membersData = [
    {
        id: 1,
        name: 'John Doe',
        profileImage: 'johnDoe.jpg',
        role: 'Designer',
    },
    {
        id: 2,
        name: 'Jane Smith',
        profileImage: 'janeSmith.jpg',
        role: 'Developer',
    },
    {
        id: 3,
        name: 'John Doe',
        profileImage: 'johnDoe.jpg',
        role: 'Designer',
    },
    {
        id: 4,
        name: 'Jane Smith',
        profileImage: 'janeSmith.jpg',
        role: 'Developer',
    },
];

export default function Members() {
    const theme = useTheme();
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:400px)');

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

    return (
        <Box>
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
                        AMC&apos;s Team: Igniting Aviation&apos;s Future
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
                        AMC&apos;s team is a harmonious blend of skilled
                        individuals from diverse domains, united by their shared
                        passion for aviation. They collaborate seamlessly,
                        fueling innovation and driving the club towards new
                        horizons in the world of flight.
                    </Typography>
                </motion.div>
            </Box>

            <Stack
                direction={'column'}
                divider={<Divider orientation="horizontal" flexItem></Divider>}
                paddingBottom="100px"
                sx={{
                    backgroundColor: 'white',
                    paddingTop: '90px',
                }}
            >
                {membersData.map((member, index) => (
                    <MemberCard
                        key={index}
                        name={member.name}
                        role={member.role}
                        image={member.profileImage}
                    ></MemberCard>
                ))}
            </Stack>
        </Box>
    );
}
