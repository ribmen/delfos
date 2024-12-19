import { Fragment } from "react";
import { InputStyled} from "../styles.form";
import { useInputValue } from "../../../contexts/InputValueContext";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";
import "./index.css"

export const DocumentoHospedadoComponent: React.FC = () => {
  //shared states; context API: forma correta de compartilhar entre componentes mas não componentes hierárquicos
  const { setInputValue } = useInputValue();
  const { namespaceValue } = useNamespaceValue();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // atualiza o valor local
  };

  return(
    <Fragment>
      <h4 className="mediaTitle">{namespaceValue}</h4>
        <InputStyled 
          type="text" 
          placeholder="Insira a URL onde o documento está hospedado" 
          autoComplete="off"
          onChange={handleInputChange} 
        />
      <h4 style={{marginBottom: "0"}}>Formatador de processo</h4>
      <p style={{margin: "0"}}>Utilize o formatador de documentos para processos de até 4296 caracteres (aproximadamente duas páginas).</p>
    </Fragment>
  )
}