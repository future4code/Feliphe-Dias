import React, {useState} from 'react';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {useStyles} from './style'
import { Card, CardContent, Typography, Button, TextField, InputAdornment, } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CancelIcon from '@material-ui/icons/Cancel';
import { useForm } from '../../Hooks/useHooks';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/feliphe/login'


export default props =>{
    const classes = useStyles();
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const {form, onChange, clearInputs} = useForm({ 
        name: "",
        password: '',
    });

    const login = event => {
        event.preventDefault();
        Axios
        .post(url,form)
        .then( response => {
            localStorage.setItem('token', response.data.token)
            history.push(`/home/${response.data.token}`);
        })
        .catch( err => { console.log('usario ou senha imvalida')})
    }


    return <Card className={classes.root}>
           
           <IconButton className={classes.closeIcon} onClick={() => props.handleVisible( !props.visibility)}>
                <CancelIcon/>
            </IconButton> 
           
           <CardContent className={classes.iconsTop}> 
                <AccountBoxIcon className={classes.titleIcon}></AccountBoxIcon>
            </CardContent>
            
            <form onSubmit={login}>
            <CardContent>
                    <TextField
                        onChange={onChange}
                        value={form.email}
                        name='email' 
                        label='Email'
                        type='email'
                        required = 'true'
                        />
                    <TextField
                        onChange={onChange}
                        value={form.password}
                        name='password' 
                        label='Senha'
                        required = 'true'
                        type={ showPassword ? 'text' : 'password' }
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <IconButton
                                    arial-label='VER SENHA'
                                    onClick = {() => setShowPassword(!showPassword)}
                                >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>,
                        }}
                    />
                </CardContent>
                <CardContent className={classes.buttonArea}>
                    <Button 
                        variant='contained'
                        type='submit'
                        >
                        <Typography variant='button'>Login</Typography>
                    </Button>
                </CardContent>
            </form>            
    </Card>
}