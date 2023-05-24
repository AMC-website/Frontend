import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion';
import Text from './Text';

export default function AMCSection() {
    const breakPoint = useMediaQuery('(min-width:600px)');

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                overflowX: 'hidden',
                backgroundColor: 'rgba(0,0,0)',
                position: 'relative',
            }}
        >
            <Box width="auto" textAlign="center">
                <Typography
                    color="white"
                    variant="h1"
                    style={{
                        fontSize: `${breakPoint ? '120px' : '60px'}`,
                        letterSpacing: 3,
                    }}
                    display="grid"
                    justifyItems="center"
                    gap="10px"
                >
                    <motion.div>
                        <Text word="Aero" />
                    </motion.div>
                    <motion.div>
                        <Text word="Modelling" />
                    </motion.div>
                    <div>
                        <Text word="club" />
                    </div>
                    <motion.div>
                        <Typography
                            color="white"
                            variant="h2"
                            style={{
                                fontSize: '20px',
                            }}
                        >
                            {' '}
                            IIT (BHU), Varanasi
                        </Typography>
                    </motion.div>
                </Typography>
            </Box>
        </div>
    );
}
