import React from 'react';


import {Card, TextField, FormControl, FormHelperText, Button, CardContent } from '@material-ui/core';
import {Typography} from '@material-ui/core';

import {useStyles} from './style';
import DropDown from '../CountryDropDown/DropDown';
import { useForm } from '../../Hooks/useHooks';
import TripsDropDown from '../TripsDropDown/TripsDropDown';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const url =' https://us-central1-labenu-apis.cloudfunctions.net/labeX/feliphe/trips/'

export default props=>{
    const {changePage} = props;
    const {form, onChange} = useForm({
        name: '',
        age: '',
        applicationText: '',
        profession: "",
        country: "",
        id: '',
    });
    const classes = useStyles();
    const history = useHistory();

    const applyToTrip = event=>{
        event.preventDefault();
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        }
        Axios
        .post(`${url}${form.id}/apply`, body)
        .then( response => history.push('/succes'))
        .catch(err => console.log(err.menssage))
    }
    
    return(
        <Card className={classes.card}>
        <form onSubmit={applyToTrip} >
        <CardContent className={classes.buttonContainer}>
            <Typography className={classes.typography} variant='subtitle1'>Canditatar-se a uma viagem:</Typography>
                    <FormControl className={classes.formStyle}>
                    <TextField 
                        onChange = {onChange}
                        value={form.name}
                        name='name' 
                        label='Nome' 
                        required='true' 
                        type='text' 
                        inputProps={{ pattern: "[A-z]{3,20}" }}
                        />
                    <FormHelperText id="Name">Seu Nome</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formStyle}>
                        <TextField 
                            onChange = {onChange}
                            value={form.age}
                            name='age' 
                            label='idade' 
                            required='true' 
                            type='number' 
                            inputProps={{ min: '18', max: '120' }}
                          />
                        <FormHelperText id="Name">Entre 18 e 120 anos</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formStyle}>
                        <TextField 
                            onChange = {onChange}
                            value={form.applicationText}
                            name='applicationText' 
                            label='Eu devo ir nessa viagem...'  
                            required='true' 
                            type='text' 
                            />
                        <FormHelperText id="applicationText">Nós de uma razão para selecionar você</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formStyle}>
                        <TextField 
                            onChange = {onChange}
                            value={form.profession}
                            name='profession'
                            label='Profissão' 
                            required='true' 
                            type='text' 
                            />
                        <FormHelperText id="profession">O que você faz ?</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formStyle}>
                        <DropDown 
                            onChange={onChange}
                            form = {form}
                        />
                        <FormHelperText id="countryName">Seu país de origem</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formStyle}>
                        <TripsDropDown 
                            onChange={onChange}
                            form = {form}
                        />
                        <FormHelperText id="tripName">Nome da viagem</FormHelperText>
                    </FormControl>
                    <CardContent className={classes.buttonContainer}>
                        <Button 
                            color={'primary'}
                            type={'submit'}
                            variant='contained'
                        >
                            Canditatar-se
                        </Button>
                    </CardContent>    
        </CardContent>
        </form>
        </Card>
        
    );
}