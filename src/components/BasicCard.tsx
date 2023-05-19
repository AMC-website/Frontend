import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';
import { useTheme } from '@mui/material/styles';

interface BasicCardProps {
    icon: JSX.Element;
    title: string;
}

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

function BasicCard({ icon, title }: BasicCardProps) {
    const theme = useTheme();

    return (
        <Card
            sx={{
                width: 250,
                backgroundColor: `${theme.palette.primary.main}`,
            }}
        >
            <CardContent>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                        textAlign: 'center',
                        padding: '20px',
                        justifyContent: 'space-evenly',
                        minHeight: 150,
                        color: `${theme.palette.secondary.main}`,
                    }}
                >
                    <div>{icon}</div>
                    <Typography variant="h2" fontSize="25px" color="white">
                        {title}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}

export default dynamic(() => Promise.resolve(BasicCard), { ssr: false });
