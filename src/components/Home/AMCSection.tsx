import { Box, Typography, useTheme, Link } from '@mui/material';

import { color, h6_, titleColor } from '@/constants';

import Logo from './Logo';

export default function AMCSection() {
    return (
        <Box
            color={color}
            alignItems="center"
            height="80vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
        >
            <Logo></Logo>
            {/* <Typography variant="h1" fontSize="11vw">
                Aero
            </Typography>
            <Typography variant="h1" fontSize="11vw" mb="36px">
                Modelling Club
            </Typography> */}
            {/* <Typography variant="h1" fontSize="13vw" mb="24px">
                Club
            </Typography> */}
            {/* <Typography fontSize="2vw" mb="4vw">
                IIT (BHU) Varanasi
            </Typography> */}
            <Link
                href="mailto:aero.iitbhu@gmail.com"
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
                            color: color,
                            backgroundColor: titleColor,
                            borderColor: titleColor,
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
