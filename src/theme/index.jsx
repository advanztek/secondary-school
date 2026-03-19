import { createTheme } from '@mui/material/styles';

export const colors = {
    primary: {
        main: '#1B5AAE',        
        light: '#2E6EC4',    
        dark: '#0D3A7A',        
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#F0A500',                      
        light: '#FFB800',   
        dark: '#C07800',  
        contrastText: '#0D3A7A',
    },
    neutral: {
        umbra: '#2C3E50',       
        umbraLight: '#3D5166',  
        offWhite: '#F5F7FA',   
        offWhite2: '#EEF2F7',   
        cream: '#FDFEFF',      
    },
    background: {
        default: '#F5F7FA',    
        paper: '#FFFFFF',
        dark: '#0D3A7A',        
        section: '#EEF2F7',    
    },
    text: {
        primary: '#0A1628',      
        secondary: '#2C3E50',  
        muted: '#5A6A7A',     
        light: '#FFFFFF',
        gold: '#F0A500',
    },
    divider: '#D8E2F0',
};

export const typography = {
    fontFamily: {
        main: '"Merriweather", "Georgia", serif',
    },
    fontWeight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
    },
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
    },
};

const theme = createTheme({
    palette: {
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.background,
        text: colors.text,
        divider: colors.divider,
    },

    typography: {
        fontFamily: typography.fontFamily.main,
        h1: { fontWeight: typography.fontWeight.extraBold, fontSize: typography.fontSize['4xl'] },
        h2: { fontWeight: typography.fontWeight.bold,      fontSize: typography.fontSize['3xl'] },
        h3: { fontWeight: typography.fontWeight.bold,      fontSize: typography.fontSize['2xl'] },
        h4: { fontWeight: typography.fontWeight.semiBold,  fontSize: typography.fontSize.xl    },
        h5: { fontWeight: typography.fontWeight.semiBold,  fontSize: typography.fontSize.lg    },
        h6: { fontWeight: typography.fontWeight.semiBold,  fontSize: typography.fontSize.base  },
        body1: { fontWeight: typography.fontWeight.regular, fontSize: typography.fontSize.base, lineHeight: 1.8 },
        body2: { fontWeight: typography.fontWeight.regular, fontSize: typography.fontSize.sm,   lineHeight: 1.7 },
        button: { fontWeight: typography.fontWeight.semiBold, textTransform: 'none', fontSize: typography.fontSize.sm },
    },

    shape: { borderRadius: 8 },
});

export default theme;