import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';
import useMediaQuery from '@mui/material/useMediaQuery';
interface BasicCardProps {
    icon: JSX.Element;
    title: string;
    titleColor: string;
    cardColor?: string;
    color?: string;
}

// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//         •
//     </Box>
// );

function BasicCard({
    icon,
    title,
    titleColor,
    cardColor,
    color,
}: BasicCardProps) {
    const breakPoint = useMediaQuery('(min-width:600px)');

    return (
        <>
            <Card
                sx={{
                    width: 350,
                    backgroundColor: cardColor || 'transparent',
                    borderStyle: 'solid',
                    borderColor: color,
                    borderWidth: '0.5px',
                    display: 'flex',
                    alignITems: 'center',
                    justifyContent: 'center',
                }}
            >
                <CardContent
                    sx={{
                        display: 'flex',
                        gap: '30px',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        color: `${titleColor}`,
                        minHeight: '50px',
                    }}
                >
                    <div>{icon}</div>
                    <Typography
                        variant="h2"
                        fontSize={breakPoint ? '28px' : '18px'}
                        color={color}
                    >
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default dynamic(() => Promise.resolve(BasicCard), { ssr: false });
