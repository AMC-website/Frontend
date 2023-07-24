import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { h4_, h5, h6 } from '@/constants';
import { color } from '@/constants';
import styles from '@/styles/contact.module.css';

export default function ContactForm() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const inputs = ['First Name', 'Last Name', 'Email'];

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
                    '& .MuiInputBase-input': {
                        fontSize: '1.1rem',
                        color: 'white',
                    },
                    '& .MuiButton-root': {
                        fontSize: '1.2rem',
                        padding: '10px 24px',
                    },
                    '& .MuiInputLabel-root': { fontSize: '20px' },
                    fontSize: 'large',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: breakPoint ? h4_ : h5,
                        fontWeight: 'bold',
                    }}
                >
                    Get in Touch
                </Typography>

                {inputs.map((input, index) => (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                        }}
                        key={index}
                    >
                        <label htmlFor={`${index}input`}>
                            <Typography variant="h4">{input}</Typography>
                        </label>
                        <input
                            placeholder={input}
                            id={`${index}input`}
                            className={styles.contactinput}
                        />
                    </Box>
                ))}

                <Button
                    sx={{
                        px: '20px',
                        py: '5px',
                        outline: 'solid',
                        maxWidth: breakPoint ? 'max-content' : '100%',
                        outlineColor: 'white',
                        outlineWidth: '1px',
                        borderRadius: '10px',
                        color: 'white',
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
                    width="100%"
                    style={{
                        margin: '20px',
                    }}
                    height="100%"
                    src={'/map.png'}
                    alt="googlemaps"
                />
            </Box>
        </Box>
    );
}
