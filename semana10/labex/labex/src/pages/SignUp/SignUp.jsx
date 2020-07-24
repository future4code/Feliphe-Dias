import React, {useState} from 'react';


import {useStyles} from './style'
import Header from '../../components/Header/Header';
import SignUpForm from '../../components/Forms/SignUpForm';
import ApplyToTrip from '../../components/Forms/ApplyToTrip';
import { Paper } from '@material-ui/core';




export default props =>{
    const classes = useStyles();
    const [page, setPage] = useState(1);
 

   const changePage = pageNumber =>{
      setPage(pageNumber)
    }

    let render = <></>

    switch(page){
        case 0:
            render = <SignUpForm changePage={changePage}/>
            break;
        case 1:
            render = <ApplyToTrip changePage={changePage}></ApplyToTrip>
            break;
        case 2:
            render = <div>oi</div>
            break;
    }

    return(
        
        <Paper className={classes.root} elevation={0}>
            {render}
        </Paper>

    ); 
}