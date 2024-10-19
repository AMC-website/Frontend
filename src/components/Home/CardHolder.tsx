import BasicCard from '@/components/About/BasicCard';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import GroupsIcon from '@mui/icons-material/Groups';
import ScienceIcon from '@mui/icons-material/Science';
import FlightIcon from '@mui/icons-material/Flight';
import HandymanIcon from '@mui/icons-material/Handyman';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import dynamic from 'next/dynamic';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { h4, h5 } from '@/constants';

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
    const breakPoint2 = useMediaQuery('(min-width:750px)');
    return (
        <Box
            color="white"
            display="flex"
            flexDirection="column"
            textAlign="center"
            bgcolor={backgroundColor}
        >
            <div>
                <Typography
                    variant="h1"
                    fontSize={breakPoint ? h4 : h5}
                    color={color}
                    textAlign="left"
                    mb="35px"
                >
                    Amenities{' '}
                </Typography>
            </div>
            <Box
                display="grid"
                gridTemplateColumns={
                    breakPoint2
                        ? '30% 30% 30%'
                        : breakPoint
                        ? '45% 45%'
                        : 'repeat(2, 45%)'
                }
                justifyContent={breakPoint ? 'space-between' : 'center'}
                gap="20px"
            >
                {' '}
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
            </Box>
        </Box>
    );
}

export default dynamic(() => Promise.resolve(CardHolder), { ssr: false });
