import React from "react";
import styled from "styled-components"

interface InputStyledProps {
  id: string;
}

export const InputStyled = styled.input`
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      border-radius: 5px;
      color: #121212;
      padding: 8px;
    `

export const TxtInputStyled = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 80px; /* Altura inicial maior para suportar várias linhas */
  border-radius: 5px;
  color: #121212;
  padding: 8px;
  resize: vertical; /* Permite redimensionar verticalmente */
  font-family: inherit; /* Mantém a fonte do contexto */
  font-size: 16px; /* Ajuste o tamanho da fonte se necessário */
`;


export const SelectStyled = styled.select`
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      border-radius: 5px;
      color: #121212;
      padding: 8px;
`

