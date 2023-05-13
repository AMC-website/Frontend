import { Box, Typography, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    function handleClick() {
        setIsOpen(!isOpen);
    }
    const linkStyles = {
        textDecoration: 'none',
        '&:hover': {
            cursor: 'pointer',
        },
        color: 'white',
    };

    return (
        <>
            <Box bgcolor={theme.palette.secondary.main}>
                <Box
                    minHeight="20vh"
                    // bgcolor={theme.palette.secondary.main}
                    flexDirection={`${breakPoint ? 'row' : 'column'}`}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    padding="20px"
                    sx={{
                        backdropFilter: 'blur(30px)',
                    }}
                >
                    <Typography variant="h1">Hello</Typography>
                    <Typography variant="h3">Copyright© 2023</Typography>
                    <Box display="flex" gap="20px">
                        <InstagramIcon fontSize="large" />
                        <FacebookIcon fontSize="large" />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
