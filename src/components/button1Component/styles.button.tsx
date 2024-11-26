import styled from "styled-components";

interface ButtonProps {
  width?: string;
  height?: string;
  disabled?: boolean;
}

export const ButtonStyled = styled.button<ButtonProps>`
  display: inline-flex;
  background-color: #0085cf;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  border: none;
  cursor: pointer;

  /* Estilos dinâmicos */
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};

  /* Estilo desabilitado */
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;