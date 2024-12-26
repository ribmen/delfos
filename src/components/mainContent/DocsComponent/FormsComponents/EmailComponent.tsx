import React, { Fragment, useState } from "react";
import { InputStyled, TxtInputStyled } from "../styles.form";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";
import { useMailtoValue } from "../../../contexts/MailtoContext";
import { generateMailtoMessage } from "../../../../utils/mailtoFormat";
import TextField from "@mui/material/TextField";

export const EmailComponent: React.FC = () => {

  const { namespaceValue } = useNamespaceValue();
  const { setMailtoValue } = useMailtoValue();

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
  }
  
  return (
    <Fragment>
    <h4 className="mediaTitle">{namespaceValue}</h4>
          <TextField 
            name="destinatario"
            label="E-mail destinatário"
            value={mailto.destinatario}
            type="text" 
            placeholder="exemplo@dominio.com" 
            autoComplete="off"
            onChange={handleChange} 
            sx={{
              "& .MuiInputBase-root": {
                height: "50px", 
              },
            }}
            />

          <TextField 
            name="assunto"
            label="Assunto do e-mail"
            value={mailto.assunto}
            type="text" 
            placeholder="Escreva o título do e-mail" 
            autoComplete="off"
            onChange={handleChange} 
            sx={{
              "& .MuiInputBase-root": {
                height: "50px", 
              },
            }}
            />

          <TextField 
            name="mensagem"
            label="Conteúdo da mensagem"
            value={mailto.mensagem}
            placeholder="" 
            autoComplete="off"
            onChange={handleChange} 
            sx={{
              "& .MuiInputBase-root": {
                height: "50px", 
              },
            }}
            />

    </Fragment>
  )
  }