import React, { Fragment, useState } from "react";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";
import { TextField, Box } from '@mui/material';
import { useVCardValue } from "../../../contexts/vCardContext";
import { generateVCard } from "../../../../utils/vCardFormat";
import "./index.css"


export const ContatoComponent: React.FC = () => {
  const { namespaceValue } = useNamespaceValue();
  const {setVCardValue} = useVCardValue();
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

   const formattedVCard = generateVCard(vCard);
   setVCardValue(formattedVCard);
 };

  return(
    <Fragment>
      <Box
        component="form"
      >
      <h4 className="mediaTitle">{namespaceValue}</h4>
      <div className="contactInputs">
        <label style={{marginRight: "10px"}}>Primeiro nome
        <TextField
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
          type="text" 
          placeholder="" 
          autoComplete="off"
          value={vCard.country}
          name="country"
          onChange={handleChange} 
        />
        </label>
      </div>
      </Box>
    </Fragment>
  )
}

