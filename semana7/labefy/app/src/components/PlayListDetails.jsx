import React from "react";
import styled from "styled-components"

const Menu = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
`;

const Input = styled.input`
    margin: 1vh 0.5vw;
`;

const Label = styled.label`
    margin: 1vh 0.5vw 0.5vh 0.5vw;
`;

export default props =>{

    return (
            <Menu>
                <button onClick={() => props.handleMenu(1)}>Voltar</button>
                <Label>name:<Input value={props.inputTrackNameValue} onChange={props.handleInputNameChange} /></Label>
                <Label>artist:<Input value={props.inputTracArtistValue} onChange={props.handleInputTrackArtistChange} /></Label>
                <Label>url:<Input value={props.inputTrackUrlValue} onChange={props.handleInputTrackUrlChange} /></Label>
                <button onClick={() =>  props.handleAddTrack(props.actualPlayListId,props.inputTrackNameValue,props.inputTracArtistValue,props.inputTrackUrlValue)}>ADD</button>
                <>{props.playListTracks ? (props.playListTracks.map( song => {
                    return(
                    <div key={song.id}>
                        <button onClick={()=> props.handleSongClick(song.url)}>{song.name}</button>
                        <span onClick={() => props.handleDeleteTrack(props.actualPlayListId,song.id)}>X</span>
                    </div>
                    ); 
                })) : "loading"}</>
            </Menu>

    );  
}