import React from 'react';
import axios from "axios";
import Home from './components/Home';
import House from "./components/House";
import styled from "styled-components";


const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

class App extends React.Component{
  state ={
    page: 0,
     characters: ""
  }
  
  componentDidMount(){
    this.getAllWizard();
  }

  getAllWizard = () =>{
   const url ="https://www.potterapi.com/v1/characters?key=$2a$10$kOGiXdkDxu0ZtUr2UssV8erLFx2mUPQUnjy.QGNJppx6lPzcRUOcO"
   axios
     .get(url)
     .then( response =>{
       this.setState({characters: response.data})
     }) 
     .catch(err => console.log(err.menssage))
  }

  changePage = (pageNumber) =>{
    this.setState({page: pageNumber})
  }

  render(){
   let page = <Home handlePage={this.changePage}/>;
    switch(this.state.page){
      case 0: 
        page = <Home handlePage={this.changePage}/>;
        break;
      case 1: 
        page = <House title={"Ravenclaw"} characters={this.state.characters} handlePage={this.changePage}/>;
        break;
      case 2: 
        page = <House title={"Hufflepuff"} characters={this.state.characters} handlePage={this.changePage}/>;
        break;
      case 3: 
        page = <House title={"Gryffindor"} characters={this.state.characters} handlePage={this.changePage}/>;
        break;
      case 4: 
        page = <House title={"Slytherin"} characters={this.state.characters} handlePage={this.changePage}/>;
        break;
    }
   console.log(this.state.characters)
    return <Container>
      {page}
    </Container> 
  }

}
export default App;
