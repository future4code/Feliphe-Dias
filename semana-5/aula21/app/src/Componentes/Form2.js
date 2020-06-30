import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
`;


const MeuLabel = styled.label`
    margin: 8px;
    align-self: center;
`;

export default props =>{
    
    return(
        <FormContainer>
            <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            <MeuLabel>5. Qual Curso?</MeuLabel>
            <input type="text" name="nome"/>
            <MeuLabel>6. Qual a unidade de ensino?</MeuLabel>
            <input type="text" name="nome"/>
        </FormContainer>
    );
}