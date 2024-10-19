import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';
import useMediaQuery from '@mui/material/useMediaQuery';
import { h6, h6_ } from '@/constants';
interface BasicCardProps {
    icon: JSX.Element;
    title: string;
    titleColor: string;
    cardColor?: string;
    color?: string;
}

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
                    width: 'auto',
                    backgroundColor: cardColor || 'transparent',
                    borderStyle: 'solid',
                    borderColor: color,
                    padding: '2px',
                    borderWidth: '0.5px',
                    display: 'flex',
                    alignITems: 'center',
                    justifyContent: 'center',
                    marginBottom: '35px',
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
                        fontSize={breakPoint ? h6 : h6_}
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
