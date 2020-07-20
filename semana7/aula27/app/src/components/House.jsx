import React from "react";
import WizardCard from "./WizardCard"
import styled from "styled-components";



const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width:100%;
    height: 100%;
    background-color: #F7F7F7;

`;

const MyHeader = styled.header`
    display: flex;
    color: white;
    font-size: large;
    justify-content: center;
    background-color: #873436;
    align-items: center;
    width: 100%;
    height: 8vh;
`;

const MyLabel = styled.label`
    margin: 4vh 0;
`;

class House extends React.Component{
    state ={
        wizardName: ""
    }

    onChangeInput = event =>{
        const wizard = this.props.characters.find( wizard =>{
            return wizard.name.toLowCase() === event.target.value.toLowCase()
        })
        wizard && this.setState({wizardName: wizard})
    }


    render(){       
        return <Container>
            <MyHeader><button onClick={() => this.props.handlePage(0)}>Voltar</button>{this.props.title}</MyHeader>
            <MyLabel>Wizard: <input type="text" onChange={this.onChangeInput}/></MyLabel>
            <WizardCard wizardsList={this.state.wizardName}/>
        </Container>
    }
}

export default House