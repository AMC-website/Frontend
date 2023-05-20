import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import dynamic from 'next/dynamic';
import useMediaQuery from '@mui/material/useMediaQuery';

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
    const breakPoint = useMediaQuery('(min-width:600px)');

    const contentStyle = {
        background: `${primary}`,
        color: `${primary}`,
        borderRadius: '0px',
    };
    const contentArrowStyle = {
        borderRight: `7px solid ${primary}`,
    };

    const iconStyle = {
        background: `black`,
        color: 'black',
        transform: 'scale(0.6)',
        transition: 'transform 5s ease-out',
    };
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
                    <Typography
                        variant="h2"
                        fontSize={breakPoint ? '36px' : '28px'}
                    >
                        {title}
                    </Typography>
                </div>
            </h3>
            <br></br>

            <Typography
                variant="h4"
                color="white"
                fontSize={breakPoint ? '18px' : '10px'}
            >
                {content}
            </Typography>
        </VerticalTimelineElement>
    );
};

export default dynamic(() => Promise.resolve(CustomVerticalTimelineElement), {
    ssr: false,
});
