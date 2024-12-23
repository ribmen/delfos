import "./index.css";
import { ButtonComponent } from "../../button1Component/ButtonComponent";
import { QrPlaceComponent } from "./QrPlaceComponent";
import { ButtonPlace } from "./ButtonPlaceComponent";
import { SubmitButtonComponent } from "../../button2Component/SubmitButtonComponent";


export const QrContainer = () => {

  return(
    <aside className="backPanel">
      <div className="alignment">
        <h1>SEU QR CODE</h1>
          <div className="QrContainer">
              {<QrPlaceComponent/>}
          </div>
      </div>

      <div className="buttonBar">
        <ButtonPlace flexProps={5}>
           <ButtonComponent label="Enviar" disabled={false}/>
        </ButtonPlace>
        <ButtonPlace flexProps={9}>
          <ButtonComponent label="Compartilhar" disabled={true}/>
        </ButtonPlace>         
        
        </div>
        <div className="buttonBar">
         <SubmitButtonComponent label="Gerar QR code" disabled={false}></SubmitButtonComponent>
      </div>
    </aside>
  )
}