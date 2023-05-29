import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import dynamic from 'next/dynamic';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
} from '@mui/lab';

import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Tilt from '../../TiltComponent';
import TimelineElement from './TimelineElement';

interface TimelineProps {
    titleColor?: string;
    color?: string;
}

const CustomTimeline = ({ titleColor, color }: TimelineProps) => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;

    const breakPoint = useMediaQuery('(min-width:1170px)');
    const breakPoint2 = useMediaQuery('(min-width:600px)');

    const timelineElements: JSX.Element[] = [];
    for (let i = 0; i < 6; i++) {
        timelineElements.push(
            <TimelineElement
                key={i}
                index={i}
                title="Summa"
                content="poda"
                breakPoint={breakPoint}
                color={color}
                titleColor={titleColor}
            />
        );
    }

    return (
        <>
            <Typography
                variant="h1"
                fontSize={breakPoint ? '48px' : '40px'}
                color={titleColor}
                textAlign="center"
                margin="70px auto"
                width={breakPoint2 ? '45%' : '100%'}
                position="relative"
            >
                AeroChronicles
                <br />
                <Typography
                    variant="h3"
                    color="white"
                    textAlign="center"
                    margin="0 auto"
                    width="40%"
                    bgcolor={theme.palette.primary.main}
                    padding="5px"
                    borderRadius="5px"
                >
                    The journey
                </Typography>
            </Typography>

            <Timeline position={breakPoint ? 'alternate' : 'right'}>
                {timelineElements}
            </Timeline>
            <br />
            <Typography
                variant="h1"
                fontSize={breakPoint ? '48px' : '40px'}
                color={titleColor}
                textAlign="center"
                margin="70px auto"
                width={breakPoint2 ? '45%' : '100%'}
                position="relative"
            >
                Today <br />
            </Typography>
        </>
    );
};

export default dynamic(() => Promise.resolve(CustomTimeline), { ssr: false });
