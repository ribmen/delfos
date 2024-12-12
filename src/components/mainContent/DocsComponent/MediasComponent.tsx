import { useNamespaceValue } from "../../contexts/NamespaceContext";
import { GridComponentStyled, NamespaceStyled } from "./styles.docs";
import { useState } from "react";

export const MediasComponent = () => {
  const [ selectedNamespace, setSelectedNamespace ] = useState<string | null>(null);
  const { setNamespaceValue } = useNamespaceValue();

  const handleSelectedNamespace = (namespace: string) => {
    setSelectedNamespace(namespace);
    setNamespaceValue(namespace);
  };

  return(
    <div className="mother-iris"
          style={
            {display: 'flex',
            textAlign: 'center', 
            justifyContent: 'center', 
            alignItems: 'center'}
            }>
            
            <GridComponentStyled>
              {["Link", "Wifi", "Documento hospedado", "Contato", "Texto", "E-mail", "Imagem", "Whatsapp"].map((namespace) => (
                <NamespaceStyled
                  key={namespace}
                  onClick={() => handleSelectedNamespace(namespace)}
                  $isSelected = {selectedNamespace === namespace} // passando o estado da seleção como prop
                >
                  {namespace}
                </NamespaceStyled>
              ))}
            </GridComponentStyled>

          </div>
  )
}