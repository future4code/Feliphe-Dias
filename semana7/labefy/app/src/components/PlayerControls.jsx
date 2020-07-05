import React from "react";
import styled from "styled-components";

const ContainerPlayer = styled.div`
    display:flex;
    align-self: flex-end;
    height: 91vh;
`;


export default props =>{
    
    return (
       props.songUrl ? <ContainerPlayer>
            <audio controls="controls">
                <source src={props.songUrl} type="audio/mpeg"/>
            </audio>
        </ContainerPlayer> : <div>No Song</div> 

    );

}

