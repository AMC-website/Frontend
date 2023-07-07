// import React, { useState } from 'react';
// import { Button, Box } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';

// const Carousel = ({ images }) => {
//     const [index, setIndex] = useState(0);

//     const handleNext = () => {
//         setIndex((oldIndex) => {
//             return oldIndex === images.length - 1 ? 0 : oldIndex + 1;
//         });
//     };

//     const handlePrev = () => {
//         setIndex((oldIndex) => {
//             return oldIndex === 0 ? images.length - 1 : oldIndex - 1;
//         });
//     };

//     return (
//         <Box
//             style={{
//                 position: 'relative',
//             }}
//         >
//             <AnimatePresence>
//                 <motion.img
//                     key={index}
//                     src={images[index].url}
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -50 }}
//                     transition={{ duration: 0.5 }}
//                     style={{
//                         position: 'absolute',
//                         width: '100%',
//                         y: '50%',
//                         x: '50%',
//                         translate: '(50%, 50%)',
//                     }}
//                 />
//             </AnimatePresence>
//         </Box>
//     );
// };

// export default Carousel;

import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex(
            currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
        );
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                flexDirection: 'row',
            }}
        >
            <IconButton onClick={handlePreviousClick}>
                <ChevronLeft />
            </IconButton>

            <motion.div
                key={currentImageIndex}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
                <img
                    src={images[currentImageIndex].url}
                    alt=""
                    style={{
                        height: 300,
                        width: 300,
                        objectFit: 'cover',
                    }}
                />
            </motion.div>

            <IconButton onClick={handleNextClick}>
                <ChevronRight />
            </IconButton>
        </Box>
    );
};

export default Carousel;
