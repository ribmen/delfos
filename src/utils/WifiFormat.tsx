interface WifiProps {
  aut: string;
  ssid: string;
  password: string;
  hidden: string;
}

export const generateWifiConnection = (
  {
    aut, // wpa
    ssid, // nome da rede
    password, 
    hidden
  }: WifiProps) => {
    
    return `
      WIFI:T:${aut};S:${ssid};P:${password};H:${hidden};
    `
  };