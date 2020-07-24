import React  from 'react';


import {useStyles} from './style'
import { Paper, Typography } from '@material-ui/core';




export default props =>{
    const classes = useStyles();

 


    return(
        <Paper className={classes.root} elevation={0}> 
            <Typography variant='h2'>Parabéns, processo concluido com sucesso.</Typography>
            <br/>
            <Typography variant='h3'>fique atento ao seu email!!</Typography>
        </Paper>

    ); 
}