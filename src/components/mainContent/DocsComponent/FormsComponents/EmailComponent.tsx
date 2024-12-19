import React, { Fragment, useState } from "react";
import { InputStyled, TxtInputStyled } from "../styles.form";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";
import { useMailtoValue } from "../../../contexts/MailtoContext";
import { generateMailtoMessage } from "../../../../utils/mailtoFormat";

export const EmailComponent: React.FC = () => {

  const { namespaceValue } = useNamespaceValue();
  const { mailtoValue, setMailtoValue } = useMailtoValue();

  const [mailto, setMailto] = useState({
    destinatario: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setMailto((prev) => ({
      ...prev,
      [name]: value,
    }));

  const formattedMailtoMessage = generateMailtoMessage(mailto);
  setMailtoValue(formattedMailtoMessage);
  console.log("formulário enviado", mailtoValue);
  }
  
  return (
    <Fragment>
    <h4 className="mediaTitle">{namespaceValue}</h4>
      <label style={{marginRight: "10px"}}>E-mail destinatário
          <InputStyled 
            name="destinatario"
            value={mailto.destinatario}
            type="text" 
            placeholder="exemplo@dominio.com" 
            autoComplete="off"
            onChange={handleChange} 
            />
          </label>

      <label style={{marginRight: "10px"}}>Assunto do e-mail
          <InputStyled 
            name="assunto"
            value={mailto.assunto}
            type="text" 
            placeholder="Escreva o título do e-mail" 
            autoComplete="off"
            onChange={handleChange} 
            />
          </label>
      <label style={{marginRight: "10px"}}>Conteúdo da mensagem
          <TxtInputStyled 
            name="mensagem"
            value={mailto.mensagem}
            placeholder="" 
            autoComplete="off"
            onChange={handleChange} 
            />
          </label>

    </Fragment>
  )
  }