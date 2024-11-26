import { Header} from "./styles.bavbar"
import "../header/index.css";
import { ButtonComponent } from "../button1Component/ButtonComponent";

 export const Navbar = () => {
    return(
      <>
        <Header>
          {/* <img className="avatarProfile" src='https://picsum.photos/50'/> */}
          {/* <a target="_blank" href="https://www.rn.gov.br/"><img className="govLogo" src='https://www.rn.gov.br/wp-content/themes/govrn/static/media/logotipo_govrn_h.43fa26f3.png'/></a> */}
          
          <h1 className="title" >PGE Delfos</h1>
          <div className="buttonLogin"></div><ButtonComponent disabled={false} label="Entrar" height="40px" width="150px"></ButtonComponent>
            
        </Header>
      </>
    )
}