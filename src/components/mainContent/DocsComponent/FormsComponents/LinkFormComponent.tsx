import { Fragment } from "react";
import { InputStyled} from "../styles.form";
import { useInputValue } from "../../../contexts/InputValueContext";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";
import "./index.css"

export const LinkFormComponent: React.FC = () => {
  //shared states; context API: forma correta de compartilhar entre componentes, mas não componentes hierárquicos
  const { setInputValue } = useInputValue();
  const { namespaceValue } = useNamespaceValue();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return(
    <Fragment>
      <h4 className="mediaTitle">{namespaceValue}</h4>
        <InputStyled 
          type="text" 
          placeholder="https://" 
          autoComplete="off"
          onChange={handleInputChange} 
        />
    </Fragment>
  )
}