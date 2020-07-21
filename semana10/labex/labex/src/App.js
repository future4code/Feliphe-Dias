import React from 'react';

import Router from "./Router";

import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        type: 'dark',
        main: "#311b92",

      }
    }
})

function App() {
  return ( 
    <ThemeProvider theme={theme}>
      <Router></Router>
    </ThemeProvider>    
  );
}

export default App;
