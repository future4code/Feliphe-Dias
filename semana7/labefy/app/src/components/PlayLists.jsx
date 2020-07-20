import React from "react";
import styled from "styled-components";
import trashIcon from "../img/trash.svg"


const SeePlayLists = styled.div`
    display:flex;
    align-self: flex-start;
    align-items: flex-start;
    flex-flow: column wrap;
    height: 91vh;
    width: 24vw;
    color: black;
`

const ListDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

`;

const List = styled.button`
    margin: 2vh 16vw 2vw 0;
    border: none;
    outline: none;
    background-color: #D4D4D4;
    height: 4vh;
    border-radius: 4vw;
    font-size: 1.01em;
    &:hover{
        background-color: black;
        border: 1px solid white;
        color: white;
        border-radius: 4vw;
    }
`;

const TrashIcon = styled.img`
    height: 4vh;
    width: 2vw;

`;

export default props =>{

    return <SeePlayLists> 
    <button onClick={() => props.handleClick(0)}>Voltar</button>
        {props.playlists ? (props.playlists.map( list => {
            return <ListDiv key={list.id}><List onClick={()=> props.handleClick(2,list.id)}>{list.name}</List>
            <TrashIcon src={trashIcon} onClick={() => props.deletPlayList(list.id)}></TrashIcon>
            </ListDiv> 
                })) : "loading"}
    </SeePlayLists>
}