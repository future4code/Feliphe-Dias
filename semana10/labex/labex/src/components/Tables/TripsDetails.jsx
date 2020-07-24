import React, { useEffect, useState } from 'react';
import { Paper,TableBody, TableContainer, TableRow, TableHead, TableCell } from '@material-ui/core';
import { useStyles } from './Style';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';




const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/feliphe/'


export default props =>{
    const classes = useStyles();
    const [tripsDetais, setTripsDetais] = useState({});
    const pathParam = useParams();
    const [erro, setErro] = useState();
    const {trip, handlePage, candidates} = props;

    
    return <Paper className={classes.root}>
        {console.log(candidates)}
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
                    {trip &&
                        <TableRow key={trip.name}>
                             <TableCell
                                    className={classes.row}   
                                    component="th" 
                                    scope="row">
                                        {trip.name}
                            </TableCell>
                            <TableCell
                                    className={classes.row} 
                                    align="center" 
                                    >
                                        {trip.description}
                            </TableCell>
                            <TableCell
                                className={classes.row}  
                                align="center" 
                                >
                                    {trip.planet}
                            </TableCell>
                            <TableCell
                                className={classes.row} 
                                align="center" 
                                >
                                    {trip.durationInDays}
                            </TableCell>
                            <TableCell
                                className={classes.row}  
                                align="center" 
                                >
                                    {trip.date}
                            </TableCell>
                        </TableRow>
                    }
                </TableBody>
            </TableContainer>
        </Paper>
        
        <Paper className={classes.content} elevation={1}>
            <TableContainer component={Paper} elevation={2}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Nome</TableCell>
                        <TableCell align="center">Idade</TableCell>
                        <TableCell align="center">Por Que devo ir</TableCell>
                        <TableCell align="center">Profissão</TableCell>
                        <TableCell align="center">País</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {candidates && candidates.map( e =>{
                        return <TableRow key={e.name}>
                        <TableCell
                               className={classes.row}   
                               component="th" 
                               scope="row">
                                   {e.name}
                       </TableCell>
                       <TableCell
                               className={classes.row} 
                               align="center" 
                               >
                                   {e.age}
                       </TableCell>
                       <TableCell
                           className={classes.row}  
                           align="center" 
                           >
                               {e.applicationText}
                       </TableCell>
                       <TableCell
                           className={classes.row} 
                           align="center" 
                           >
                               {e.profession}
                       </TableCell>
                       <TableCell
                           className={classes.row}  
                           align="center" 
                           >
                               {e.country}
                       </TableCell>
                   </TableRow>

                    })
                        
                    }
                </TableBody>
            </TableContainer>
            
        </Paper>

    </Paper>
}