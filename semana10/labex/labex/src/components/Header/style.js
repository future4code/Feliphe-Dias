import  { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
    header: {
        display: 'flex',
        padding: '0 2vw',
    },

    menuButton: {
        alignSelf: 'flex-start'

    },

    dropDown: {
        margin: '8vh 0vw 0vh  1vw',
        alignSelf: 'flex-start',
        display: 'flex',
        height: 'fit-content',
        width: 'fit-content',
    },

    button: {
        margin: '0vh 1vw',
        height: '6vh',
        width: '12vw',
    }
});