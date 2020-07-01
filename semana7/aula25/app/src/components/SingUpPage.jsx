import React from "react"
import styled from "styled-components"



const ContainerInput = styled.div`
    display:flex;
    flex-flow: column wrap;
    align-self: center;
    align-items: center;
    justify-content: center;
    height: 20%;
    width: 20%;
    border: 1px solid black;

`;

class SingUpPage extends React.Component{


    
    render(){
        return(
        <ContainerInput>
            <hr/>
        <input 
            onChange={this.props.handleInputName}
            value={this.props.inputNameValue}
            placeholder="Name"
        /> 
            <hr/>
        <input 
            onChange={this.props.handleInputEmail}
            value={this.props.inputEmailValue}
            placeholder="Email"
        /> 
            <hr/>
        <button onClick={this.props.handleClick}>ENVIAR</button>
        </ContainerInput>
        );
    }
}

export default SingUpPage;