import styled, {keyframes} from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import marteImg from '../../img/marte.jpg'


export const useStyle = makeStyles( {
        button: {
                gridRow: '3/3',
                gridColumn: '2/3',
                alignSelf: 'start',
        },

        buttonLogin: {
                gridRow: '3/4',
                gridColumn: '2/3',
                alignSelf: 'center',
        }
});



export const Grid = styled.div`
        display: grid;
        justify-items: center;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        background-image: url(${marteImg});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 100vh;
        width: 100%;
`
const Type = keyframes`
        0% {
            width: 0ch;
        }
        100% {
           width: 58ch;
        }
`

export const TextAnimation = styled.h3`
        color: white;
        grid-row: 2/2;
        grid-column: 2/2;
        align-self: center;
        animation: ${Type} 4s steps(58);
        font-family: consolas;
        border-right: 4px solid white;
        width: 58ch;
        overflow: hidden;
        white-space: nowrap;
`;



