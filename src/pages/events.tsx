import EventCard from '@/components/EventCard';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const array = [1, 2, 3, 4, 5, 6];

export default function Events() {
    const theme = useTheme();
    return (
        <>
            <Box
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 'maxContent',
                    paddingTop: '100px'
                }}
            >
                <Box
                    style={{
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h1">
                        <span
                            style={{
                                color: `${theme.palette.secondary.main}`,
                            }}
                        >
                            E
                        </span>
                        vents
                    </Typography>
                    <Typography variant="h3">Our latest events</Typography>
                </Box>

                <Box
                    sx={{
                        display:{
                            md:"grid",
                            xs:"flex",
                        },
                        gridTemplateColumns: {
                            lg:'auto auto auto',
                            md:'auto auto',
                            xs:'auto',
                            
                        },
                        padding: '140px 100px',
                        gridGap: '30px',
                        flexDirection: 'column',
                    }}
                >
                    {array.map((item, index) => (
                        
                        <EventCard key={index + 1}></EventCard>
                       
                    ))}
                </Box>
            </Box>
        </>
    );
}
