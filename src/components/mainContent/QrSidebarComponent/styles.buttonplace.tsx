import styled from "styled-components";

export const ButtonPlaceStyled = styled.div<{ $flexValue?: number}>`
  flex: ${props => props.$flexValue};
  height: 100%;
  background-color: "white"; //figurativo
  display: 'flex'; 
  vertical-align: "middle";   
  justify-content: 'center';
`