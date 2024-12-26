import { Fragment, useState } from "react";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";
import { useWifiValue } from "../../../contexts/WifiContext";
import { generateWifiConnection } from "../../../../utils/WifiFormat";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./index.css";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

export const WifiFormComponent: React.FC = () => {
  const { setWifiValue } = useWifiValue();
  const { namespaceValue } = useNamespaceValue();
  const [wifi, setWifi] = useState({
    aut: "WPA",
    ssid: "",
    password: "",
    hidden: "false",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setWifi((prev) => ({
      ...prev,
      [name]: value,
    }));

    const formattedWifiConnection = generateWifiConnection({ ...wifi, [name]: value });
    setWifiValue(formattedWifiConnection);
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setWifi((prev) => ({
      ...prev,
      [name]: value,
    }));

    const formattedWifiConnection = generateWifiConnection({ ...wifi, [name]: value });
    setWifiValue(formattedWifiConnection);
  };

  return (
    <Fragment>
      <h4 className="mediaTitle">{namespaceValue}</h4>
        <Box 
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2, // Espaçamento vertical entre os grupos
          }}
        >    
        <div className="wifiInputs" style={{alignItems: "baseline"}}>
              <TextField
                required
                id="outlined-basic"
                label="Nome da rede"
                type="text"
                placeholder=""
                autoComplete="off"
                name="ssid"
                value={wifi.ssid}
                onChange={handleChange}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "50px", 
                  },
                }}
              />
              <FormControl 
                  sx={{ 
                  m: 1, 
                  minWidth: 120,
                  "& .MuiInputBase-root": {
                      height: "50px"
                    },
                   }} 
                size="small">
                <InputLabel id="demo-select-small-label">Tipo da rede</InputLabel>
                <Select
                  required
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value="WPA2"
                  label="Tipo da rede"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "50px", 
                    },
                  }}
                >
                  <MenuItem value="WPA2">WPA/WPA2</MenuItem>
                </Select>
              </FormControl>

              <TextField
                required
                className="password"
                type="text"
                id="outlined-basic"
                label="Senha"
                placeholder="Senha da rede"
                autoComplete="off"
                name="password"
                value={wifi.password}
                onChange={handleChange}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "50px", 
                  },
                }}
              />

              <FormControl 
                sx={{ 
                  m: 1, 
                  minWidth: 120,
                  "& .MuiInputBase-root": {
                      height: "50px", 
                    },
                   }} 
                size="small">
                <InputLabel id="demo-select-small-label">Rede oculta</InputLabel>
                <Select
                  required
                  name="hidden"
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={wifi.hidden}
                  label="Tipo da rede"
                  onChange={handleSelectChange}
                >
                  <MenuItem value={"true"}>Sim</MenuItem>
                  <MenuItem value={"false"}>Não</MenuItem>
                </Select>
              </FormControl>
        </div>
        </Box>
    </Fragment>
  );
};
