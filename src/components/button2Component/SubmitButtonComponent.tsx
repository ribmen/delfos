import "./index.css"
import { ButtonStyled } from "./styles.button";
import { useLinkValue } from "../LinkValueContext";
import { useInputValue } from "../InputValueContext";

// botão que Submit isola a lógica de recepção dos dados do link

interface ButtonProps {
  label: string;
  disabled?: boolean;
  color?: string;   //primary, alert, info
  value?: string;
  onClick?: () => any;
}

export const SubmitButtonComponent = ({label, disabled}: ButtonProps) => {
  const { setLinkValue } = useLinkValue(); // pegando o texto do contexto e a função para atualizar a flag
  const { inputValue } = useInputValue(); // pegando o texto do contexto e a função para atualizar a flag

  const handleClick = () => {
    console.log("Texto enviado: ", inputValue);
    setLinkValue(inputValue);
  } 
  return(
    <ButtonStyled onClick={handleClick} disabled={disabled} >{label}</ButtonStyled>
  )
}