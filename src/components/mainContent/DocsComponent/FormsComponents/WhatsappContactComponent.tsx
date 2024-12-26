import React from "react";
import { InputStyled } from "../styles.form";
import { useInputValue } from "../../../contexts/InputValueContext";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";
import { TextField } from "@mui/material";


export const WhatsappContactComponent: React.FC = () => {
  const { setInputValue } = useInputValue();
  const { namespaceValue } = useNamespaceValue();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue("https://wa.me/" + e.target.value); // atualiza o valor local
  };



  return (
      <>
      <h4 className="mediaTitle">{namespaceValue}</h4>
      <TextField 
          fullWidth
          id="outlined-basic"
          label="Contato de Whatsapp"
          type="text" 
          placeholder="+5584 + número SEM ESPAÇO" 
          autoComplete="off"
          onChange={handleInputChange} 
          sx={{
            "& .MuiInputBase-root": {
              height: "50px", 
            },
          }}
        />
      </>
  )
}