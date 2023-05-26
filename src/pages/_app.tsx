import Navbar from '@/components/Navbar/Navbar';
import type { AppProps } from 'next/app';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme.js';
import Footer from '@/components/Footer';
import '@/styles/global.css';
import { useRouter } from 'next/router.js';
import Cursor from '@/components/Cursor';
export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <ThemeProvider theme={theme}>
            <Cursor>
                <></>
            </Cursor>
            <Box position="relative" overflow="hidden">
                {router.pathname !== '/' && (
                    <div
                        style={{
                            backgroundColor: 'black',
                            width: '100%',
                            padding: '20px 0',
                        }}
                    >
                        <Navbar />
                    </div>
                )}

                <Component {...pageProps} />
                <Box width="100%">
                    <Footer />
                </Box>
            </Box>
        </ThemeProvider>
    );
}
