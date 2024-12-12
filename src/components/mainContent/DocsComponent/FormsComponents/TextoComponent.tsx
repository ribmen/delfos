import React, { Fragment } from "react";
import { InputStyled} from "../styles.form";
import { useInputValue } from "../../../contexts/InputValueContext";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";

export const TextoComponent: React.FC = () => {
  const { inputValue, setInputValue } = useInputValue();
  const { namespaceValue } = useNamespaceValue();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // atualiza o valor local
  };

  return(
    <Fragment>
      <h4 className="mediaTitle">{namespaceValue}</h4>
        <InputStyled 
          type="text" 
          value={inputValue}
          placeholder="Insira seu texto aqui" 
          autoComplete="off"
          onChange={handleInputChange} 
        />
    </Fragment>
  )
}