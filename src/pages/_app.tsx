import Navbar from '@/components/Navbar';
import type { AppProps } from 'next/app';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme.js';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <ThemeProvider theme={theme}>
                <Box>
                    <Box zIndex="10">
                        <Navbar />
                    </Box>
                    <Component {...pageProps} />
                </Box>
            </ThemeProvider>
        </div>
    );
}
