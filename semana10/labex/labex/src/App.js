import React from 'react';

import Router from "./Router";

import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import{ green, purple }from '@material-ui/core/colors/';
import CreateTrip from './components/Forms/CreateTrip';



const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: green,
      secondary: purple,
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
