import {
    Box,
    Typography,
    Backdrop,
    Card,
    CardMedia,
    CardActionArea,
    CardContent,
    Zoom,
    Slide,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styles from '@/styles/events.module.css';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ThreeDCard from '@/components/ThreeDCard';
export default function EventCard() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }

    return (
        <Box>
            <ThreeDCard>
                <Card onClick={() => handleOpen()} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/image.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Lizard
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ThreeDCard>

            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: '30px',
                }}
                open={open}
                onClick={handleClose}
            >
                <CloseIcon
                    sx={{
                        display: {
                            md: 'none',
                            xs: open ? 'flex' : 'none',
                        },
                        fontSize: 'inherit',
                        position: 'absolute',
                        right: '50px',
                        top: '50px',
                        color: 'white',
                    }}
                ></CloseIcon>

                <Slide
                    in={open}
                    direction="up"
                    style={{
                        transitionDuration: '500ms',
                        transitionDelay: '100ms',
                    }}
                >
                    <Box
                        sx={{
                            height: '100%',
                            width: '100%',
                            textAlign: 'left',
                            cursor: 'crosshair',
                            paddingLeft: {
                                md: '190px',
                            },
                            display: {
                                md: 'block',
                                xs: 'flex',
                            },
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                color: '#DBFF00',
                                fontWeight: '500',
                                fontSize: {
                                    lg: '70px',
                                    md: '60px',
                                    xs: '40px',
                                },
                                paddingBottom: {
                                    md: '40px',
                                },
                                paddingTop: {
                                    md: '150px',
                                },
                            }}
                        >
                            Title
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: {
                                    lg: '24px',
                                    md: '20px',
                                    xs: '18px',
                                },
                            }}
                        >
                            Content
                        </Typography>
                    </Box>
                </Slide>

                <Slide
                    in={open}
                    direction="right"
                    style={{
                        transitionDuration: '500ms',
                        transitionDelay: '200ms',
                    }}
                >
                    <img
                        src="/image.jpg"
                        alt="image"
                        className={styles.card_img}
                    ></img>
                </Slide>
            </Backdrop>
        </Box>
    );
}
