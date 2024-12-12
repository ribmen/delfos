import React, { Fragment, useState } from "react";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";
import { TextField, Button, Box } from '@mui/material';
import { useVCardValue } from "../../../contexts/vCardContext";
import { generateVCard } from "../../../../utils/vCardFormat";
import "./index.css"
import { useFormContext } from "../../../contexts/ButtonFormContext";
import { useInputValue } from "../../../contexts/InputValueContext";


export const ContatoComponent: React.FC = () => {
/*   const { handleSubmit } = useFormContext(); */
  const { namespaceValue } = useNamespaceValue();
  const { setVCardValue } = useVCardValue();
  const {vCardValue } = useVCardValue();
  const { setInputValue } = useInputValue();
  const [vCard, setVCard] = useState({
    firstName: '',
    lastName: '',
    websiteUrl: '',
    CEPcode: '',
    city: '',
    state: '',
    country: '',
    phoneNumber: '',
    landlineNumber: '',
    email: '',
    organization: '',
    role: '',
    address: '',
  });

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = event.target;
    setVCard((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formattedVCard = generateVCard(vCard);
    setVCardValue(formattedVCard); // salva no contexto
    console.log("formulário enviado", vCardValue);
  };

  return(
    <Fragment>
      <Box
        component="form"
        onSubmit={handleSubmit}  
      >
      <h4 className="mediaTitle">{namespaceValue}</h4>
      <div className="contactInputs">
        <label style={{marginRight: "10px"}}>Primeiro nome
        <TextField
          id="first-name"
          type="text" 
          placeholder="" 
          autoComplete="off"
          value={vCard.firstName}
          name="firstName"
          onChange={handleChange} 
          />
        </label>
        
        <label style={{marginLeft: "10px"}}>Último nome
        <TextField 
          id="last-name"
          type="text" 
          placeholder="" 
          autoComplete="off"
          value={vCard.lastName}
          name="lastName"
          onChange={handleChange} 
        />
        </label>
      </div>
      <div className="contactInputs">
        <label style={{marginRight: "10px"}}>Telefone celular
        <TextField 
          id="phone-number"
          type="text" 
          placeholder="Formato: (XX) XXXXX-XXXX" 
          autoComplete="off"
          value={vCard.phoneNumber}
          name="phoneNumber"
          onChange={handleChange} 
          />
        </label>
        
        <label style={{marginLeft: "10px"}}>Telefone fixo
        <TextField 
          id="landline-number"
          type="text" 
          placeholder="" 
          autoComplete="off"
          value={vCard.landlineNumber}
          name="landlineNumber"
          onChange={handleChange} 
        />
        </label>
      </div>
      <div className="contactInputs">
        <label style={{marginRight: "10px"}}>E-mail
        <TextField 
          id="email"
          type="text" 
          placeholder="Formato: exemplo@dominio.com" 
          autoComplete="off"
          value={vCard.email}
          name="email"
          onChange={handleChange} 
          />
        </label>
        
        <label style={{marginLeft: "10px"}}>Site (URL)
        <TextField 
          id="site-url"
          type="text" 
          placeholder="https://" 
          autoComplete="off"
          value={vCard.websiteUrl}
          name="websiteUrl"
          onChange={handleChange} 
        />
        </label>
      </div>
      <div className="contactInputs">
        <label style={{marginRight: "10px"}}>Empresa
          <TextField 
            id="company"
            type="text" 
            placeholder="PROCURADORIA GERAL DO ESTADO DO RN" 
            autoComplete="off"
            value={vCard.organization}
            name="organization"
            onChange={handleChange} 
          />
          </label>

          <label style={{marginLeft: "10px"}}>Cargo
          <TextField 
            id="role"
            type="text" 
            placeholder="" 
            autoComplete="off"
            value={vCard.role}
            name="role"
            onChange={handleChange} 
            />
          </label>
      </div>
      <label>Endereço
        <TextField 
          id="adress"
          type="text" 
          placeholder="R. X, N°, Bairro - Cidade, Estado" 
          autoComplete="off"
          value={vCard.address}
          name="address"
          onChange={handleChange} 
          />
      </label>
      <div className="contactInputs">
        <label>City
        <TextField 
          id="city"
          type="text" 
          placeholder="" 
          autoComplete="off"
          value={vCard.city}
          name="city"
          onChange={handleChange} 
          />
        </label>
        
        <label style={{marginLeft: "10px"}}>CEP
        <TextField 
          id="cep-code"
          type="text" 
          placeholder="Apenas dígitos" 
          autoComplete="off"
          value={vCard.CEPcode}
          name="CEPcode"
          onChange={handleChange} 
        />
        </label>

        <label style={{marginLeft: "10px"}}>País
        <TextField 
          id="country"
          type="text" 
          placeholder="" 
          autoComplete="off"
          value={vCard.country}
          name="country"
          onChange={handleChange} 
        />
        </label>
      </div>

      <Button type="submit" variant="contained" color="primary">
          Testar dados
      </Button>
      </Box>
    </Fragment>
  )
}

