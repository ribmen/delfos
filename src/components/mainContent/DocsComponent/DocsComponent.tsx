import { FormsComponent } from "./FormsComponents/FormComponent";
import { MediasComponent } from "./MediasComponent";
import { DocsComponentStyled, DragNDropStyled} from "./styles.docs";


export const DocsComponent = () => {
  return (
    <DocsComponentStyled>
      <h1 style={{marginBottom: '0', marginTop: '3rem'}}>Selecione o formato da mídia</h1>
     
      <MediasComponent/>
      <h1 style={{margin: '24px 0px 0px 0px'}}>Submeta a URL</h1>
        <DragNDropStyled>
            <FormsComponent/>
        </DragNDropStyled>

    </DocsComponentStyled>
  );
};
