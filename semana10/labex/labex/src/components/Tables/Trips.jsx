import React, { useEffect, useState } from 'react';
import { Paper,TableBody, AppBar, Typography, IconButton, TableContainer, TableRow, TableHead, TableCell } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './Style';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';




const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/feliphe/'


export default props =>{
    const classes = useStyles();
    const [tripsDetais, setTripsDetais] = useState({});
    const [erro, setErro] = useState();
    const {trips, getTripsDetails, handlePage} = props;

  

    
    return <Paper className={classes.root}>
        <Header handlePage={handlePage}/>
        <Paper className={classes.content} elevation={1}>
            <TableContainer component={Paper} elevation={2}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Nome</TableCell>
                        <TableCell align="center">Descrição</TableCell>
                        <TableCell align="center">Planeta</TableCell>
                        <TableCell align="center">Duraração(Dias)</TableCell>
                        <TableCell align="center">Data</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trips.map( (row)=>{
                        return <TableRow key={row.name}>
                             <TableCell
                                    onClick={() => getTripsDetails(row.id)}
                                    className={classes.row}   
                                    component="th" 
                                    scope="row">
                                        {row.name}
                            </TableCell>
                            <TableCell
                                    className={classes.row} 
                                    align="center" 
                                    onClick={() => getTripsDetails(row.id)}
                                    >
                                        {row.description}
                            </TableCell>
                            <TableCell
                                className={classes.row}  
                                align="center" 
                                onClick={() => getTripsDetails(row.id)}>
                                    {row.planet}
                            </TableCell>
                            <TableCell
                                className={classes.row} 
                                align="center" 
                                onClick={() => getTripsDetails(row.id)}>
                                    {row.durationInDays}
                            </TableCell>
                            <TableCell
                                className={classes.row}  
                                align="center" 
                                onClick={() => getTripsDetails(row.id)}>
                                    {row.date}
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </TableContainer>
        </Paper>
    </Paper>
}