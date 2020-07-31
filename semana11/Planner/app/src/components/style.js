import styled from 'styled-components';
import React from 'react'


export const Card = styled.div`
    z-index: 98;
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    border: 1px solid #F6F6F6;
    border-radius: 8px;
    box-shadow: 1px 1px 4px 1px black;
    background-color: #f5f5f5;
    padding: 0;
    margin: 0;
`;

export const CardAddTask = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center;
    align-self: center;
    border: 1px solid #F6F6F6;
    border-radius: 8px;
    box-shadow: 1px 1px 4px 1px black;
    background-color: #f5f5f5;
    height: 8vh;
    width: fit-content;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: 'flex-start';
    width: fit-content;
    height: 20%;
 
`;

export const CellHeader = styled.div`
    margin: 1vw;
    display: flex;
    width: fit-content;
    height: 100%;
    padding: 1px;
    border-bottom: 1px black solid;
    justify-content: center;
    align-items: center;
`;


export const CardContent = styled.div`
    display: flex;
    width: fit-content;
    height: 80%;
`;

export const DayColumn = styled.div`
        display: flex;
        flex-flow: column wrap;
        width: fit-content;
        height: 80%;
        padding: 1px;
        margin: 1vw;
`;

export const Cell = styled.div`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10vh;
        padding: 1px;
        margin: 1vw 0;
        &:hover {
            background-color: #c7c7c7;
            cursor: pointer;
            color: white;
            box-shadow: 0px 1px 2px 0px black;
        } 
`;


export const AddBar = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    margin: 8px;
    background-color: #f5f5f5;
`

export const AddButton = styled.button`
    margin: 1vw;
`

export const Dialog = styled.div`
    width: 24vw;
    height: fit-content;
    position: fixed;
    align-self: center;
    z-index: 101;
    border: solid 1px #f5f5f5f5;
    box-shadow: 0px 1px 2px 0px black;
    background-color: #f5f5f5f5;
    display: flex;
    flex-direction: column;

`
export const NullDiv = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 100;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    background-color: black;
    filter: opacity(30%);
`

export const ActionArea = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
` 

export const DialogTitle = styled.div`
        width: 100%;
        font-size: 2ch;
        
`
