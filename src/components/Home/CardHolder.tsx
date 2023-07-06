import BasicCard from '@/components/BasicCard';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import GroupsIcon from '@mui/icons-material/Groups';
import ScienceIcon from '@mui/icons-material/Science';
import FlightIcon from '@mui/icons-material/Flight';
import HandymanIcon from '@mui/icons-material/Handyman';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Grid from '@mui/material/Grid';
import dynamic from 'next/dynamic';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { h4_, h5 } from '@/constants';

const CustomGrid = ({ children }: { children: React.ReactNode }) => {
    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            border="none"
            padding="2rem"
            display="flex"
            justifyContent="center"
        >
            {children}
        </Grid>
    );
};

interface CardHolderProps {
    titleColor: string;
    backgroundColor: string;
    cardColor?: string;
    color?: string;
}
function CardHolder({
    titleColor,
    backgroundColor,
    cardColor,
    color,
}: CardHolderProps) {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:1000px)');
    return (
        <Box
            color="white"
            display="flex"
            flexDirection="column"
            gap="35px"
            textAlign="center"
            bgcolor={backgroundColor}
            // padding="100px 10px"
        >
            <div>
                <Typography
                    variant="h1"
                    fontSize={breakPoint ? h4_ : h5}
                    color={titleColor}
                    textAlign="left"
                >
                    What makes us special?
                </Typography>
            </div>
            <Grid container display="flex">
                <CustomGrid>
                    <BasicCard
                        icon={
                            <SwipeUpIcon
                                style={{
                                    transform: 'scale(2.5)',
                                }}
                            />
                        }
                        title="Hands-on learning"
                        titleColor={titleColor}
                        cardColor={cardColor}
                        color={color}
                    />
                </CustomGrid>
                <CustomGrid>
                    <BasicCard
                        icon={
                            <HandymanIcon
                                style={{
                                    transform: 'scale(2.5)',
                                }}
                            />
                        }
                        title="Build-driven"
                        titleColor={titleColor}
                        cardColor={cardColor}
                        color={color}
                    />
                </CustomGrid>
                <CustomGrid>
                    <BasicCard
                        icon={
                            <EmojiObjectsIcon
                                style={{
                                    transform: 'scale(2.5)',
                                }}
                            />
                        }
                        title="Innovative"
                        titleColor={titleColor}
                        cardColor={cardColor}
                        color={color}
                    />
                </CustomGrid>
                <CustomGrid>
                    <BasicCard
                        icon={
                            <FlightIcon
                                style={{
                                    transform: 'scale(2.5)',
                                }}
                            />
                        }
                        title="Cutting-edge aviation"
                        titleColor={titleColor}
                        cardColor={cardColor}
                        color={color}
                    />
                </CustomGrid>
                <CustomGrid>
                    <BasicCard
                        icon={
                            <ScienceIcon
                                style={{
                                    transform: 'scale(2.5)',
                                }}
                            />
                        }
                        title="Inter-disciplinary"
                        titleColor={titleColor}
                        cardColor={cardColor}
                        color={color}
                    />
                </CustomGrid>
                <CustomGrid>
                    <BasicCard
                        icon={
                            <GroupsIcon
                                style={{
                                    transform: 'scale(2.5)',
                                }}
                            />
                        }
                        title="Collaborative"
                        titleColor={titleColor}
                        cardColor={cardColor}
                        color={color}
                    />
                </CustomGrid>
            </Grid>
        </Box>
    );
}

export default dynamic(() => Promise.resolve(CardHolder), { ssr: false });
