import React from "react";
import styled from "styled-components";
import PlayerControls from "./PlayerControls"
import PlayListDetails from "./PlayListDetails"
import AddPlayListMenu from "./AddPlayListMenu"
import PlayLists from "./PlayLists"
import menuImg from "../img/menu.svg"
import axios from "axios";


const MenuImg = styled.img`
    margin: 1vh 1vw;
    height: 6vh;
    width: 2vw;
    &:hover{
        cursor: pointer;
        filter: contrast(10%);
    }
`
const Container = styled.div`
    display:flex;
    align-self: stretch;
    height: 91vh;
    background-color: #2E2E2E;
`;

const ActualTrack = styled.div`
     height: 91vh;
     align-self: stretch;
`;


const Menu = styled.div`
    display:flex;
    align-self: flex-start;
    background-color: #D4D4D4;
    height: 91vh;
    width: 24vw;
    color: black;
`
const Header = styled.div`
    display:flex;
    height: 9vh;
    width: 100%;
    background-color: #B7B7B7;

`;

const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`
const authentication = { headers:{ Authorization: "feliphe-rodrigues-turing"}}


class Player extends React.Component{
    state = {
        showMenu: false,
        menu: 0,
        inputPlayListValue: "",
        inputTrackName: "",
        inputTrackArtist: "",
        inputTrackUrl: '',
        actualPlayListId: "",
        playListTracks: undefined,
        playlists: undefined,
        showPlayLists: false,
        songUrl: undefined
    }

    componentDidMount(){
        this.getAllPlayList()
    }
    

// dbFunctions
    getPlayListTrack = id =>{
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,authentication)
        .then(response => this.setState({playListTracks: response.data.result.tracks}))
        .catch( err => console.log(err.menssage))
    }

    getAllPlayList = () =>{
        axios
            .get(url,authentication)
            .then( response =>  this.setState({playlists: response.data.result.list}))
            .catch(err => console.log(err.menssage))
    }

    createPlayList = playListName =>{
        const body = { "name": playListName}
        this.setState({playlists: [...this.state.playlists, body]});
        axios
        .post(url, body, authentication)
        .then( response => alert( `Playlist ${playListName} criado com sucesso.`))
        .catch( err => console.log(err.menssage))
    }

    addTrackToPlayList = (id,name,artist,urlTrack) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = { name: name, artist: artist, url: urlTrack}
        this.setState({playListTracks: [...this.state.playListTracks, body]})
        axios
        .post(url,body,authentication)
        .then( response => this.getPlayListTrack(id))
        .catch( err => console.log(err.menssage))
    }

    deletPlayList = id =>{
        this.setState({playlists: this.state.playlists.filter( listItem => listItem.id !== id)})
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,authentication)
    }

    deleteTrack = (playListId,trackId) =>{
        this.setState({playListTracks: this.state.playListTracks.filter( song => song.id !== trackId)})
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playListId}/tracks/${trackId}`,authentication)
    }

// Onchange
    onChangeInput = event =>{
        this.setState({inputPlayListValue: event.target.value})
    }
    
    handleInputNameChange = event =>{
        this.setState({inputTrackName: event.target.value});
    }
    
    handleInputTrackArtistChange = event =>{
        this.setState({inputTrackArtist: event.target.value})
    }

    handleInputTrackUrlChange = event =>{
        this.setState({inputTrackUrl: event.target.value});
    }

    changeMenu = (menuNumber, id) =>{
        this.getAllPlayList();
        this.setState({menu: menuNumber });
        this.getPlayListTrack(id);
        this.setState({actualPlayListId: id})
        this.setState({playListTracks: undefined})
    }

// onClick
    onClickCreatePlayList = () => {
        this.createPlayList(this.state.inputPlayListValue);
        this.setState({inputPlayListValue: ""});
    }

    onClickSong = urlSong =>{
        this.setState({songUrl: urlSong});
    }

    render(){
        let menu = undefined;
        switch (this.state.menu) {
            case 0:
                menu = <Menu>
                    <AddPlayListMenu
                        handleChangeInput={this.onChangeInput} inputValue={this.state.inputPlayListValue}
                        handleButtonClick={this.onClickCreatePlayList} handleMenu={this.changeMenu}/>
                </Menu> 
                break;
           case 1:
                menu = <Menu>
                    <PlayLists handleClick={this.changeMenu} playlists={this.state.playlists} 
                    deletPlayList={this.deletPlayList}/>
                </Menu>         
                break;
            case 2:
                menu =<Menu>
                        <PlayListDetails 
                            playListTracks={this.state.playListTracks}
                            actualPlayListId={this.state.actualPlayListId}
                            handleSongClick={this.onClickSong}
                            inputTrackNameValue={this.state.inputTrackName}
                            inputTracArtistValue={this.state.inputTrackArtist}
                            inputTrackUrlValue={this.state.inputTrackUrl}                
                            handleMenu={this.changeMenu}
                            handleDeletePlayList={this.deletPlayList}
                            handleInputNameChange={this.handleInputNameChange}
                            handleInputTrackArtistChange={this.handleInputTrackArtistChange}
                            handleInputTrackUrlChange={this.handleInputTrackUrlChange}
                            handleAddTrack={this.addTrackToPlayList}
                            handleDeleteTrack={this.deleteTrack}/>
                        </Menu> 
        }
        return(
            <>
                <Header>
                <MenuImg src={menuImg} onClick={() => this.setState({showMenu: !this.state.showMenu})}/>
                </Header>
                <Container>
                    { this.state.showMenu && menu}
                    <ActualTrack>
                    <PlayerControls songUrl={this.state.songUrl}/>
                    </ActualTrack>
                </Container>
           
            </>
        ); 
    }
}


export default Player;