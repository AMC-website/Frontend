import { useEffect, useState } from 'react';
import styles from '@/styles/members.module.css';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

type MemberData = {
    name: string;
    role: string;
    image: string;
};

export default function MemberCard({ name, role, image }: MemberData) {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }
    function handleMouseOut() {
        setIsHovered(false);
    }
    return (
        <div
            style={{
                width: '90%',
                display: 'flex',
                justifyContent: 'flex-start',
                position: 'relative',
                gap: '20px',
                padding: '90px 30px 0px 90px',
                cursor: 'pointer',
                alignItems: 'flex-start',
                backgroundColor: '#F0E4DC',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseOut}
        >
            <Typography
                variant="h1"
                style={{
                    fontSize: '20px',
                    fontStyle: 'italic',
                }}
            >
                {role}
            </Typography>
            <Typography
                variant="h1"
                style={{
                    fontSize: '20px',
                    fontWeight: 'bolder',
                }}
            >
                {name}
            </Typography>
            <motion.div
                initial="hidden"
                animate={isHovered ? 'visible' : 'hidden'}
                transition={{
                    duration: 0.3,
                    type: 'spring',
                    ease: [0, 0.71, 0.2, 1.01],
                    damping: 50,
                    stiffness: 500,
                    restDelta: 0.001,
                }}
                variants={{
                    hidden: { opacity: 0, y: 400, rotate: 0 },
                    visible: { opacity: 1, y: 0, rotate: 8 },
                }}
                style={{
                    position: 'absolute',
                    left: '60%',
                    bottom: '20%',
                    display: 'block',
                    borderRadius: '0.5rem',
                }}
            >
                <img
                    src={`/members/${image}`}
                    style={{
                        height: '29vw',
                        width: '20vw',
                    }}
                    alt="profile"
                />
            </motion.div>
            <Box></Box>
        </div>
    );
}
