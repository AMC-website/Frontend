import { createTheme } from '@mui/material/styles';
import localFont from '@next/font/local';
const Roobert = localFont({
    src: '../public/font/Roobert-Regular.ttf',
    display: 'swap',
  });


export const shades = {
    pink: {
        100: '#FD8A8A',
    },
    yellow: {
        100: '#F1F7B5',
    },
    green: {
        100: '#A8D1D1',
    },
    purple: {
        100: '#9EA1D4',
    },
};

export const colors = {
    primary: {
        100: '#cccccc',
        200: '#b3b3b3',
        300: '#999999',
        400: '#808080',
        500: '#666666',
        600: '#4d4d4d',
        700: '#333333',
        800: '#1a1a1a',
        900: '#000000',
    },

    secondary: {
        100: '#c2e184',
        200: '#b8dc70',
        300: '#aed75b',
        400: '#a4d247',
        500: '#9acd32',
        600: '#8bb92d',
        700: '#7ba428',
        800: '#6c9023',
        900: '#5c7b1e',
    },

    neutral: {
        100: '#666666',
        200: '#4d4d4d',
        300: '#333333',
        400: '#1a1a1a',
        500: '#000000',
        600: '#000000',
        700: '#000000',
        800: '#000000',
        900: '#000000',
    },
};

export const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary[800],
        },
        secondary: {
            main: colors.secondary[500],
        },
        neutral: {
            main: colors.neutral[500],
        },
    },

    typography: {
        fontFamily: [Roobert.style.fontFamily],
        fontSize: 11,
        h1: {
            
            fontSize: 48,
        },
        h2: {
           
            fontSize: 36,
        },
        h3: {
            fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
            fontSize: 18,
        },
        h4: {
            fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
            fontSize: 14,
        },
    },
});
