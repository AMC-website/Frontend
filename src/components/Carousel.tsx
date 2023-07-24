import React, { useState } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { color, h4, h5, h5_ } from '@/constants';
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

const ImageComponent = ({ images, current, isPrev }) => {
    const breakPoint = useMediaQuery('(min-width:600px)');

    return (
        <Box width="100%">
            <Typography
                variant="h2"
                fontSize={breakPoint ? h4 : h5}
                mb="35px"
                color={color}
            >
                Gallery
            </Typography>
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
                    justifyContent="space-between"
                >
                    <img
                        src={images[0].src}
                        alt={images[0].caption}
                        style={{
                            objectFit: 'cover',
                            height: breakPoint ? '335px' : '215px',
                            width: breakPoint ? '47%' : '100%',
                        }}
                    />

                    <img
                        src={images[1].src}
                        alt={images[1].caption}
                        style={{
                            objectFit: 'cover',
                            height: breakPoint ? '335px' : '0',
                            width: breakPoint ? '47%' : '0',
                        }}
                    />
                </Box>
            </motion.div>
        </Box>
    );
};

const Image = React.memo(ImageComponent);

const Carousel = () => {
    const length = images.length;
    const [current, setCurrent] = useState(0); // state for current image index
    const [prev, setPrev] = useState(false);
    const next = current + 1 <= length - 1 ? current + 1 : 0;

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
                        images={[images[current], images[next]]}
                        current={current}
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
                    <p style={{ marginTop: 'auto', marginBottom: 'auto' }}>←</p>
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
                    <p style={{ marginTop: 'auto', marginBottom: 'auto' }}>→</p>
                </Box>
            </Box>
        </>
    );
};

export default Carousel;
