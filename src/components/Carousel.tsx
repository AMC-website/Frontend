import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = ({ images }) => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((oldIndex) => {
            return oldIndex === images.length - 1 ? 0 : oldIndex + 1;
        });
    };

    const handlePrev = () => {
        setIndex((oldIndex) => {
            return oldIndex === 0 ? images.length - 1 : oldIndex - 1;
        });
    };

    return (
        <Box
            style={{
                position: 'relative',
            }}
        >
            <AnimatePresence>
                <motion.img
                    key={index}
                    src={images[index].url}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        y: '50%',
                        x: '50%',
                        translate: '(50%, 50%)',
                    }}
                />
            </AnimatePresence>
        </Box>
    );
};

export default Carousel;
