import { motion } from 'framer-motion';
import styles from '@/styles/home.module.css';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

type textProperties = {
    color?: string;
    fontSize?: string;
    bgColor: string;
};

export default function MovingText({
    color,
    fontSize,
    bgColor,
}: textProperties) {
    const [scrollY, setScrollY] = useState(0);

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
                paddingTop: '150px',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                flexDirection: 'column',
                zIndex: 40,
                background: bgColor,
            }}
        >
            <Box
                sx={{
                    width: '200vw',
                    overflow: 'hidden',
                    py: '150px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    flexDirection: 'column',
                }}
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
                            fontSize: fontSize ? fontSize : '65px',
                            color: color ? color : 'white',
                            textAlign: 'justify',
                            whiteSpace: 'nowrap',
                            fontWeight: 'bold',
                            WebkitTextStroke: `1.5px ${color}`,
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
                            fontSize: fontSize ? fontSize : '65px',
                            color: 'rgba(0,0,0,0)',
                            fontWeight: 'thin',
                            whiteSpace: 'nowrap',
                            textAlign: 'justify',
                            WebkitTextStroke: `1.5px ${color}`,
                        }}
                        variant="body1"
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
