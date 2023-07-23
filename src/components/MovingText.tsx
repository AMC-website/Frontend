import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { bgColor, color } from '@/constants';

export default function MovingText() {
    const [scrollY, setScrollY] = useState(0);
    const [hovered, setHovered] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                py: '150px',
                flexDirection: 'column',
                zIndex: 40,
                background: bgColor,
            }}
        >
            <Box
                sx={{
                    width: '200vw',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    flexDirection: 'column',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <motion.div
                    whileInView={{
                        translateX: scrollY * 0.12,
                    }}
                    style={{
                        transition: 'all .5s cubic-bezier(.165, .84, .44, 1)',
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            lineHeight: '103px',
                            fontSize: '85px',
                            textAlign: 'justify',
                            whiteSpace: 'nowrap',
                            fontWeight: 'thin',
                            WebkitTextStroke: `0.8px ${color}`,
                            transition:
                                'color 0.3s cubic-bezier(.165, .84, .44, 1)', // Adding transition for smooth effect
                            color: hovered ? color : 'rgba(0,0,0,0)',
                        }}
                    >
                        Engineer · Build · Fly · Engineer · Build · Fly ·
                        Engineer · Build · Fly · Engineer · Build · Fly ·
                        Engineer · Build · Fly · Engineer · Build · Fly ·
                        Engineer · Build · Fly · Engineer · Build · Fly ·
                        Engineer · Build · Fly · Engineer · Build · Fly ·
                    </Typography>
                </motion.div>

                <motion.div
                    whileInView={{
                        translateX: -scrollY * 0.17,
                    }}
                    style={{
                        transition: 'all .5s cubic-bezier(.165, .84, .44, 1)',
                    }}
                >
                    <Typography
                        sx={{
                            lineHeight: '103px',
                            fontSize: '85px',
                            fontWeight: 'thin',
                            whiteSpace: 'nowrap',
                            textAlign: 'justify',
                            WebkitTextStroke: `0.8px ${color}`,
                            transition:
                                'color 0.3s cubic-bezier(.165, .84, .44, 1)', // Adding transition for smooth effect
                            color: hovered ? color : 'rgba(0,0,0,0)',
                        }}
                        variant="h1"
                    >
                        Aerial Dominion · Conquer the Skies · Aerial Dominion ·
                        Conquer the Skies· Aerial Dominion · Conquer the Skies ·
                        Aerial Dominion · Conquer the Skies · Aerial Dominion ·
                        Conquer the Skies ·
                    </Typography>
                </motion.div>
            </Box>
        </Box>
    );
}
