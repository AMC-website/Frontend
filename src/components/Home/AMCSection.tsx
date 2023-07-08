import { Box, Typography, useTheme, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion';
import { h2, h4, h6, h6_ } from '@/constants';

interface AMCSectionProps {
    color: string;
}

export default function AMCSection({ color }: AMCSectionProps) {
    const theme = useTheme();

    return (
        <Box
            color={color}
            textAlign="center"
            height="87vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
        >
            <Typography variant="h1" fontSize="11vw">
                Aero
            </Typography>
            <Typography variant="h1" fontSize="11vw" mb="36px">
                Modelling Club
            </Typography>
            {/* <Typography variant="h1" fontSize="13vw" mb="24px">
                Club
            </Typography> */}
            {/* <Typography fontSize="2vw" mb="4vw">
                IIT (BHU) Varanasi
            </Typography> */}
            <Link
                href="mailto:someone@yoursite.com"
                sx={{
                    textDecoration: 'none',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                }}
            >
                <Typography
                    variant="h2"
                    fontSize={h6_}
                    borderRadius="1.3em"
                    padding="0.93em 3.33em"
                    display="inline-block"
                    sx={{
                        borderStyle: 'solid',
                        borderColor: 'rgba(255,255,255,1)',
                        borderWidth: '2px',
                        color: 'rgba(255,255,255,1)',
                        backgroundColor: 'transparent',
                        '&:hover': {
                            color: 'black',
                            backgroundColor: theme.palette.secondary.main,
                            borderColor: theme.palette.secondary.main,
                        },
                        transition:
                            '0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95)',
                    }}
                >
                    Contact us
                </Typography>
            </Link>
        </Box>
    );
}
