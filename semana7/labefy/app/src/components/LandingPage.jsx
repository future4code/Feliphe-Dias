import React from "react";
import styled from "styled-components";
import img_backGround from "../img/musicBackground.jpg";

const Container = styled.div`
    height:100%;
    width: 100%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
    align-items: center;
    justify-items: start;
    background-image: url(${img_backGround});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    
`;

const MyButton = styled.button`
    background-color: none;
    height: 5vh;
    width: 10vw;
    color:  #F0F2F2 ;
    border-radius: 8vw;
     background-color: #73202F;
    border: solid 1px #73202F ;
    outline: none;
    &:hover {
        height: 7vh;
        width: 12vw;
        cursor: pointer;
    }
    grid-column: 4/4;
    grid-row: 4/4;
`;



class LandingPage extends React.Component{


    render(){
        return <Container>
            <MyButton onClick={ () => this.props.handleNextPage(1)}>LISTEN</MyButton>
            </Container>
    }
}

export default LandingPage;