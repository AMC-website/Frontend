import Navbar from '@/components/Navbar/Navbar';
import { AppProps } from 'next/app';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme.js';
import Footer from '@/components/Footer';
import '@/styles/global.css';
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Box position="relative" overflow="hidden">
                <Box bgcolor="black">
                    <Navbar />
                </Box>

                <Component {...pageProps} />
                {/* <Component {...pageProps} /> */}

                <Box width="100%">
                    <Footer />
                </Box>
            </Box>
        </ThemeProvider>
    );
}
