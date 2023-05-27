import Tilt from '@/components/TiltComponent';
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
} from '@mui/lab';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const options = {
    scale: 1.1,
    speed: 1000,
    max: 15,
    axis: 'y',
    reverse: true,
};

interface TimelineElementProps {
    title: string;
    content: string;
    index: number;
    breakPoint: boolean;
    titleColor?: string;
    color?: string;
}
export default function TimelineElement({
    title,
    content,
    index,
    breakPoint,
    color,
    titleColor,
}: TimelineElementProps) {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
                display="flex"
                justifyContent={
                    breakPoint
                        ? index / 2 === Math.floor(index / 2)
                            ? 'start'
                            : 'end'
                        : 'start'
                }
            >
                <Tilt options={options}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{
                            duration: 1,
                            type: 'spring',
                            ease: [0, 0.71, 0.2, 1.01],
                            damping: 50,
                            stiffness: 500,
                            restDelta: 0.001,
                        }}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 150,
                                rotate:
                                    index / 2 === Math.floor(index / 2)
                                        ? 30
                                        : -30,
                            },
                            visible: { opacity: 1, y: 0, rotate: 0 },
                        }}
                        style={{
                            backgroundColor: 'rgba(255,255,255,1.5)',
                            backdropFilter: 'blur(80px)',
                            padding: '20px',
                            minWidth: '220px',
                            maxWidth: '300px',
                            minHeight: '100px',
                            borderRadius: '10px',
                            margin: '0',
                        }}
                    >
                        <Typography
                            variant="h2"
                            fontSize="24px"
                            margin="0"
                            textAlign="left"
                            color={titleColor}
                        >
                            {title}
                        </Typography>
                        <br />
                        <Typography variant="h4" textAlign="left" color={color}>
                            {content}
                        </Typography>
                    </motion.div>
                </Tilt>
            </TimelineContent>
        </TimelineItem>
    );
}
