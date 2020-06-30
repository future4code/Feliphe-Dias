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

    return (
        <FormContainer>
            <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
            <MeuLabel> 5. Por que você não terminou um curso de graduação?</MeuLabel>
            <input type="text" name="nome"/>
            <MeuLabel> 6. Você fez algum curso complementar?</MeuLabel>
            <select>
                <option value="tecnico">Nenhum</option>
                <option value="inglês">Curso técnico</option>
                <option value="naoFez">Curso de inglês</option>
            </select>
        </FormContainer>
    );
}