interface WifiProps {
  aut: string;
  ssid: string;
  password: string;
  hidden: boolean;
}

export const generateWifiConnection = (
  {
    aut, 
    ssid, 
    password, 
    hidden
  }: WifiProps) => {
    
    return `
      WIFI:T:<${aut}>;S:<${ssid}>;P:<${password}>;H:<${hidden}>;
    `
  };