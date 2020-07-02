import React from 'react';
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
     characters: [
      {
          "_id": "5a0fa4daae5bc100213c232e",
          "name": "Hannah Abbott",
          "role": "student",
          "house": "Hufflepuff",
          "school": "Hogwarts School of Witchcraft and Wizardry",
          "__v": 0,
          "ministryOfMagic": false,
          "orderOfThePhoenix": false,
          "dumbledoresArmy": true,
          "deathEater": false,
          "bloodStatus": "half-blood",
          "species": "human"
      },
      {
          "_id": "5a0fa54aae5bc100213c232f",
          "name": "Bathsheda Babbling",
          "role": "Professor, Ancient Runes",
          "school": "Hogwarts School of Witchcraft and Wizardry",
          "__v": 0,
          "ministryOfMagic": false,
          "orderOfThePhoenix": false,
          "dumbledoresArmy": true,
          "deathEater": false,
          "bloodStatus": "unknown",
          "species": "human"
      },
      {
          "_id": "5a0fa5deae5bc100213c2330",
          "name": "Ludo Bagman",
          "role": "Head, Department of Magical Games and Sports",
          "__v": 0,
          "ministryOfMagic": true,
          "orderOfThePhoenix": false,
          "dumbledoresArmy": false,
          "deathEater": false,
          "bloodStatus": "unknown",
          "species": "human"
      }
     ]
  }

  componentDidMount(){
    localStorage.getItem("Wizard") && this.setState({wizard: })
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
        page = <House title={"Ravenclaw"} handlePage={this.changePage}/>;
        break;
      case 2: 
        page = <House title={"Hufflepuff"} handlePage={this.changePage}/>;
        break;
      case 3: 
        page = <House title={"Gryffindor"} handlePage={this.changePage}/>;
        break;
      case 4: 
        page = <House title={"Slytherin"} handlePage={this.changePage}/>;
        break;
    }
   
    return <Container>
      {page}
    </Container> 
  }

}
export default App;
