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
              {["Link", "WIFI", "Cartão de Contato", "E-mail", "Abrir chamado Suporte GLPI", "Whatsapp"].map((namespace) => (
                <NamespaceStyled
                  key={namespace}
                  onClick={() => handleSelectedNamespace(namespace)}
                  $isSelected = {selectedNamespace === namespace}
                >
                  {namespace}
                </NamespaceStyled>
              ))}
            </GridComponentStyled>

          </div>
  )
}