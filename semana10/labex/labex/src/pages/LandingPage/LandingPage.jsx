import React, {useState} from "react";

import { useHistory } from 'react-router-dom';
import {Grid, TextAnimation, useStyle} from './Style';

import {Button, Paper, Typography} from '@material-ui/core';

import LoginCard from '../../components/LoginCard/LoginCard'



export default props =>{
    const [showLoginCard, setShowLoginCard] = useState(false);
    const history = useHistory();
    const classes =  useStyle();

    return(
        <Paper styled={{height: '100vh'}}>
            <Grid>
           { showLoginCard && <LoginCard handleVisible={setShowLoginCard} visibility={showLoginCard}/>}
            <TextAnimation>Bem vindo a labex, Junte-se a nossa jornada pelo universo!</TextAnimation>
            <Button 
                color={'primary'}
                onClick={ () => history.push('/Cadastro')}
                variant='contained' 
                size='medium' className={classes.button} >
                    <Typography variant='button'>
                            Inscreva-se
                    </Typography>
            </Button>
            <Button 
                size='medium' 
                onClick={ () => setShowLoginCard( !showLoginCard)}    
                className={classes.buttonLogin} 
                >
                    <Typography variant='button'>
                           Login
                    </Typography>
                </Button>
            </Grid>
        </Paper>


    ); 
    
}