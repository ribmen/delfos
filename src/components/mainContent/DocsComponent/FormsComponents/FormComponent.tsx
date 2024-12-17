import { useNamespaceValue } from "../../../contexts/NamespaceContext";
import { ContatoComponent } from "./ContatoComponent";
import { DocumentoHospedadoComponent } from "./DocumentoHospedadoComponent";
import { EmailComponent } from "./EmailComponent";
import { LinkFormComponent } from "./LinkFormComponent";
import { TextoComponent } from "./TextoComponent";
import { WhatsappContactComponent } from "./WhatsappContactComponent";
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

      return <ContatoComponent/>
    case "Texto":

      return <TextoComponent/>
    case "E-mail":

      return <EmailComponent/>
    case "Imagem":

      return "To be implemented"
    case "Whatsapp":

      return <WhatsappContactComponent/>
    default:

      return "Selecione um formato de mídia para proseguir."
  }

}
