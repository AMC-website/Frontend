import React, { useState, useEffect } from 'react';
import Card from '@/components/Projects/ProjectCard';
import { bgColor, color, h4, h5 } from '@/constants';
import { Box, Typography, useMediaQuery } from '@mui/material';
import GetProjects from 'lib/GetProjects';

export default function Projects() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:750px)');
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const project = await GetProjects();
                setProjectsData(project);
                console.log(GetProjects());
            };
            fetchData();
        } catch (error) {
            console.error('Error reading data: ', error);
        }
    }, []);

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
                    {projectsData.map((model, id) => (
                        <Card
                            key={id}
                            projectName={model.modelName}
                            projectContent={model.modelDesc}
                            projectThumbnail={model.modelImg}
                        />
                    ))}
                </Box>
            </Box>
        </>
    );
}
