import React, { createContext, useState, ReactNode, useContext } from "react";

interface LinkValueContextType {
  linkValue: string;
  setLinkValue: (linkValue: string) => void;
  clearLinkContext: () => void;
}

//Criação do Contexto com os valores padrão
const LinkValueContext = createContext<LinkValueContextType | undefined>(undefined);
// undefined...?

//Provedor de contexto
interface LinkValueProviderProps {
  children: ReactNode; // acredito que children seja o valor do meu link
}

export const LinkValueProvider: React.FC<LinkValueProviderProps> = ({ children }) => {
  const [linkValue, setLinkValue] = useState<string>('');

  const clearLinkContext = () => setLinkValue('');

  return (
    <LinkValueContext.Provider value={{linkValue, setLinkValue, clearLinkContext, }}>
      {children}
    </LinkValueContext.Provider>
  );
};

//Hook para usar o contexto
export const useLinkValue = (): LinkValueContextType => {
  const context = useContext(LinkValueContext);
  if (!context) {
    throw new Error("useText must be used within a TextProvider")
  }
  return context;
};