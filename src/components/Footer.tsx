import { Box, Typography, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Email } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface FooterProps {
    bgColor?: string;
    color?: string;
    titleColor?: string;
}

function Footer({ color, bgColor, titleColor }: FooterProps) {
    const route = useRouter();

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
    };

    const iconStyles = {
        '&:hover': {
            scale: '1.2',
        },
        transition: '300ms ease',
        fontSize: '40px',
        color:
            route.pathname === '/events' || route.pathname === '/about'
                ? 'white'
                : 'black',
    };

    return (
        <>
            <Box
                style={{
                    backgroundColor: bgColor,
                    padding: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    position: 'relative',
                }}
            >
                <Box
                    style={{
                        backgroundColor: color,
                        width: '90%',
                        height: '1px',
                        position: 'absolute',
                        top: '0',
                        left: '5%',
                    }}
                ></Box>

                <Box
                    sx={{
                        display: {
                            xs: 'flex',
                            md: 'grid',
                        },
                        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                        flexDirection: 'column',
                        gap: '70px',
                        width: '90%',
                        margin: '0 auto',
                    }}
                >
                    <Box>
                        <Typography
                            variant="h1"
                            style={{
                                color: titleColor,
                                paddingBottom: '20px',
                                fontSize: '30px',
                            }}
                        >
                            AMC
                        </Typography>
                        <Box
                            style={{
                                display: 'flex',
                                gap: '6px',

                                justifyContent: 'space-between',
                                maxWidth: '40%',
                                color: color,
                            }}
                        >
                            <Link href="https://www.facebook.com/amc.iitbhu/">
                                <FacebookIcon
                                    fontSize="inherit"
                                    sx={iconStyles}
                                ></FacebookIcon>
                            </Link>
                            <Link href="/">
                                <InstagramIcon
                                    fontSize="inherit"
                                    sx={iconStyles}
                                ></InstagramIcon>
                            </Link>
                            <Link href="/">
                                <Email
                                    fontSize="inherit"
                                    sx={iconStyles}
                                ></Email>
                            </Link>
                        </Box>
                    </Box>

                    <Box>
                        <Typography
                            variant="h1"
                            style={{
                                color: titleColor,
                                paddingBottom: '20px',
                                fontSize: '30px',
                            }}
                        >
                            Navigation
                        </Typography>

                        <Box
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                            }}
                        >
                            <Link
                                underline="none"
                                fontSize="20px"
                                href="/projects"
                                color={color}
                            >
                                <Typography variant="h4" fontSize="20px">
                                    Projects
                                </Typography>
                            </Link>

                            <Link
                                underline="none"
                                fontSize="20px"
                                href="/events"
                                color={color}
                            >
                                <Typography variant="h4" fontSize="20px">
                                    Events
                                </Typography>
                            </Link>

                            <Link
                                underline="none"
                                href="/about"
                                fontSize="20px"
                                color={color}
                            >
                                <Typography variant="h4" fontSize="20px">
                                    About
                                </Typography>
                            </Link>
                        </Box>
                    </Box>

                    <Box>
                        <Typography
                            variant="h1"
                            style={{
                                color: titleColor,
                                paddingBottom: '20px',
                                fontSize: '30px',
                            }}
                        >
                            Contact
                        </Typography>

                        <Box
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                color: color,
                            }}
                        >
                            <Typography
                                variant="h4"
                                style={{
                                    fontSize: '20px',
                                }}
                            >
                                Largos, Largo Santos 9, 1200-656 Lisboa
                            </Typography>
                            <Typography
                                variant="h4"
                                style={{
                                    fontSize: '20px',
                                }}
                            >
                                info@nunospace.com
                            </Typography>
                            <Typography
                                variant="h4"
                                style={{
                                    fontSize: '20px',
                                }}
                            >
                                Call us
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
