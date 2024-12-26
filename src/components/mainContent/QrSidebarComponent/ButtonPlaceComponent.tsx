import { ButtonPlaceStyled } from "./styles.buttonplace";
import React, { ReactNode } from "react";



interface ButtonPlaceProps {
  children: ReactNode;
  flexProps: number;
}

export const ButtonPlace: React.FC<ButtonPlaceProps> = ({children, flexProps}) => {
  return(
    <>
      <ButtonPlaceStyled $flexValue={flexProps}>
        {children}
      </ButtonPlaceStyled>
    </>
  );
}