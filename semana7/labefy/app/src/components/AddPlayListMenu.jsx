import React from "react"
import styled from "styled-components";


const Menu = styled.div`
    display: flex;
    align-items: flex-start;
    width: fit-content;
    flex-flow: column wrap;

`;

const SeePlayListsButton = styled.button`
   
`



const AddPlayListButton = styled.button`
    align-self: flex-start;
    border-radius: 18vw;
    outline: none;
`; 

const Img = styled.img`
    height: 4vh;
    width: 2vw;
`

const PlayLists = styled.div`
    display: flex;
    overflow: auto;
    height: 20vh;
    width: 20vw;
`;

class AddPlayListMenu extends React.Component{
    state = {
        isAdd: false
    }

    

    render(){
        return <Menu>
                <label>PlayList:
                    <input onChange={this.props.handleChangeInput} value={this.props.inputValue} />
                    <AddPlayListButton onClick={this.props.handleButtonClick}>ADD</AddPlayListButton>
                     
                </label>
                <SeePlayListsButton onClick={() => this.props.handleMenu(1)}>Playlists</SeePlayListsButton>
                </Menu>    
    }
}

export default AddPlayListMenu;