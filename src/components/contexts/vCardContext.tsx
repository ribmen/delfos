import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface vCardContextType {
  vCardValue: string;
  setVCardValue: (vCardValue: string) => void;
}

const VCardContext = createContext<vCardContextType>({
  vCardValue: '', // Valor inicial para vCardValue
  setVCardValue: () => {
    throw new Error("setVCardValue was called outside of a VCardProvider");
  }, // Função "placeholder" para avisar se `setVCardValue` for usado sem um Provider
});


interface vCardProviderProps {
  children: ReactNode;
}

export const VCardValueProvider: React.FC<vCardProviderProps> = ({children}) => {
  const [vCardValue, setVCardValue] = useState<string>('');
  return (
    
    <VCardContext.Provider value={{vCardValue, setVCardValue}}>
      {children} 
    </VCardContext.Provider>
  );
};

export const useVCardValue = (): vCardContextType => {
  const context = useContext(VCardContext);
  if (!context) {
    throw new Error("useInputValue must be used within a TextProvider")
  }
  return context;
}