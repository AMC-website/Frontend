import { motion } from 'framer-motion';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {
    Backdrop,
    Box,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { h2_, h4, h5, h5_, h6, h6_, titleColor } from '@/constants';

interface CardProps {
    projectName: string;
    projectContent: string;
    projectThumbnail: string;
}
export default function Card({
    projectName,
    projectContent,
    projectThumbnail,
}: CardProps) {
    const theme = useTheme();
    const [isClicked, setIsClicked] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);

    function handleClick() {
        setIsClicked(!isClicked);
    }

    const breakPoint = useMediaQuery('(min-width:750px)');

    return (
        <div
            style={{
                position: 'relative',
                color: titleColor,
                marginBottom: '35px',
                height: '350px',
                cursor: 'pointer',
            }}
            onClick={handleClick}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
        >
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: 'black',
                    display: 'flex',
                    fontSize: '30px',
                    padding: '20px',
                    flexDirection: breakPoint ? 'row' : 'column',
                    gap: '20px',
                }}
                className="closeIconCursor"
                open={isClicked}
            >
                <Box
                    height={breakPoint ? '100%' : '55%'}
                    width={breakPoint ? '55%' : '100%'}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box width="70%" height="auto">
                        <Typography
                            variant="h1"
                            fontSize={breakPoint ? h2_ : h4}
                            fontWeight="bolder"
                            color={theme.palette.secondary.main}
                            mb="25px"
                        >
                            {projectName}
                        </Typography>

                        <Typography
                            variant="h3"
                            fontSize={breakPoint ? h6 : h6_}
                            lineHeight={1.5}
                            mb="25px"
                        >
                            {projectContent}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    height={breakPoint ? '100%' : '45%'}
                    width={breakPoint ? '45%' : '100%'}
                >
                    <img
                        src={projectThumbnail}
                        alt="drone image"
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%',
                            borderRadius: '10px',
                        }}
                    />
                </Box>
            </Backdrop>

            <img
                src={projectThumbnail}
                alt="drone image"
                style={{
                    objectFit: 'cover',
                    height: '80%',
                    width: '100%',
                    borderRadius: '10px',
                    marginLeft: 'auto',
                }}
            />
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography
                    variant="h2"
                    fontSize={h5_}
                    textAlign="left"
                    display="inline-block"
                    position="relative"
                    zIndex={2}
                >
                    {projectName}
                    <motion.div
                        style={{
                            position: 'absolute',
                            bottom: -5,
                            left: 0,
                            height: '1.5px',
                            backgroundColor: titleColor,
                            zIndex: -1,
                        }}
                        initial={{ width: '0%' }}
                        animate={{ width: mouseOver ? '100%' : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                </Typography>
                <motion.div
                    style={{ fontSize: h5 }}
                    initial={{ y: 10, opacity: 0, scale: 0 }}
                    animate={{
                        y: mouseOver ? 0 : 10,
                        opacity: mouseOver ? 1 : 0,
                        scale: mouseOver ? 1.5 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <KeyboardArrowDownIcon fontSize="large" color="disabled" />
                </motion.div>
            </Box>
        </div>
    );
}
