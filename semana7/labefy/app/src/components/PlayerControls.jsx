import React from "react";
import styled from "styled-components";

const ContainerPlayer = styled.div`
    display:flex;
    height: 100vh;
`;


class PlayerControls extends React.Component{


    render(){
        
        return <ContainerPlayer>
            <audio controls="controls">
                <source src={"http://spoti4.future4.com.br/1.mp3"} type="audio/mpeg"/>
                <button onClick={this.addTrackToPlayList}>ADD TO PLAYLIST</button>
            </audio>
        </ContainerPlayer> 

    }
}

export default PlayerControls;