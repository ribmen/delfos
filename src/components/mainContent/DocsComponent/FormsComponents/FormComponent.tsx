import { useEffect } from "react";
import { useLinkValue } from "../../../contexts/LinkValueContext";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";
import { ChamadoComponent } from "./ChamadoComponent";
import { ContatoComponent } from "./ContatoComponent";
import { EmailComponent } from "./EmailComponent";
import { LinkFormComponent } from "./LinkFormComponent";
import { WhatsappContactComponent } from "./WhatsappContactComponent";
import { WifiFormComponent } from "./WifiFormComponent";

export const FormsComponent: React.FC = () => {
  const { namespaceValue } = useNamespaceValue();
  const { clearLinkContext } = useLinkValue();
  useEffect(() => {
    clearLinkContext()
  }, [namespaceValue] )

  switch (namespaceValue) {
    case "Link":
      return <LinkFormComponent/>
    case "WIFI":
      return <WifiFormComponent/>
    case "Cartão de Contato":
      return <ContatoComponent/>
    case "E-mail":
      return <EmailComponent/>
    case "Abrir chamado Suporte GLPI":
      return <ChamadoComponent/>
    case "Whatsapp":
      return <WhatsappContactComponent/>
    default:
      return "Selecione um formato de mídia para proseguir."
  }

}
