import { Fragment } from "react";
import { InputStyled } from "../styles.form";
import { useInputValue } from "../../../InputValueContext";
import { useNamespaceValue } from "../../../NamespaceContext";
import "./index.css";

export const WifiFormComponent: React.FC = () => {
  //shared states; context API: forma correta de compartilhar entre componentes mas não componentes hierárquicos
  const { setInputValue } = useInputValue();
  const { namespaceValue } = useNamespaceValue();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // atualiza o valor local
  };

  return(
    <Fragment>
      <h4 className="mediaTitle">{namespaceValue}</h4>
      <div style={{display: "flex", alignContent: "inline"}}>

      <div className="wifiInputs">
        <label style={{marginRight: "10px"}}>Nome da rede
        <InputStyled 
          type="text" 
          placeholder="" 
          autoComplete="off"
          onChange={handleInputChange} 
          />
        </label>
        
        <label style={{marginRight: "10px", marginLeft: "10px"}}>Tipo da rede
        <InputStyled //componente de dropdown
          type="text" 
          placeholder="" 
          autoComplete="off"
          onChange={handleInputChange} 
        />
        </label>

        <label style={{marginLeft: "10px"}}>Senha
        <InputStyled 
          type="password" 
          placeholder="Senha da rede" 
          autoComplete="off"
          onChange={handleInputChange} 
        />
        </label>

      </div>
      </div>
    </Fragment>
  )
}