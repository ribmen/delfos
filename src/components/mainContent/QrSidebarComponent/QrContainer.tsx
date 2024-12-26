import "./index.css";
import { ButtonComponent } from "../../button1Component/ButtonComponent";
import { QrPlaceComponent } from "./QrPlaceComponent";
import { ButtonPlace } from "./ButtonPlaceComponent";
import { SubmitButtonComponent } from "../../button2Component/SubmitButtonComponent";
import React, { useRef } from "react";
import { QRCode } from 'react-qrcode-logo';


export const QrContainer: React.FC = () => {

 const qrcodeRef = useRef<QRCode>();

 function handleDownload() {
  qrcodeRef.current?.download("png");
 }

  return(
    <aside className="backPanel">
      <div className="alignment">
        <h1>SEU QR CODE</h1>
          <div className="QrContainer">
              {<QrPlaceComponent qrRef={qrcodeRef}/>}
          </div>
      </div>

      <div className="buttonBar">
        <ButtonPlace flexProps={5}>
           <ButtonComponent label="Enviar" disabled={true}/>
        </ButtonPlace>
        <ButtonPlace flexProps={9}>
          <ButtonComponent onClick={handleDownload} label="Download" disabled={false}/>
        </ButtonPlace>         
        
        </div>
        <div className="buttonBar">
         <SubmitButtonComponent label="Gerar QR code" disabled={false}></SubmitButtonComponent>
      </div>
    </aside>
  )
}