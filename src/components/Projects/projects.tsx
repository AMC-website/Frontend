import Card from '@/components/Projects/ProjectCard';
import { bgColor, color, h4, h5 } from '@/constants';
import { Box, Typography, useMediaQuery } from '@mui/material';

export interface ModelData {
    modelName: string;
    modelDesc: string;
    modelImg: string;
}

export default function Projects() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:750px)');
    const modelData: ModelData[] = [
        {
            modelName: 'Stunt Plane',
            modelDesc:
                'This agile plane is capable of performing complex maneuvers at ease, making it the center of attraction of aerial acrobatics and airshows.',
            modelImg: '/model_imgs/stunt_plane.jpg',
        },
        {
            modelName: 'Tricopter',
            modelDesc:
                'Capable of maintaining stable flight with just 3 rotors. This tricopter provides a cost-effective alternative to expensive quadrotors and even provides greater time of flight.',
            modelImg: '/model_imgs/tricopter.jpg',
        },
        {
            modelName: 'Autonomous Delivery Drone',
            modelDesc:
                'This quadrotor equipped with an onboard computer is capable of autonomous navigation and path planning. It can precisely takeoff and land on the target without human intervention with the use of Robot Operating System.',
            modelImg: '/model_imgs/auto_delivery_drone.jpg',
        },
        {
            modelName: 'Prithvi Rocket',
            modelDesc:
                'This water-powered rocket is capable of attaining an altitude of more than 300 meters.',
            modelImg: '/model_imgs/prithvi_rocket.jpg',
        },
        {
            modelName: 'Hexacopter',
            modelDesc:
                'This drone with 6 rotors is made for high payload application. It can lift loads up to 5 kgs of payload maintaining stability and high time of flight.',
            modelImg: '/model_imgs/hexacopter.jpg',
        },
        {
            modelName: 'Helicopter',
            modelDesc:
                'Versatile aircraft capable of vertical takeoff and landing, offering maneuverability and utility in various applications such as transportation, search and rescue, and military operations.',
            modelImg: '/model_imgs/helicopter.jpg',
        },
        {
            modelName: 'Racing Drone',
            modelDesc:
                'Made for FPV racing, this drone is capable of flying at very high speed and traversing very sharp turns with ease.',
            modelImg: '/model_imgs/racing_drone.jpg',
        },
    ];

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
