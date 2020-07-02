import React from "react";
import styled from "styled-components";
import housesImage from "../img/houses.jpg";

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #060708;
`

const HouseImage = styled.img`
    margin: 0 auto;
`

export default props =>{    
    return <Container>
        <HouseImage src={housesImage} useMap="#workmap" />
        <map name="workmap">
            <area shape="rect" coords="0,0,275,800" onClick={() => props.handlePage(1)}/>
            <area shape="rect" coords="0,0,550,800" onClick={() => props.handlePage(2)}/>
            <area shape="rect" coords="0,0,825,800" onClick={() => props.handlePage(3)}/>
            <area shape="rect" coords="0,0,1100,800" onClick={() => props.handlePage(4)}/>
         </map>
    </Container>
}