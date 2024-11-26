import { Fragment } from "react";
import { InputStyled, LinkFormStyled } from "./styles.form";
import { useInputValue } from "../../InputValueContext";

export const FormsComponent: React.FC = () => {

  //shared states; context API: forma correta de compartilhar entre componentes mas não componentes hierárquicos
  const { inputValue, setInputValue } = useInputValue();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // atualiza o valor local
    console.log("Texto modificado no input form: ", inputValue)
  };

  return(
    <Fragment>
      <LinkFormStyled>
        <InputStyled 
          type="text" 
          value={inputValue}
          placeholder="https://" 
          autoComplete="off"
          onChange={handleInputChange} 
        />
      </LinkFormStyled>
    </Fragment>
  )
}