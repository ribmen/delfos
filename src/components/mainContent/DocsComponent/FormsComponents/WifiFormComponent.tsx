import { Fragment, useState } from "react";
import { InputStyled, SelectStyled } from "../styles.form";
import { useNamespaceValue } from "../../../contexts/NamespaceContext";
import "./index.css";
import { useWifiValue } from "../../../contexts/WifiContext";
import { generateWifiConnection } from "../../../../utils/WifiFormat";

export const WifiFormComponent: React.FC = () => {
  const { setWifiValue } = useWifiValue();
  const { namespaceValue } = useNamespaceValue();
  const [wifi, setWifi] = useState({
    aut: "WPA",
    ssid: "",
    password: "",
    hidden: "false",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      <div style={{ display: "flex", alignContent: "inline" }}>
        <div className="wifiInputs">
          {/* Nome da rede */}
          <label style={{ marginRight: "10px" }}>
            Nome da rede
            <InputStyled
              type="text"
              name="ssid"
              value={wifi.ssid}
              placeholder=""
              autoComplete="off"
              onChange={handleChange}
            />
          </label>

          <label style={{ marginRight: "10px", marginLeft: "10px" }}>
            Tipo da rede
            <SelectStyled name="aut" value={wifi.aut} onChange={handleChange}>
              <option value="WPA2">WPA/WPA2</option>
            </SelectStyled>
          </label>

          <label style={{ marginLeft: "10px" }}>
            Senha
            <InputStyled
              className="password"
              type="text"
              name="password"
              placeholder="Senha da rede"
              autoComplete="off"
              value={wifi.password}
              onChange={handleChange}
            />
          </label>

          <label style={{ marginLeft: "10px" }}>
            Rede oculta
            <SelectStyled
              name="hidden"
              value={wifi.hidden}
              onChange={handleChange}
            >
              <option value={"true"}>Sim</option>
              <option value={"false"}>Não</option>
            </SelectStyled>
          </label>
        </div>
      </div>
    </Fragment>
  );
};
