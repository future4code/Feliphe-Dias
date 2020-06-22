import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-evenly;

`;

export default props =>{
    return (
        <FormContainer>
           <h1>O FORMULÁRIO ACABOU</h1>
           <p>Muito obrigado por participar! Entraremos em contato!</p>
        </FormContainer>
    );
}