import QRCode from "react-qr-code";
import { QrPlaceComponentStyle } from "./styles.qrplace";
import { useLinkValue } from "../../LinkValueContext";


// criar uma interface para os tipos de arquivoc com os quais eu vou trabalhar
export const QrPlaceComponent = () => {
  const { linkValue } = useLinkValue();

  return(
    <QrPlaceComponentStyle>
      
        <QRCode
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={linkValue}
        viewBox={`0 0 256 256`}
      />
      
    </QrPlaceComponentStyle>
  )
}