import React, { createContext, useState, ReactNode, useContext } from "react";

interface InputValueContextType {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
}

//Criação do Contexto com os valores padrão
const InputValueContext = createContext<InputValueContextType | undefined>(undefined);
// undefined...?

//Provedor de contexto
interface InputValueProviderProps {
  children: ReactNode; // acredito que children seja o valor do meu input
}

export const InputValueProvider: React.FC<InputValueProviderProps> = ({ children }) => {
  const [inputValue, setInputValue] = useState<string>('');

 

  return (
    <InputValueContext.Provider value={{inputValue, setInputValue}}>
      {children}
    </InputValueContext.Provider>
  );
};

export const useInputValue = (): InputValueContextType => {
  const context = useContext(InputValueContext);
  if (!context) {
    throw new Error("useInputValue must be used within a TextProvider")
  }
  return context;
};