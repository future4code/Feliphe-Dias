import React, { useEffect, useState } from 'react';
import { Paper, Card, TextField, FormControl, FormHelperText, Button, CardContent } from '@material-ui/core';
import { useStyles } from './style';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { useForm } from '../../Hooks/useHooks';





const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/feliphe/trips'

export default props =>{
    const classes = useStyles();
    const {handlePage, token} = props;
    const {form, onChange} = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: '',
    });

  
    const createTrip = event =>{
        event.preventDefault();
        const autho  = {
            headers: {
                auth: token,
            },
        };

        Axios
        .post(`${url}`,form, autho)
        .then( response => {
            handlePage(3);
        })
    }

    
    return <Paper className={classes.root}>
        <Header handlePage={handlePage}/>
        <Card className={classes.card} elevation={2}>
            <form onSubmit={createTrip}>    
                <FormControl className={classes.formStyle}>
                    <TextField
                        required
                        value={form.name}
                        onChange={onChange}
                        name='name'
                        label='Nome da viagem'
                    /> 
                    <FormHelperText id="Name">Ex: Minha super viagem a Jupiter</FormHelperText>
                </FormControl>
                <FormControl className={classes.formStyle}>
                    <TextField
                        required
                        value={form.planet}
                        onChange={onChange}
                        name='planet'
                        label='Nome do Planeta'
                    /> 
                    <FormHelperText id="Name">Ex: Jupiter</FormHelperText>
                </FormControl>
                <FormControl className={classes.formStyle}>
                    <TextField
                        required
                        value={form.date}
                        onChange={onChange}
                        name='date'
                        type='date'
                    /> 
                    <FormHelperText id="Name">ex: 25/12/2077</FormHelperText>
                </FormControl>
                <FormControl className={classes.formStyle}>
                    <TextField
                        required
                        value={form.description}
                        onChange={onChange}
                        name='description'
                        label='Descrição da viagem'
                    /> 
                    <FormHelperText id="Name">ex: Explorar os mares de Jupiter</FormHelperText>
                </FormControl>
                <FormControl className={classes.formStyle}>
                    <TextField
                        required
                        value={form.durationInDays}
                        onChange={onChange}
                        type='number'
                        name='durationInDays'
                        label='Duração(Dias)'
                        inputProps={{min: '7'}}
                    /> 
                    <FormHelperText id="Name">Nome da viagem que deseja criar</FormHelperText>
                </FormControl>
                <CardContent className={classes.buttonContainer}>
                        <Button 
                            color={'primary'}
                            type={'submit'}
                            variant='contained'
                        >
                            Criar Viagem
                        </Button>
                    </CardContent>    
            </form>
        
        </Card>
       
    </Paper>
}