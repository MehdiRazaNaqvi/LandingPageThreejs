import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './screens/App';
import "./style/index.css"
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const root = ReactDOM.createRoot(document.getElementById('root'));

let theme = createTheme({
    palette: {
      primary: {
        main: '#0052cc', // Adjust this as needed
      },
      secondary: {
        main: '#edf2ff', // Adjust this as needed
      },
      type: 'dark', // Set the theme to dark mode
      Card: {
        background: 'black', // Dark background for cards
        color: '#ffffff', // Bright text color for cards
      },
      paper: {
        background: '#1c1c1c', // Even darker background for paper
      },
      container: {
        background: '#1c1c1c', // Even darker background for containers
      },
    },
  });
  

root.render(
    <ThemeProvider theme={theme}>
        <App />

    </ThemeProvider>


);


reportWebVitals();
