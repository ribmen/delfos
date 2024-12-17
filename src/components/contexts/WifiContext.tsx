import React, { createContext, ReactNode, useContext, useState } from "react";

interface WifiContextType{
  wifiValue: string;
  setWifiValue: (wifiValue: string) => void;
}

const WifiContext = createContext<WifiContextType | undefined>({
  wifiValue: '',
  setWifiValue: () => {
    throw new Error("setWifiValue was called outside of a VCardProvider");
  },
});

interface wifiProviderProps {
  children: ReactNode;
}

export const WifiValueProvider: React.FC<wifiProviderProps> = ({children}) => {
  const [ wifiValue, setWifiValue ] = useState<string>('');
    return (
      <WifiContext.Provider value={{wifiValue, setWifiValue}}>
        {children}
      </WifiContext.Provider> 
    )
}

export const useWifiValue = (): WifiContextType => {
  const context = useContext(WifiContext);
  if (!context) {
    throw new Error("useWifiContext must me used within a WifiValueProvider!");
  }

  return context;
}
