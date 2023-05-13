import { Box, Typography, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';

interface TextTemplateProps {
    name: string;
    title?: string;
    content?: string;
    breakPoint?: boolean;
    src?: string;
}

function TextTemplate({
    name,
    title,
    content,
    breakPoint,
    src,
}: TextTemplateProps) {
    const theme = useTheme();

    return (
        <>
            <div
                style={{
                    minHeight: '100vh',
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    padding: '30px 0',
                }}
            >
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        overflow: 'hidden',
                        backgroundColor: 'black',
                        display: 'flex',
                        justifyContent: 'right',
                        alignItems: 'center',
                        zIndex: '-10',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                    }}
                >
                    <img
                        src={src}
                        alt="drone image"
                        style={{
                            objectFit: 'cover',
                            height: '95%',
                            width: '95%',
                            position: 'relative',
                            right: '18%',
                        }}
                    />
                </div>
                <Box
                    color="white"
                    display="flex"
                    gap="30px"
                    flexDirection="column"
                    justifyContent="center"
                    width="70%"
                    textAlign={breakPoint ? 'left' : 'center'}
                >
                    <Typography
                        variant="h1"
                        color={theme.palette.secondary.main}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="h3"
                        lineHeight="2.5"
                        color="rgba(255,255,255,0.85)"
                        fontSize={breakPoint ? '18px' : '14px'}
                    >
                        {content}
                    </Typography>
                </Box>
            </div>{' '}
        </>
    );
}

export default dynamic(() => Promise.resolve(TextTemplate), { ssr: false });
