import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { color, h4, h4_, h5, h6 } from '@/constants';

export default function ContactForm() {
    const breakPoint = useMediaQuery('(min-width:600px)');

    return (
        <Box
            component="form"
            sx={{
                mx: 'auto',
                pb: breakPoint ? '100px' : '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '50px',
                '@media (min-width: 600px)': {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                },
                color: color,
            }}
            width="85%"
            noValidate
            autoComplete="off"
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    gap: '20px',
                    '& .MuiInputBase-input': { fontSize: '1.1rem' }, // Increase input text font size
                    '& .MuiButton-root': {
                        fontSize: '1.2rem',
                        padding: '10px 24px',
                    }, // Increase submit button font size and padding
                    '& .MuiInputLabel-root': { fontSize: '20px' },
                    fontSize: 'large',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: breakPoint ? h4 : h5,
                    }}
                >
                    Get in Touch
                </Typography>

                <div>
                    <TextField
                        sx={{
                            minWidth: '100%',
                        }}
                        id="outlined-error"
                        label="First Name"
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-error"
                        label="Last Name"
                        variant="standard"
                        sx={{
                            minWidth: '100%',
                        }}
                    />
                </div>
                <div>
                    <TextField
                        sx={{
                            minWidth: '100%',
                        }}
                        id="outlined-error"
                        label="Email"
                        variant="standard"
                    />
                </div>
                <Button
                    sx={{
                        px: '20px',
                        py: '5px',
                        outline: 'solid',
                        maxWidth: breakPoint ? 'max-content' : '100%',
                        outlineColor: 'black',
                        outlineWidth: '1px',
                        borderRadius: '10px',
                        '&:hover': {
                            backgroundColor: 'lightcoral',
                        },
                        sm: {
                            maxWidth: 'max-content',
                        },
                        fontSize: h6,
                    }}
                    type="submit"
                    onClick={() => {}}
                >
                    Send
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    style={{
                        width: '100%',
                    }}
                    src={'/map.png'}
                    alt="googlemaps"
                />
            </Box>
        </Box>
    );
}
