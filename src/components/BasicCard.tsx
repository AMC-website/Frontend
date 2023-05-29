import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';
import { useTheme } from '@mui/material/styles';
import VanillaTilt from 'vanilla-tilt';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import CustomTilt from './TiltComponent';
interface BasicCardProps {
    icon: JSX.Element;
    title: string;
    titleColor: string;
    cardColor?: string;
}

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

function BasicCard({ icon, title, titleColor, cardColor }: BasicCardProps) {
    const breakPoint = useMediaQuery('(min-width:600px)');

    const options = {
        scale: 1.1,
        speed: 1000,
        max: 20,
        reverse: true,
        gyroscope: false,
    };

    return (
        <>
            <CustomTilt options={options}>
                <Card
                    sx={{
                        width: 250,
                        backgroundColor: cardColor || 'rgba(255,255,255,0.5)',
                    }}
                >
                    <CardContent sx={{ padding: '0' }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '30px',
                                textAlign: 'center',
                                padding: '30px 0',
                                justifyContent: 'space-evenly',
                                minHeight: 150,
                                color: `${titleColor}`,
                            }}
                        >
                            <div>{icon}</div>
                            <Typography
                                variant="h2"
                                fontSize={breakPoint ? '28px' : '18px'}
                                color="black"
                            >
                                {title}
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </CustomTilt>
        </>
    );
}

export default dynamic(() => Promise.resolve(BasicCard), { ssr: false });
