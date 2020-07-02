import React from "react";
import styled from "styled-components";
import human from "../img/male_unknown-person-icon.png"

const Card = styled.div`
    display: flex;
    background-color: #F7F7F7;
    border-radius: 16px;
    border: solid black 1px;
    box-shadow: 8px 8px 8px 8px black;
    padding: 8px;
    height: 50vh;
    width: 50vw;
`;

const WizardImg = styled.img`
    width: 30%;
`;
const WizardInfo = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-end;
    width: 70%;
`;

const Info = styled.p`
    margin: 4vh 0;
`;

class WizardCard extends React.Component{
    state ={
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
         }
        ]
     }
   

    render(){
        return <Card>
            <WizardImg src={human}/>
    <WizardInfo>{this.state.characters.map( character =>{
        return <div key={character.id}>
                <Info><strong>Name: </strong>{character.name}</Info>
                <Info><strong>Role: </strong>{character.role}</Info>
                <Info><strong>School: </strong>{character.school}</Info>
                {character.house && <Info><strong>House: </strong>{character.house}</Info>}
                <Info><strong>Blood Status: </strong>{character.bloodStatus}</Info>
                <Info><strong>Species: </strong>{character.species}</Info>

            </div>
    })}</WizardInfo>
        </Card>
    }
}

export default WizardCard;