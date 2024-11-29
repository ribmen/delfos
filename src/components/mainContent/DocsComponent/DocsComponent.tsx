import { FormsComponent } from "./FormsComponents/FormComponent";
import { MediasComponent } from "./MediasComponent";
import { DocsComponentStyled, DragNDropStyled, DropdownContainer, DropdownButton} from "./styles.docs";


export const DocsComponent = () => {
  return (
    <DocsComponentStyled>
      <h1 style={{marginBottom: '0'}}>Selecione o formato da mídia</h1>
     
      <MediasComponent/>
      <h1 style={{margin: '24px 0px 0px 0px'}}>Submeta a URL</h1>
        <DragNDropStyled>
          <FormsComponent/>
        </DragNDropStyled>

        <DropdownContainer className="pre-sets-styling">
          <DropdownButton className="dropbtn">
            Estilização e pré-sets
            <img
              src="src/styles/assets/arrow-down.png"
              alt="arrow"
              style={{ width: "1rem", height: "auto" }}
            />
          </DropdownButton>
        </DropdownContainer>

    </DocsComponentStyled>
  );
};
