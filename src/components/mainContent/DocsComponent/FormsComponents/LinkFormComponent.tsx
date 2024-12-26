import { Fragment, useState } from "react";
import { useInputValue } from "../../../contexts/InputValueContext";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";
import "./index.css"
import { TextField } from "@mui/material";
import { LinkValueProvider } from "../../../contexts/LinkValueContext";

export const LinkFormComponent: React.FC = () => {
  //shared states; context API: forma correta de compartilhar entre componentes, mas não componentes hierárquicos
  const { setInputValue, inputValue } = useInputValue();
  const { namespaceValue } = useNamespaceValue();
  const [error, setError] = useState<boolean>(false)
  const [ helperText, setHelperText ] = useState<string>("");
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(false);
      setHelperText("");
    }
    setInputValue(e.target.value);
  };


  return(
    <Fragment>
      <h4 className="mediaTitle">{namespaceValue}</h4>
        <TextField 
          fullWidth
          id="outlined-basic"
          label="Insira o link aqui"
          type="text" 
          placeholder="https://" 
          autoComplete="off"
          onChange={handleInputChange} 
          sx={{
            "& .MuiInputBase-root": {
              height: "50px", 
            },
          }}
        />
    </Fragment>
  )
}