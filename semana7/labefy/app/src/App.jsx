import React from "react";
import styled from "styled-components";
import LandingPage from "./components/LandingPage";
import Player from "./components/Player";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    height: 100vh;
    background-color: #2E2E2E;
`;

class App extends React.Component{
    state ={
        page: 0
    }


    changePage =  PageNumber => {
        this.setState({page: PageNumber})
    }

    render(){
      
        let page = <LandingPage handleNextPage={this.changePage}></LandingPage>
        switch (this.state.page) {
            case 0:
                page = <LandingPage handleNextPage={this.changePage}></LandingPage>
                break;
            case 1:
                page = <Player handleNextPage={this.changePage}></Player>
                break; 
            default:
                break;
        }
    return(
            <Container>
                {page}
            </Container>
    ); 
    }
}

export default App;