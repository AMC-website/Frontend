import { Box, Typography, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Email } from '@mui/icons-material';

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
            <Box
                style={{
                    backgroundColor: '#f0e4dc',
                    padding: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Box
                    style={{
                        backgroundColor: theme.palette.primary.main,
                        width: '90%',
                        height: '1px',
                        margin: '0 0 30px 0',
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
                    }}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            style={{
                                color: theme.palette.primary.main,
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
                                fontSize: '40px',
                                justifyContent: 'space-between',
                                maxWidth: '40%',
                            }}
                        >
                            <FacebookIcon fontSize="inherit"></FacebookIcon>
                            <InstagramIcon fontSize="inherit"></InstagramIcon>
                            <Email fontSize="inherit"></Email>
                        </Box>
                    </Box>

                    <Box>
                        <Typography
                            variant="h6"
                            style={{
                                color: theme.palette.primary.main,
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
                            >
                                projects
                            </Link>

                            <Link
                                underline="none"
                                fontSize="20px"
                                href="/members"
                            >
                                members
                            </Link>

                            <Link
                                underline="none"
                                fontSize="20px"
                                href="/events"
                            >
                                events
                            </Link>

                            <Link
                                underline="none"
                                fontSize="20px"
                                href="/about"
                            >
                                about
                            </Link>
                        </Box>
                    </Box>

                    <Box>
                        <Typography
                            variant="h6"
                            style={{
                                color: theme.palette.primary.main,
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
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                style={{
                                    fontSize: '20px',
                                }}
                            >
                                Largos, Largo Santos 9, 1200-656 Lisboa
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                style={{
                                    fontSize: '20px',
                                }}
                            >
                                info@nunospace.com
                            </Typography>
                            <Typography
                                variant="subtitle1"
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
