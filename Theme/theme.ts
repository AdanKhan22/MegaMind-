// Import necessary modules
import { createTheme } from '@mui/material/styles';

// Extend the Theme interface
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

// Create and export the custom theme
const theme = createTheme({
  typography: {
    h1: {
      fontSize: '4rem',
      fontWeight: 600,
      fontFamily: 'Fira Sans Condensed, sans-serif',
      background: 'linear-gradient(to right, #3B82F6 0%, #D946EF 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(to right, #3B82F6 0%, #D946EF 100%)', // Gradient background
          color: 'white', // Text color
          border: 'none', // Remove default border
          borderRadius: '4px', // Border radius
          padding: '10px 20px', // Padding
          boxShadow: 'none', // Remove default box shadow
          '&:hover': {
            background: 'linear-gradient(to right, #2b5bb4 0%, #b634b4 100%)', // Inverted gradient on hover
            boxShadow: 'none', // Remove box shadow on hover
          },
        },
      },
    },
  },
  status: {
    danger: '#e53e3e', // Example custom status color
  },
});

export default theme;
