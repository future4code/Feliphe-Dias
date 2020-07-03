import React from "react";
import styled from "styled-components";
import PlayerControls from "./PlayerControls"
import axios from "axios";


const Menu = styled.div`
    display: flex;
    align-items: flex-start;
    flex-flow: column wrap;
    color: black;
    justify-content: space-between;
    width: 24vw;
    background-color: white;
    border-right: solid white 1px;
    overflow: auto;
`


const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`
const authentication = { headers:{ Authorization: "feliphe-rodrigues-turing"}}


class Player extends React.Component{
    state = {
        menu: 0,
        inputValue: "",
        playlists: undefined,
        showPlayLists: false
    }

    componentDidMount(){
        this.getAllPlayList()
    }

    deletPlayList = id =>{
        this.setState({playlists: this.state.playlists.filter( listItem => listItem.id !== id)})
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,authentication)
}

    createPlayList = playListName =>{
        const body = { "name": playListName}
        axios
        .post(url, body, authentication)
        .then( response => {return response.data})
        .catch( err => console.log(err.menssage))
    }

    getAllPlayList = () =>{
        axios
            .get(url,authentication)
            .then( response =>  this.setState({playlists: response.data.result.list}))
            .catch(err => console.log(err.menssage))
    }

    onClickCreatePlayList = () => {
        this.createPlayList(this.state.inputValue);
        this.setState({inputValue: ""});
    }

    onChangeInput = event =>{
        this.setState({inputValue: event.target.value})
    }

    changeMenu = menuNumber =>{
        this.getAllPlayList();
        this.setState({menu: menuNumber })
    }

    render(){
        let menu = <Menu>
                 <input onChange={this.onChangeInput} value={this.state.inputValue}/>
                 <button onClick={this.onClickCreatePlayList}>Add Playlist</button>
                 <button onClick={() => this.changeMenu(1)}>Playlist</button>        
            </Menu>
        switch (this.state.menu) {
            case 0:
                menu = <Menu>
                    <input onChange={this.onChangeInput} value={this.state.inputValue}/>
                    <button onClick={this.onClickCreatePlayList}>Add Playlist</button>
                    <button onClick={() => this.changeMenu(1)}>Playlist</button>
                </Menu>    
                break;
           case 1:
                menu = <Menu>
                    <button onClick={() => this.changeMenu(0)}>Voltar</button>
                    <>{this.state.playlists ? (this.state.playlists.map( list => {
            return <div key={list.id}><button >{list.name}</button><span onClick={() => this.deletPlayList(list.id)}>X</span></div> 
        })) : "vazio"}</>
                </Menu>         
                break;
        }
        return(
            <>
               {menu}
               <div>
                   <PlayerControls/>
               </div>
            </>
        ); 
    }
}


export default Player;