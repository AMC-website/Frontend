import Navbar from '@/components/Navbar/Navbar';
import type { AppProps } from 'next/app';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme.js';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Box position="relative" overflow="hidden">
                <Box position="absolute" top="0" width="100vw" left="0">
                    <Navbar />
                </Box>
                <Component {...pageProps} />
                <Box width="100%">
                    <Footer />
                </Box>
            </Box>
        </ThemeProvider>
    );
}
