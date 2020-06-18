import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from "styled-components";

const InputDiv = styled.div`
  display:flex;
  justify-content: space-around;
  label{
    margin-left: 10px;
  }
  button{
    margin-left: 10px;
  }
  `;

class App extends React.Component {
  state = {
    listaDePosts: [
      { 
        nomeUsuario: "paulinha",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost: 'https://picsum.photos/200/150'
      },
      { 
        nomeUsuario: "Jack",
        fotoUsuario:"https://picsum.photos/id/100/50/50",
        fotoPost: 'https://picsum.photos/id/3/200/150'
      },
      {
        nomeUsuario:'André',
        fotoUsuario:'https://picsum.photos/id/3/50/50',
        fotoPost:'https://picsum.photos/id/120/200/150'
      }    
    ],
    inputNome : "",
    inputFotoUserLink: "",
    inputFotoPostLink: ""
  }

  onChangeInput = (event)=>{
    switch (event.target.name){
      case "userName":
        this.setState({inputNome: event.target.value})
        break;
      case "userFoto":
        this.setState({inputFotoUserLink: event.target.value})
        break;
      case "postFoto":
        this.setState({inputFotoPostLink: event.target.value})
        break;
    }
  
  }
  
onClickEnviar = event =>{
    const novoPost = {
        nomeUsuario: this.state.inputNome,
        fotoUsuario:this.state.inputFotoUserLink,
        fotoPost: this.state.inputFotoPostLink
    }
    const newLista = [...this.state.listaDePosts, novoPost];
    this.setState({listaDePosts: newLista})
  }

  render() {
    return (
        <div className={'app-container'}>
         
        {this.state.listaDePosts.map( (post) =>{
          return <Post key = {post.nomeUsuario}
                  nomeUsuario={post.nomeUsuario}
                  fotoUsuario={post.fotoUsuario}
                  fotoPost ={post.fotoPost} 
                  />                  
        })}

       <InputDiv> 
          <label>Nome:<input
            name="userName"
            value = {this.state.inputNome}
            onChange = {this.onChangeInput}  
          /></label>
          
          <label>Foto de Usuario:<input 
            name="userFoto"
            value = {this.state.inputFotoUserLink}
            onChange = {this.onChangeInput}  
          /></label>
          
          <label>Imagem do Posto:<input 
            name="postFoto"
            value = {this.state.inputFotoPostLink}
            onChange = {this.onChangeInput}  
          /></label>
          <button onClick={this.onClickEnviar}>ENVIAR</button>
       </InputDiv> 

      </div>
    );
  }
}

export default App;
