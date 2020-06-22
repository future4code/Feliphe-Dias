import React from 'react';
import styled from "styled-components"
import Form1 from './Componentes/Form1';
import Form2 from './Componentes/Form2';
import Form3 from './Componentes/Form3';
import FormEnd from './Componentes/FormEnd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  
`;

const ButtonProximo = styled.button`
    margin: 16px;

`;

class App extends React.Component{
  state = {
    etapa: 0,
  }

  handleForm = () =>{
    this.setState({etapa: this.state.etapa + 1})
  }
 
  etapa = () =>{
    switch(this.state.etapa){
      case 0:
        return <Form1></Form1>
      case 1:
        return <Form2></Form2>
      case 2:
        return <Form3></Form3>
     default:
        return <FormEnd></FormEnd>
    }
  }

  render(){
    const proxima = this.state.etapa !== 3 ? <ButtonProximo onClick={this.handleForm}>Proxima</ButtonProximo> : <></>

    return (
      <Container>
      {this.etapa()}
      {proxima}
      </Container>
    );
  }
}

export default App;
