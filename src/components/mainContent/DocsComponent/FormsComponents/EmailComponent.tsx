import React, { Fragment } from "react";
import { InputStyled } from "../styles.form";
import { useInputValue } from "../../../contexts/InputValueContext";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";

export const EmailComponent: React.FC = () => {

  const { setInputValue } = useInputValue();
  const { namespaceValue } = useNamespaceValue();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // atualiza o valor local
  };

  
  return (
    <Fragment>
    <h4 className="mediaTitle">{namespaceValue}</h4>
      <label style={{marginRight: "10px"}}>E-mail destinatário
          <InputStyled 
            type="text" 
            placeholder="exemplo@dominio.com" 
            autoComplete="off"
            onChange={handleInputChange} 
            />
          </label>

      <label style={{marginRight: "10px"}}>Assunto do e-mail
          <InputStyled 
            type="text" 
            placeholder="Escreva o título do e-mail" 
            autoComplete="off"
            onChange={handleInputChange} 
            />
          </label>
      <label style={{marginRight: "10px"}}>Conteúdo da mensagem
          <InputStyled 
            type="text" 
            placeholder="" 
            autoComplete="off"
            onChange={handleInputChange} 
            />
          </label>

    </Fragment>
  )
}