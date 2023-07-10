import React, { useState } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { h5_, h6 } from '@/constants';

interface CarouselProps {
    backgroundColor: string;
    color: string;
    titleColor: string;
}

// Our images list
const images = [
    {
        src: 'flight1.jpg',
        caption: 'Caption 1',
    },
    {
        src: 'flight2.jpg',
        caption: 'Caption 2',
    },
    {
        src: 'jets.jpg',
        caption: 'Caption 3',
    },
    // add as many images as you want.
];

const ImageComponent = ({
    image,
    current,
    backgroundColor,
    titleColor,
    color,
    isPrev,
}) => {
    const breakPoint = useMediaQuery('(min-width:600px)');

    return (
        <motion.div
            key={current}
            initial={{ opacity: 0, x: isPrev ? -100 : 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{ width: '100%' }}
        >
            <Box
                display="flex"
                flexDirection={breakPoint ? 'row' : 'column'}
                alignItems="center"
                justifyContent="center"
            >
                <img
                    src={image.src}
                    alt={image.caption}
                    style={{
                        objectFit: 'cover',
                        height: breakPoint ? '475px' : '250px',
                        width: breakPoint ? '50%' : '100%',
                    }}
                />
                <Box
                    height={breakPoint ? '475px' : '250px'}
                    width={breakPoint ? '50%' : '100%'}
                    padding="35px 10px"
                    boxSizing="border-box"
                    display="flex"
                    justifyContent="start"
                    alignItems="start"
                    bgcolor={backgroundColor}
                    border="0.5px solid"
                    borderLeft={breakPoint ? 'none' : '0.5px solid'}
                    borderTop={breakPoint ? '0.5px solid' : 'none'}
                    borderColor={color}
                >
                    <Typography variant="h4" fontSize={h6} color={titleColor}>
                        {image.caption}
                    </Typography>
                </Box>
            </Box>
        </motion.div>
    );
};

const Image = React.memo(ImageComponent);

const Carousel = ({ backgroundColor, color, titleColor }: CarouselProps) => {
    const length = images.length;

    const [current, setCurrent] = useState(0); // state for current image index
    const [prev, setPrev] = useState(false);

    // function to handle next button click
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        setPrev(false);
    };

    // function to handle prev button click
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        setPrev(true);
    };

    return (
        <>
            <Box
                sx={{
                    width: '85%',
                    marginX: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: '25px',
                }}
            >
                <AnimatePresence mode="wait">
                    <Image
                        image={images[current]}
                        current={current}
                        backgroundColor={backgroundColor}
                        titleColor={titleColor}
                        color={color}
                        isPrev={prev}
                    />
                </AnimatePresence>
            </Box>

            <Box width="85%" marginX="auto" fontSize={h5_}>
                <Box
                    sx={{ cursor: 'pointer' }}
                    padding="5px 30px"
                    border="1px solid"
                    borderColor={color}
                    color={color}
                    display="inline-block"
                    borderRadius="500px"
                    mr="14px"
                    onClick={() => prevSlide()}
                >
                    ←
                </Box>
                <Box
                    sx={{ cursor: 'pointer' }}
                    padding="5px 30px"
                    border="1px solid"
                    color={color}
                    borderColor={color}
                    display="inline-block"
                    borderRadius="500px"
                    onClick={() => nextSlide()}
                >
                    →
                </Box>
            </Box>
        </>
    );
};

export default Carousel;
