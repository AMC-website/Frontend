import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface CardProps {
    projectName: string;
    projectContent: string;
    projectThumbnail: string;
}
export default function Card({
    projectName,
    projectContent,
    projectThumbnail,
}: CardProps) {
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(!isClicked);
    }
    return (
        <>
            <motion.div
                style={{
                    height: 300,
                    width: 450,
                    position: 'relative',
                    borderRadius: '10px',
                }}
                onClick={handleClick}
            >
                <img
                    src={projectThumbnail}
                    alt="drone image"
                    style={{
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%',
                        borderRadius: '10px',
                    }}
                />
                <span
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                    }}
                >
                    <Typography variant="h2" color="white" textAlign="center">
                        {projectName}
                    </Typography>
                </span>
                <motion.div
                    initial={{
                        scale: isClicked ? 0 : 1.1,
                        opacity: isClicked ? 0 : 1,
                    }}
                    animate={{
                        scale: isClicked ? 1.1 : 0,
                        opacity: isClicked ? 1 : 0,
                    }}
                    transition={{
                        scale: {
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                            type: 'spring',
                            damping: 10,
                            stiffness: 80,
                            restDelta: 0.001,
                        },
                    }}
                    style={{
                        position: 'absolute',
                        height: '100%',
                        top: 0,
                        backdropFilter: 'blur(100px)',
                        borderRadius: '5px',
                    }}
                >
                    <Box
                        height="100%"
                        width="100%"
                        display="flex"
                        flexDirection="column"
                        gap="10%"
                        justifyContent="space-around"
                        padding="0 10px"
                    >
                        <Typography variant="h3" color="white">
                            <span>Name: </span>
                            <Typography
                                variant="h3"
                                color="rgba(255,255,255,0.7)"
                            >
                                {projectName}
                            </Typography>
                        </Typography>
                        <Typography variant="h3" color="white">
                            <span>Details: </span>
                            <Typography
                                variant="h3"
                                color="rgba(255,255,255,0.7)"
                            >
                                {projectContent}
                            </Typography>
                        </Typography>
                    </Box>
                </motion.div>
            </motion.div>
        </>
    );
}
