import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import dynamic from 'next/dynamic';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

interface CustomVerticalTimelineProps {
    primary: string;
    secondary: string;
    date?: string;
    title: string;
    content: string;
}

const CustomVerticalTimelineElement = ({
    primary,
    secondary,
    date,
    title,
    content,
}: CustomVerticalTimelineProps) => {
    const contentStyle = {
        background: `${primary}`,
        color: `${primary}`,
        borderRadius: '0px',
    };
    const contentArrowStyle = {
        borderRight: `7px solid ${primary}`,
    };

    const iconStyle = { background: `black`, color: 'white' };
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date={date}
            iconStyle={iconStyle}
        >
            <h3 className="vertical-timeline-element-title">
                <div>
                    <Typography variant="h2">{title}</Typography>
                </div>
            </h3>
            <br></br>

            <Typography variant="h4" color="white">
                {content}
            </Typography>
        </VerticalTimelineElement>
    );
};

export default dynamic(() => Promise.resolve(CustomVerticalTimelineElement), {
    ssr: false,
});
