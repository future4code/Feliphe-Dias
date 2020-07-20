import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';



const Bio = styled.p`
    align-self: flex-start;
    color: white;
    font-size: 1em;
    margin: 0 0 5vh 2vh;
    padding: 0;    
`

const MyCardMedia = styled(CardMedia)`
    
`;

const MyCard = styled(Card)`
        
        margin: 2vh 0 0 0;
        align-self: center;
        width: 30vw;
        height: 70vh;
`

const useStyles = makeStyles({
    
    card: {
        display: 'flex',
        flexDirection: 'column',
        margin: '2vh 0 0 0',
        alignSelf: 'center',
        width: '30vw',
        height: '70vh',
    },

    likeIcon: {
        color: "orange",
        height: "10vh",
        width: "10vw",
        '&:hover':{
            color: "#b2102f",
            cursor: "pointer",
        }
    },

    closeIcon: {
        color: 'blue',
        height: "10vh",
        width: "10vw",
        '&:hover':{
            color: "red",
            cursor: "pointer",
        }
    },

    media: {
        display: 'flex',
        flexFlow: "column wrap",
        justifyContent: "flex-end",
        height: "80%",
        width: '100%',
    },

    cardAction: {
        display: 'flex',
        justifyContent: 'space-around',
        height: '20%',
        width: '100%',
    },

    title: {
        alignSelf:' flex-start',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
        color: 'white',
        fontSize: '1.5em',
        margin: '0 0 2vw 2vh',    
        padding: 0,   
    },
    bio: {
        alignSelf:' flex-start',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
        color: 'white',
        fontSize: '1em',
        margin: '0 0 0vw 2vh',    
        padding: 0,  
    }
})

export default props =>{
    const classes = useStyles()
    const [like, setLike] = useState(false);
    const [profile, setProfile] = useState({});
    const [notLike, setNotLike] = useState(false);

    function getPerson(){
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/feliphe/person';
        axios
        .get(url)
        .then( response => setProfile(response.data.profile))
    }

    function choosePerson(body){
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/feliphe/choose-person';
        axios
        .post(url,body)
        .then( response => setProfile(response.data.profile))
    }

    function clearHistory(){
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/feliphe/clear'
        axios
        .put(url)
        .then( () => getPerson())
        .catch( err => console.log(err.menssage))
    }

    useEffect(() => {
       getPerson();
    }, [])

   

    function handleLike(id){
        choosePerson({"id": id,"choice": true});
        getPerson();
        setLike(true);
    }

    return <> { profile ?
        <Card className={classes.card}>
             <CardMedia className={classes.media} image = {profile.photo && profile.photo}>
                <CardContent className={classes.title}>{profile.name && profile.name}</CardContent>
                <CardContent className={classes.bio}>{profile.bio && profile.bio}</CardContent>
            </CardMedia>
            <CardActions className={classes.cardAction}>
                <CloseIcon className={classes.closeIcon}></CloseIcon>
                <FavoriteIcon className={classes.likeIcon} onClick={() => handleLike(profile.id)}></FavoriteIcon>
            </CardActions> 
            </Card>
            :
         <>{clearHistory()}</>    
    } 
       
        </>
           
            
            
}