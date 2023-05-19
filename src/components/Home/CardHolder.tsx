import BasicCard from '@/components/BasicCard';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import GroupsIcon from '@mui/icons-material/Groups';
import ScienceIcon from '@mui/icons-material/Science';
import FlightIcon from '@mui/icons-material/Flight';
import HandymanIcon from '@mui/icons-material/Handyman';
import Grid from '@mui/material/Grid';
import dynamic from 'next/dynamic';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const CustomGrid = ({ children }: { children: React.ReactNode }) => {
    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            border="none"
            padding="0"
            display="flex"
            justifyContent="center"
        >
            {children}
        </Grid>
    );
};
function CardHolder() {
    const theme = useTheme();

    return (
        <Box
            color="white"
            display="flex"
            flexDirection="column"
            gap="90px"
            textAlign="center"
            bgcolor="black"
            padding="60px"
        >
            <div>
                <Typography variant="h1" color={theme.palette.secondary.main}>
                    What makes us special?
                </Typography>
            </div>
            <div>
                <Grid container spacing={4} display="flex">
                    <CustomGrid>
                        <BasicCard
                            icon={
                                <SwipeUpIcon
                                    style={{
                                        transform: 'scale(3)',
                                    }}
                                />
                            }
                            title="Hands-on learning"
                        />
                    </CustomGrid>
                    <CustomGrid>
                        <BasicCard
                            icon={
                                <HandymanIcon
                                    style={{
                                        transform: 'scale(3)',
                                    }}
                                />
                            }
                            title="Build-driven"
                        />
                    </CustomGrid>
                    <CustomGrid>
                        <BasicCard
                            icon={
                                <FlightIcon
                                    style={{
                                        transform: 'scale(3)',
                                    }}
                                />
                            }
                            title="Cutting-edge aviation"
                        />
                    </CustomGrid>
                    <CustomGrid>
                        <BasicCard
                            icon={
                                <ScienceIcon
                                    style={{
                                        transform: 'scale(3)',
                                    }}
                                />
                            }
                            title="Inter-disciplinary"
                        />
                    </CustomGrid>
                    <CustomGrid>
                        <BasicCard
                            icon={
                                <GroupsIcon
                                    style={{
                                        transform: 'scale(3)',
                                    }}
                                />
                            }
                            title="Collaborative"
                        />
                    </CustomGrid>
                </Grid>
            </div>
        </Box>
    );
}

export default dynamic(() => Promise.resolve(CardHolder), { ssr: false });
