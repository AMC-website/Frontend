import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import dynamic from 'next/dynamic';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import CustomVerticalTimelineElement from './CustomVertTimelineElement';

interface TimelineProps {
    titleColor?: string;
    color?: string;
}

const Timeline = ({ titleColor, color }: TimelineProps) => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const lastIconStyle = {
        background: `${primary}`,
        color: 'white',
    };
    const breakPoint = useMediaQuery('(min-width:1170px)');
    const breakPoint2 = useMediaQuery('(min-width:600px)');

    return (
        <>
            <Typography
                variant="h1"
                fontSize={breakPoint ? '48px' : '40px'}
                color={titleColor}
                textAlign={breakPoint2 ? 'center' : 'left'}
                margin={breakPoint ? '0 auto' : '0'}
                width={breakPoint2 ? '45%' : '100%'}
                position="relative"
            >
                AeroChronicles
                <Typography
                    variant="h3"
                    color="white"
                    textAlign="center"
                    position="absolute"
                    left={breakPoint ? '30%' : '0'}
                    top="110%"
                    width="40%"
                    bgcolor={theme.palette.primary.main}
                    padding="5px"
                    borderRadius="5px"
                >
                    The journey
                </Typography>
            </Typography>
            <br />
            <br />
            <VerticalTimeline lineColor={titleColor}>
                <CustomVerticalTimelineElement
                    primary={titleColor}
                    secondary={secondary}
                    date="2019 - present"
                    title="Consultant"
                    content="lorem ipsum"
                />
                <CustomVerticalTimelineElement
                    primary={titleColor}
                    secondary={secondary}
                    date="2019 - present"
                    title="Consult"
                    content="lorem ipsum"
                />
                <CustomVerticalTimelineElement
                    primary={titleColor}
                    secondary={secondary}
                    date="2019 - present"
                    title="Consultant"
                    content="lorem ipsum"
                />
                <CustomVerticalTimelineElement
                    primary={titleColor}
                    secondary={secondary}
                    date="2019 - present"
                    title="Consultant"
                    content="lorem ipsum"
                />
                <CustomVerticalTimelineElement
                    primary={titleColor}
                    secondary={secondary}
                    date="2019 - present"
                    title="Consultant"
                    content="lorem ipsum"
                />
                <CustomVerticalTimelineElement
                    primary={titleColor}
                    secondary={secondary}
                    date="2019 - present"
                    title="Consultant"
                    content="lorem ipsum"
                />
                <VerticalTimelineElement iconStyle={lastIconStyle} />
            </VerticalTimeline>
            <Typography
                variant="h1"
                color="black"
                textAlign="center"
                fontSize={breakPoint ? '48px' : '40px'}
                margin={breakPoint ? '0 auto' : '0'}
                minWidth="10%"
                maxWidth="20%"
                borderRadius="5px"
                padding="5px"
            >
                Today
            </Typography>
        </>
    );
};

export default dynamic(() => Promise.resolve(Timeline), { ssr: false });
