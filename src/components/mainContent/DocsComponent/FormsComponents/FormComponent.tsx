import { useNamespaceValue } from "../../../NamespaceContext";
import { DocumentoHospedadoComponent } from "./DocumentoHospedadoComponent";
import { LinkFormComponent } from "./LinkFormComponent";
import { WifiFormComponent } from "./WifiFormComponent";

export const FormsComponent: React.FC = () => {
  //shared states; context API: forma correta de compartilhar entre componentes mas não componentes hierárquicos
  const { namespaceValue } = useNamespaceValue();

  switch (namespaceValue) {
    case "Link":
      return <LinkFormComponent/>
    case "Wifi":
      return <WifiFormComponent/>
    case "Documento hospedado":
      return <DocumentoHospedadoComponent/>
    case "Contato":
      return 
    case "Texto":
      return 
    case "E-mail":
      return 
    case "Imagem":
      return 
    case "Evento":
      return 
    case "Whatsapp":
      return 
    default:
      return "Implemente mais."
  }

}