import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';
import { useTheme } from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';

interface BasicCardProps {
    icon: JSX.Element;
    title: string;
    titleColor: string;
}

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

function BasicCard({ icon, title, titleColor }: BasicCardProps) {
    const theme = useTheme();
    const breakPoint = useMediaQuery('(min-width:600px)');

    return (
        <Card
            sx={{
                width: 250,
                backgroundColor: `white`,
                transition: 'transform 0.3s ease-out',
                '&:hover': {
                    transform: 'scale(1.1)',
                },
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
    );
}

export default dynamic(() => Promise.resolve(BasicCard), { ssr: false });
