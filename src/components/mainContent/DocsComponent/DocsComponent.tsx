import { FormsComponent } from "./FormComponent";
import "./styles.docs";
import { DocsComponentStyled, DragNDropStyled, DivStyled, DropdownContainer, DropdownButton, GridComponentStyled, NamespaceStyled } from "./styles.docs";


export const DocsComponent = () => {
  return (
    <DocsComponentStyled>
      <h1>Selecione o formato da mídia</h1>
      <div className="mother-iris"
      style={
        {display: 'flex',
         textAlign: 'center', 
         justifyContent: 'center', 
         alignItems: 'center'}
        }>
        <GridComponentStyled>
          <NamespaceStyled>Vídeo</NamespaceStyled>
          <NamespaceStyled>Documento</NamespaceStyled>
          <NamespaceStyled>Link</NamespaceStyled>
          <NamespaceStyled>Wifi</NamespaceStyled>
          <NamespaceStyled>Localização</NamespaceStyled>
          <NamespaceStyled>Processo</NamespaceStyled>
          <NamespaceStyled>Imagem</NamespaceStyled>
          <NamespaceStyled>Outro</NamespaceStyled>
        </GridComponentStyled>
      </div>
      <h1 style={{margin: '24px 0px 8px 0px'}}>Submeta a URL</h1>
        <DragNDropStyled>
          <FormsComponent/>
          <DivStyled>
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%230085cf' d='M6.5 20q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48q1.18-1.53 3.08-1.95q.63-2.3 2.5-3.72Q9.63 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5q1.14 1.28 1.14 3q0 1.88-1.31 3.19T18.5 20H13q-.82 0-1.41-.59Q11 18.83 11 18v-5.15L9.4 14.4L8 13l4-4l4 4l-1.4 1.4l-1.6-1.55V18h5.5q1.05 0 1.77-.73q.73-.72.73-1.77t-.73-1.77Q19.55 13 18.5 13H17v-2q0-2.07-1.46-3.54Q14.08 6 12 6Q9.93 6 8.46 7.46Q7 8.93 7 11h-.5q-1.45 0-2.47 1.03Q3 13.05 3 14.5T4.03 17q1.02 1 2.47 1H9v2m3-7'/%3E%3C/svg%3E" height={50} width={'auto'}/>
            <h3 style={{margin: 0, fontSize: '16px', fontWeight: '300'}}>Ou arraste e solte o(s) arquivo(s) aqui</h3>
          </DivStyled>
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
