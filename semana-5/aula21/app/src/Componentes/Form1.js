import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
`;

const MeuLabel = styled.label`
    margin: 8px;
    align-self: center;
`;

export default props =>{

    return (
        <FormContainer>
            <h2>ETAPA 1 - DADOS GERAIS</h2>
            <MeuLabel> Qual o seu nome?</MeuLabel>
            <input type="text" name="nome"/>
            <MeuLabel> Qual a sua idade?</MeuLabel>
            <input type="text" name="nome"/>
            <MeuLabel> Qual o seu email?</MeuLabel>
            <input type="text" name="nome"/>
            <MeuLabel> Qual a sua escolaridade?</MeuLabel>
            <select>
                <option value="medioInCompleto">Ensino médio incompleto</option>
                <option value="medioCompleto">Ensino médio completo</option>
                <option value="superiorIncompleto">Ensino superior incompleto</option>
                <option value="superiorCompleto">Ensino superior completo</option>
            </select>
        </FormContainer>

    )
}