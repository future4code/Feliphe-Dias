import React from 'react'
import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles({
    root:{
        height: '100vh',
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    content: {
        marginTop: '10vh',
        display: 'flex',
        width: 'fit-content',
        height: 'fit-content',
    },

    row: {
        '&:hover':{
            cursor: 'pointer',
            height: '8vh',
        }
    },

});