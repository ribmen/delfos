import React, { Fragment, useState } from "react";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1, // Espaçamento vertical entre os grupos
          '& .contactInputs': {
            display: 'flex',
            gap: 1, // Espaçamento horizontal entre os campos dentro de cada linha
          },
        }}
        noValidate
        autoComplete="off"
      >

      <h3 className="mediaTitle">{namespaceValue}</h3>
      <h4 className="localInfo">Informações pessoais</h4>
      <div className="contactInputs">
        <TextField
          required
          id="outlined-basic"
          label="Primeiro nome"
          type="text" 
          placeholder="" 
          autoComplete="off"
          value={vCard.firstName}
          name="firstName"
          onChange={handleChange} 
          sx={{
            "& .MuiInputBase-root": {
              height: "50px", 
            },
          }}
          />
        
        <TextField 
          required
          id="outlined-basic"
          label="Último nome"
          type="text" 
          placeholder="" 
          autoComplete="off"
          value={vCard.lastName}
          name="lastName"
          onChange={handleChange}
          sx={{
            "& .MuiInputBase-root": {
              height: "50px", 
            },
          }}
        />
      </div>
      <div className="contactInputs">
        <TextField 
          required
          fullWidth
          id="outlined-basic"
          label="Telefone celular"
          type="text" 
          placeholder="Formato: (XX) XXXXX-XXXX" 
          autoComplete="off"
          value={vCard.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
          sx={{
            "& .MuiInputBase-root": {
              height: "50px", 
            },
          }}
          />
        
        <TextField 
          id="outlined-basic"
          label="Telefone fixo"
          type="text" 
          placeholder="" 
          autoComplete="off"
          value={vCard.landlineNumber}
          name="landlineNumber"
          onChange={handleChange} 
          sx={{
            "& .MuiInputBase-root": {
              height: "50px", 
            },
          }}
        />
      </div>
      <h4 className="localInfo">Informações profissionais</h4>
      <div className="contactInputs">
        <TextField
          fullWidth
          id="outlined-basic"
          label="E-mail"
          type="text" 
          placeholder="Formato: exemplo@dominio.com" 
          autoComplete="off"
          value={vCard.email}
          name="email"
          onChange={handleChange} 
          sx={{
            "& .MuiInputBase-root": {
              height: "50px", 
            },
          }}
          />
        
        <TextField 
          id="outlined-basic"
          label="Site (URL)"
          type="text" 
          placeholder="https://" 
          autoComplete="off"
          value={vCard.websiteUrl}
          name="websiteUrl"
          onChange={handleChange} 
          sx={{
            "& .MuiInputBase-root": {
              height: "50px", 
            },
          }}
        />
      </div>
      <div className="contactInputs">
          <TextField
            id="outlined-basic"
            label="Empresa/Órgão"
            type="text" 
            placeholder="PROCURADORIA GERAL DO ESTADO DO RN" 
            autoComplete="off"
            value={vCard.organization}
            name="organization"
            onChange={handleChange} 
            sx={{
              "& .MuiInputBase-root": {
                height: "50px", 
              },
            }}
          />

          <TextField
            id="outlined-basic"
            label="Cargo"
            type="text" 
            placeholder="" 
            autoComplete="off"
            value={vCard.role}
            name="role"
            onChange={handleChange} 
            sx={{
              "& .MuiInputBase-root": {
                height: "50px", 
              },
            }}
            />
      </div>
      <h4 className="localInfo">Localização</h4>
        <TextField 
          id="outlined-basic"
          label="Endereço"
          type="text" 
          placeholder="R. X, N°, Bairro - Cidade, Estado" 
          autoComplete="off"
          value={vCard.address}
          name="address"
          onChange={handleChange} 
          sx={{
            "& .MuiInputBase-root": {
              height: "50px", 
            },
          }}
          />
      <div className="contactInputs">
        <TextField 
          id="outlined-basic"
          label="Cidade"
          type="text" 
          placeholder="" 
          autoComplete="off"
          value={vCard.city}
          name="city"
          onChange={handleChange} 
          sx={{
            "& .MuiInputBase-root": {
              height: "50px", 
            },
          }}
          />
        
        <TextField 
          id="outlined-basic"
          label="CEP"
          type="text" 
          placeholder="Apenas dígitos" 
          autoComplete="off"
          value={vCard.CEPcode}
          name="CEPcode"
          onChange={handleChange} 
          sx={{
            "& .MuiInputBase-root": {
              height: "50px", 
            },
          }}
        />

        <TextField 
          id="outlined-basic"
          label="País"
          type="text" 
          placeholder="" 
          autoComplete="off"
          value={vCard.country}
          name="country"
          onChange={handleChange} 
          sx={{
            "& .MuiInputBase-root": {
              height: "50px", 
            },
          }}
        />
      </div>
      </Box>
    </Fragment>
  )
}

