import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer/AppContainer';
import {createMuiTheme, ThemeProvider } from "@material-ui/core/styles";


const theme = createMuiTheme({
  pallete: {
    primary: {
      light: '#e3f2fd',
      main: '#2196f3',
      dark: '#0d47a1'
    },
    secondary: {
        main: '#90caf9'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer></AppContainer>
    </ThemeProvider>
  );
}

export default App;
