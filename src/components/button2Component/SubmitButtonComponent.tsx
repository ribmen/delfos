import "./index.css"
import { ButtonStyled } from "./styles.button";
import { useLinkValue } from "../contexts/LinkValueContext";
import { useInputValue } from "../contexts/InputValueContext";
import { useNamespaceValue } from "../contexts/NamespaceContext";
import { useVCardValue } from "../contexts/vCardContext";
import { useWifiValue } from "../contexts/WifiContext";

// botão que Submit isola a lógica de recepção dos dados do link

interface ButtonProps {
  label: string;
  disabled?: boolean;
  color?: string;   //primary, alert, info
  value?: string;
  onClick?: () => any;
}

export const SubmitButtonComponent = ({label, disabled}: ButtonProps) => {
  const { setLinkValue, linkValue } = useLinkValue(); 
  const { setWifiValue, wifiValue } = useWifiValue();
  const { inputValue } = useInputValue();
  const { namespaceValue } = useNamespaceValue();
  const { setVCardValue, vCardValue } = useVCardValue();

  
  
  switch(namespaceValue) {
    case("Link"):
    const handleLinkClick = () => {
      setLinkValue(inputValue);
      console.log("Texto enviado: ", inputValue);
    } 
      return(
        <ButtonStyled onClick={handleLinkClick} disabled={disabled} >{label}</ButtonStyled>
      )
    
    case("Wifi"):
    const handleWifiClick = () => {
      setLinkValue(wifiValue);
      console.log("Texto enviado submitted: ", wifiValue);
    }
      return(
        <ButtonStyled onClick={handleWifiClick} disabled={disabled} >{label}</ButtonStyled>
      )
    
    case("Contato"):
      const handleContatoClick = () => {
        setLinkValue(vCardValue);
        console.log("Texto enviado: ", vCardValue);
        setVCardValue("");
      } 
      return(
        <ButtonStyled onClick={handleContatoClick} disabled={disabled} >Submeter contato</ButtonStyled>
      )

    default:
      const handleDefaultClick = () => {
        setLinkValue(inputValue);
        console.log("Texto enviado: ", inputValue);
      } 
      return(
        <ButtonStyled onClick={handleDefaultClick} disabled={disabled} >Valor padrão</ButtonStyled>
      )
    }
}