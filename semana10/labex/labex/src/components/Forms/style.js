import  { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
  root:{
      height: '100vh',
      display: 'flex',
      flexFlow: 'column wrap',
      alignItems: 'center',
      justifyContent: 'flex-start',
  },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 'justify-content',
        width: '50vh',
    },
    formStyle: {
        margin: '2vh 2vw ',
    },

    buttonContainer: {
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'center',
    },

    typography: {
      margin: '2vh 2vw ',
    },
    

});