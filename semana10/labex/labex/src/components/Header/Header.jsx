import React, { useState } from 'react';

import {useStyles} from './style';
import {AppBar, Button, IconButton, } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import MenuIcon from '@material-ui/icons/Menu';


export default props =>{
    const classes = useStyles();
    const [visibleMenu, setVisibleMenu] = useState(false);
    const {handlePage}  = props;

    return (
        <>
        <AppBar className={classes.header}>
        <IconButton 
            onClick ={() => setVisibleMenu( !visibleMenu)}
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu">
            <MenuIcon/>
        </IconButton>
        </AppBar>
        <Collapse in={visibleMenu} className={classes.dropDown}>
            <Button 
                className={classes.button} 
                color='primary' 
                variant='contained' 
                size='small'
                onClick = {() => handlePage(0)}
                >
                    Listar Viagens
                </Button>
                <Button 
                className={classes.button} 
                color='primary' 
                variant='contained' 
                size='small'
                onClick = {() => handlePage(0)}
                >
                    Criar Viagens
                </Button>
        </Collapse>
        </>
    );   
}