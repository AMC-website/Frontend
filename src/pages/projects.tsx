import Card from '@/components/Projects/Card';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import changeColorOnScroll from '@/components/ChangeColorOnScroll';

const CustomGrid = ({ children }: { children: React.ReactNode }) => {
    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={6}
            border="none"
            padding="0"
            display="flex"
            justifyContent="center"
        >
            {children}
        </Grid>
    );
};

export default function Projects() {
    const primary = '#f0e4dc';
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:400px)');

    const xMotionValue = useMotionValue(0);
    const yMotionValue = useMotionValue(0);

    const startPercentage = 0.35;
    const endPercentage = 0.45;

    const [backgroundColor, setBackgroundColor] = useState('rgb(0, 0, 0)');
    const [titleColor, setTitleColor] = useState('rgb(0, 0, 0)');
    const [color, setColor] = useState('rgb(255, 255, 255)');

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
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Box
                width="100%"
                height="100vh"
                position="relative"
                bgcolor={backgroundColor}
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
                        color={titleColor}
                        fontSize={`${
                            breakPoint ? '48px' : breakPoint2 ? '40px' : '30px'
                        }`}
                    >
                        Aviation Unleashed: AMC&apos;s Projects
                    </Typography>
                    <br />
                    <Typography
                        variant="h3"
                        lineHeight="2"
                        color={color}
                        margin="0 auto"
                        fontSize={`${
                            breakPoint ? '28px' : breakPoint2 ? '20px' : '15px'
                        }`}
                    >
                        AMC&apos;s projects soar beyond conventional boundaries,
                        merging imagination with engineering precision. From
                        intricate aeromodelling masterpieces to groundbreaking
                        drone innovations, they epitomize the marriage of
                        creativity and technical expertise. Each project
                        represents a testament to AMC&apos;s unwavering
                        commitment to shaping the future of aviation.
                    </Typography>
                </motion.div>
            </Box>
            <Box
                bgcolor={backgroundColor}
                padding="80px 10px"
                gap="90px"
                display="flex"
                flexDirection="column"
            >
                <Typography variant="h1" color={titleColor} textAlign="center">
                    AMC&apos;s project showcase
                </Typography>
                <Grid container spacing={4} display="flex">
                    <CustomGrid>
                        <Card
                            projectName="Drone mk1"
                            projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            projectThumbnail="/black drone new.jpg"
                        />
                    </CustomGrid>
                    <CustomGrid>
                        <Card
                            projectName="Drone mk1"
                            projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            projectThumbnail="/black drone new.jpg"
                        />
                    </CustomGrid>
                    <CustomGrid>
                        <Card
                            projectName="Drone mk1"
                            projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            projectThumbnail="/black drone new.jpg"
                        />
                    </CustomGrid>
                    <CustomGrid>
                        <Card
                            projectName="Drone mk1"
                            projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            projectThumbnail="/black drone new.jpg"
                        />
                    </CustomGrid>

                    <CustomGrid>
                        <Card
                            projectName="Drone mk1"
                            projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            projectThumbnail="/black drone new.jpg"
                        />
                    </CustomGrid>
                    <CustomGrid>
                        <Card
                            projectName="Drone mk1"
                            projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            projectThumbnail="/black drone new.jpg"
                        />
                    </CustomGrid>
                </Grid>
            </Box>
            <Box
                width="100%"
                height="100vh"
                position="relative"
                bgcolor={backgroundColor}
                textAlign="center"
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        duration: 0.6,
                        type: 'spring',
                        ease: [0, 0.71, 0.2, 1.01],
                        damping: 10,
                        stiffness: 60,
                        restDelta: 0.001,
                    }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
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
                        color={titleColor}
                        fontSize={`${
                            breakPoint ? '48px' : breakPoint2 ? '40px' : '30px'
                        }`}
                    >
                        Excellence Takes Flight: AMC&apos;s Achievements
                    </Typography>
                    <br />
                    <Typography
                        variant="h3"
                        lineHeight="2"
                        color={color}
                        margin="0 auto"
                        fontSize={`${
                            breakPoint ? '28px' : breakPoint2 ? '18px' : '15px'
                        }`}
                    >
                        AMC&apos;s achievements defy expectations within the
                        college aviation community. Their remarkable innovations
                        in aeromodelling and drones have earned widespread
                        acclaim. From triumphs in competitions to groundbreaking
                        advancements, AMC&apos;s accomplishments inspire fellow
                        students and reshape the realm of flight within the
                        college sphere.
                    </Typography>
                </motion.div>
            </Box>
            <Box
                bgcolor={backgroundColor}
                padding="80px 10px"
                gap="90px"
                display="flex"
                flexDirection="column"
            >
                <Typography variant="h1" color={color} textAlign="center">
                    AMC&apos;s project showcase
                </Typography>
                <Grid container spacing={4} display="flex">
                    <CustomGrid>
                        <Card
                            projectName="Drone mk1"
                            projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            projectThumbnail="/black drone new.jpg"
                        />
                    </CustomGrid>
                    <CustomGrid>
                        <Card
                            projectName="Drone mk1"
                            projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            projectThumbnail="/black drone new.jpg"
                        />
                    </CustomGrid>
                    <CustomGrid>
                        <Card
                            projectName="Drone mk1"
                            projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            projectThumbnail="/black drone new.jpg"
                        />
                    </CustomGrid>
                    <CustomGrid>
                        <Card
                            projectName="Drone mk1"
                            projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            projectThumbnail="/black drone new.jpg"
                        />
                    </CustomGrid>

                    <CustomGrid>
                        <Card
                            projectName="Drone mk1"
                            projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            projectThumbnail="/black drone new.jpg"
                        />
                    </CustomGrid>
                    <CustomGrid>
                        <Card
                            projectName="Drone mk1"
                            projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            projectThumbnail="/black drone new.jpg"
                        />
                    </CustomGrid>
                </Grid>
            </Box>
        </>
    );
}
