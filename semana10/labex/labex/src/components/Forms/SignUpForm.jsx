import React, {useState} from 'react';

import {useStyles} from './style'

import { useForm} from '../../Hooks/useHooks';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {Button, Paper, Typography, Card, CardContent, TextField, InputAdornment, IconButton, FormControl, FormHelperText } from '@material-ui/core';
import Axios from 'axios';


const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/"

export default props =>{
    const classes = useStyles();
    const [person, setPersonData] = useState('');
    const {form, onChange, clearInputs} = useForm({name: "", password: ''});
    const [showPassword, setShowPassword] = useState(false);
    const {changePage} = props;

    const handleClick = event =>{
        event.preventDefault();
        postSignUp(form);
       
    }

    const postSignUp = (body) =>{
        Axios
        .post(`${url}feliphe/signup`, body)
        .then( response => {
            clearInputs();
            changePage(1);
        } )
        .catch(err => console.log(err.menssage))
    }

    return (
        <form className={classes.card} onSubmit={handleClick}>               
                <FormControl>
                        <TextField
                            value={form.email}
                            onChange = {onChange}
                            name='email'
                            type='email'
                            variant='filled'
                            label='Email'
                            required = {true}
                        />
                        <FormHelperText id="email">email@exemplo.com</FormHelperText>
                </FormControl>
                    <br/>
                <FormControl>
                        <TextField 
                            value={form.passwd}
                            onChange = {onChange}
                            name='password' 
                            label='Senha'
                            variant='filled'
                            required = {true}
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
                        <FormHelperText id="passwd">Pode conter qualquer tipo de caracter</FormHelperText>
                </FormControl>
                            <br/>
                <FormControl> 
                    <Button 
                        size='medium'
                        variant='contained' 
                        color={'primary'}
                        type='submit'
                        >   
                            <Typography variant='button'>Próximo</Typography>
                    </Button>
                </FormControl>
        </form>
    );
}
