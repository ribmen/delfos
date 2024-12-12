import React from "react";
import { InputStyled } from "../styles.form";
import { useInputValue } from "../../../contexts/InputValueContext";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";

export const WhatsappContactComponent: React.FC = () => {
  const { setInputValue } = useInputValue();
  const { namespaceValue } = useNamespaceValue();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue("https://wa.me/" + e.target.value); // atualiza o valor local
  };



  return (
      <>
      <h4 className="mediaTitle">{namespaceValue}</h4>
      <label style={{marginRight: "10px"}}>Contato de Whatsapp
          <InputStyled 
            type="text" 
            placeholder="+55 84 99000 0000" 
            autoComplete="off"
            onChange={handleInputChange} 
            />
          </label>
      </>
  )
}