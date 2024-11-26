import styled from "styled-components";

export const DocsComponentStyled = styled.aside`
  height: 90%;
  flex: 1;
  box-sizing: border-box;
  margin: 0 2rem 0 6rem;
  border-radius: 30px 0 0 30px;
`;

export const GridComponentStyled = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, auto);
  width: 80%;
`;

export const NamespaceStyled = styled.div`
  margin: 1px;
  padding: 15px 0 15px 0;
  &:hover{
    border: 2px solid #4caf50;
  }
`;

export const DragNDropStyled = styled.div`
  display:flex;
  flex-direction: column;
  width: 80%;
  height: 200px;
  background-color: #dcdcdc;
  border-radius: 5px;
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
