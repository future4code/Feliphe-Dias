import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
 
  root: {
    display: 'flex',
    flexFlow: 'column wrap',  
    width: '24vw',
    height: '52vh',
    zIndex: 1,
    gridRow: '2/4',
    gridColumn: '2/3',

  },

  iconsTop: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    padding:'0px',
  },

  titleIcon: {
    margin: '8px 0', 
    height: '8vh',
    width: '8vw',
    alignSelf: 'center',
  },

  closeIcon: {
    margin: '8px 0', 
    height: '4vh',
    width: '4vw',
    alignSelf: 'flex-end',
  },

  buttonArea: {
      display:'flex',
      justifyContent: 'center',
  }
});