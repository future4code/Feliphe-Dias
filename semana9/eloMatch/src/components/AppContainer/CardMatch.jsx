import React, { useState, useEffect } from "react";
import axios from "axios";

import {makeStyles} from '@material-ui/core/styles'
import {Card, CardContent, CardMedia}from '@material-ui/core'

const useStyles = makeStyles({
    
    card: {
        padding: '1vh',
        display: 'flex',
        flexDirection: 'column',
        margin: '2vh 0 0 0',
        alignSelf: 'center',
        width: '30vw',
        height: '70vh',
    },

    title: {
        alignSelf: 'center',
        fontSize: '1.5em',
    },

    name: {
        fontSize: '1.2em',
    },

    cardMedia: {
        height: '8vh',
        width: '8vw',
        borderRadius: '10vh',
    },

    matchList: {
        display: 'flex',
        alignSelf: 'flex-start',
        flexDirection: 'column',
        border: ' 1px solid black',
        width: '80%',
        height: '80%',
    },

})


export default props =>{
    const classes = useStyles();
    const [match, setMatch] = useState([]);
    
    function getMatch(){
        const url ='https://us-central1-missao-newton.cloudfunctions.net/astroMatch/feliphe/matches';
        axios
        .get(url)
        .then( response => {setMatch(response.data.matches);  console.log(response.data.matches)})
        .catch(err => console.log(err.menssage))
    }

    useEffect(() => {
        getMatch();
    }, [])

    return <Card className={classes.card}>
        <CardContent className={classes.title}>Matches</CardContent>
        <CardContent className={classes.matchList}>
        {match.map( e  => {
            return <> 
            <img className={classes.cardMedia} src={e.photo}/>
        <CardContent className={classes.name} >{e.name}</CardContent>
            </>
        })}
        </CardContent>
    </Card>
}