import Navbar from '@/components/Navbar/Navbar';
import { AppProps } from 'next/app';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme.js';
import Footer from '@/components/Footer';
import '@/styles/global.css';
import { useRouter } from 'next/router';

import useMediaQuery from '@mui/material/useMediaQuery';
export default function App({ Component, pageProps }: AppProps) {
    let router = useRouter();

    const breakPoint = useMediaQuery('(min-width:900px)');
    return (
        <ThemeProvider theme={theme}>
            <Box position="relative" overflow="hidden">
                {/* Checking for pathName used so that in readDoc Feature so that there no nav bar  and footeris shown */}
                {router.asPath === '/' ? (
                    <Box bgcolor="black">
                        <Navbar
                            sticky={true}
                            staticLogo={breakPoint ? false : true}
                        />
                    </Box>
                ) : (
                    <Box bgcolor="black">
                        <Navbar sticky={false} staticLogo={true} />
                    </Box>
                )}

                <Component {...pageProps} />
                <Box width="100%">
                    <Footer />
                </Box>
            </Box>
        </ThemeProvider>
    );
}
