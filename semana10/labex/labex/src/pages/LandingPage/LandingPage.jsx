import React from "react";

import { useHistory } from 'react-router-dom';
import {Grid} from './Style';

import {Button} from '@material-ui/core';



export default props =>{
    const history = useHistory();
    
    return <Grid>
        <Button onClick={() => history.push('/Cadastro')}>NEXT</Button>
    </Grid>
}