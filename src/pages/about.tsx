import ParallaxImage from '@/components/Home/ParallaxImage';
import MovingText from '@/components/Home/MovingText';
import { Box } from '@mui/material';
import ReactDOM from 'react-dom';

export default function About() {
    return (
        <>
            <Box
                sx={{
                    background: 'black',
                    height: '300vh',
                }}
            >
                <a href="#///">
                    {' '}
                    <MovingText bgColor="black"></MovingText>
                </a>
            </Box>
        </>
    );
}
