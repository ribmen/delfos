import React, { Fragment } from "react";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";

export const ChamadoComponent: React.FC = () => {
  const { namespaceValue } = useNamespaceValue();

  return(
    <Fragment>
      <h4 className="mediaTitle">{namespaceValue}</h4>
        <p>Esta é uma mídia/atalho de geração pré-definida.</p>
    </Fragment>
  )
}