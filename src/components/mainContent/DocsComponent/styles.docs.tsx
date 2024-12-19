import styled from "styled-components";

export const DocsComponentStyled = styled.aside`
  height: 70vh;
  overflow: auto;
  flex: 1;
  box-sizing: border-box;
  margin: 2rem 2rem 2rem 6rem;
  padding: 0 2rem 0 2rem;
  border-radius: 30px 0 0 30px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const GridComponentStyled = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
`;

export const NamespaceStyled = styled.div<{ $isSelected: boolean }>`
  margin: 1px;
  padding: 15px 0;
  text-align: center;
  transition: all 0.1s ease-in-out;
  border: 2px solid transparent; // já cria a borda, sendo invisível!!!
  box-sizing: border-box;
  cursor: pointer;

  // Estilos dinâmicos baseados no estado "isSelected"
  border-color: ${(props) => (props.$isSelected ? "#4caf50" : "transparent")};
  background-color: ${(props) => (props.$isSelected ? "rgba(76, 175, 80, 0.1)" : "transparent")};

  &:hover{
    border-color: #4caf50;
    background-color: rgba(76, 175, 80, 0.1);
  }
`;

export const SelectedNamespaceStyled = (props: any) => <NamespaceStyled {...props} children={
  styled.div`
    border-color: #4caf50;
    background-color: rgba(76, 175, 80, 0.1);
  `
}/>

export const DragNDropStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  background-color: #dcdcdc;
  border: 2px dashed #bbb;
  border-radius: 5px;
  padding: 1rem;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #4caf50;
  }
`;

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex-grow: 1;
  margin: 8px;
  border-radius: 5px;
  background-color: #f2f2f2;
  align-items: center;
  justify-content: center;
  color: #545454;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 1rem;
`;

export const DropdownButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
