import { Box, Typography, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';

function Navbar() {
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
            <Box
                height="10vh"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="10px"
                sx={{
                    backdropFilter: 'blur(30px)',
                }}
                color={theme.palette.secondary.main}
                bgcolor="rgba(255,255,255,0.05)"
            >
                <Typography variant="h1">Hello</Typography>
                <Box
                    display={breakPoint ? 'flex' : isOpen ? 'grid' : 'none'}
                    gap="4px"
                    position={breakPoint ? 'static' : 'absolute'}
                    top="100%"
                    left="0"
                    width={`${breakPoint ? '70%' : '100%'}`}
                    minHeight="100%"
                    justifyContent={breakPoint ? 'space-between' : ''}
                    alignItems={breakPoint ? 'center' : ''}
                >
                    <Link sx={linkStyles}>
                        <Typography variant="h3" padding="10px">
                            Projects
                        </Typography>
                    </Link>
                    <Link sx={linkStyles}
                    href='/events'
                    >
                        <Typography variant="h3" padding="10px">
                            Events
                        </Typography>
                    </Link>
                    <Link sx={linkStyles}>
                        <Typography variant="h3" padding="10px">
                            Members
                        </Typography>
                    </Link>
                    <Link sx={linkStyles}>
                        <Typography variant="h3" padding="10px">
                            About
                        </Typography>
                    </Link>
                </Box>
                <Box display={`${breakPoint ? `none` : `block`}`}>
                    <CloseIcon
                        onClick={() => {
                            handleClick();
                        }}
                    />
                </Box>
            </Box>
        </>
    );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
