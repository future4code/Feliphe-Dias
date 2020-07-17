import React, {useState} from "react";
import {Container} from "./style";


import CardPessoa from "../CardPessoa";

import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Collapse from '@material-ui/core/Collapse';
import Card from "@material-ui/core/Card"
import CardMatch from "./CardMatch";



const object = {
       "id": "xUrxMGvODWZa4ZASbfwx",
      "age": 26,
      "name": "Carol Danvers",
      "photo": "https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp",
      "bio": "Gosto de voar e de gatos. Procuro relações que respeitem minha independência."
}


const useStyles = makeStyles({

    cardMenu: {
        height: '10vh',
        display: 'flex',
        justifyContent: 'space-around',
    },

    cardIconConf: {
        height: '80%',
        width: '20%',
        '&:hover': {            
            color: '#00b0ff',
        },
    },

    cardIconFire: {
        height: '80%',
        width: '20%',
        '&:hover': {
            color: '#FF5300',
        },
    },

    cardHeader: {
        height: '2vh',
        margin: '0 0 8vh 0',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
    },
    menu: {
        height: '10vh',
        width: '20%',
    },


})

export default props =>{
    const classes = useStyles();
    const [likes, setLikes] = useState({});
    const [matchScreen, setMatchScreen] = useState(false);
    const [mainScreen, setMainScreen] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    function handleScreen(screen){
        switch(screen){
            case 1:
                setMainScreen(true);
                setMatchScreen(false);
                break;
            case 2:
                setMainScreen(false);
                setMatchScreen(true);
                break;
        }
    }   
  
 

    return <Container>
 
        <div className={classes.cardHeader}>
            <div className={classes.menu} onMouseEnter={() => setShowMenu( !showMenu)} onMouseLeave={() => setShowMenu( !showMenu)}>
            <Collapse in={showMenu} className={classes.collapseMenu}>
                <Card className={classes.cardMenu}>
                    <FaceIcon onClick={() => handleScreen(1)} className={classes.cardIconConf}></FaceIcon>
                    <WhatshotIcon onClick={() => handleScreen(2)} className={classes.cardIconFire}></WhatshotIcon>
                </Card>
            </Collapse>
            </div>
        </div>
        { mainScreen && <CardPessoa></CardPessoa>}
        { matchScreen && <CardMatch likes={likes}></CardMatch>}
     
    </Container>

}