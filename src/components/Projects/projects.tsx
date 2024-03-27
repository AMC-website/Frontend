import Card from '@/components/Projects/ProjectCard';
import { bgColor, color, h4, h5 } from '@/constants';
import { Box, Typography, useMediaQuery } from '@mui/material';
import modelData from '@/data/projects';

export default function Projects() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:750px)');

    return (
        <>
            <Box
                bgcolor={bgColor}
                gap="35px"
                display="flex"
                width="85%"
                marginX="auto"
                flexDirection="column"
            >
                <Typography
                    variant="h1"
                    color={color}
                    textAlign="left"
                    fontSize={breakPoint ? h4 : h5}
                >
                    Our Models
                </Typography>
                <Box
                    display="grid"
                    gridTemplateColumns={
                        breakPoint2
                            ? '30% 30% 30%'
                            : breakPoint
                            ? '45% 45%'
                            : '80%'
                    }
                    justifyContent={breakPoint ? 'space-between' : 'center'}
                >
                    {modelData.map((modelDataInst, index) => (
                        <Card
                            key={index}
                            projectName={modelDataInst.modelName}
                            projectContent={modelDataInst.modelDesc}
                            projectThumbnail={modelDataInst.modelImg}
                        />
                    ))}
                </Box>
            </Box>
        </>
    );
}
