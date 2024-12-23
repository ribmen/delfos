import React, { Fragment } from "react";
import { TxtInputStyled} from "../styles.form";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";

export const TextoComponent: React.FC = () => {
  const { namespaceValue } = useNamespaceValue();

  return(
    <Fragment>
      <h4 className="mediaTitle">{namespaceValue}</h4>
      <TxtInputStyled 
        name="mensagem"
        placeholder="" 
        autoComplete="off" 
      />
    </Fragment>
  )
}