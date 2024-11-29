import React, { createContext, ReactNode, useContext, useState } from "react";

interface NamespaceContextType {
  namespaceValue: string;
  setNamespaceValue: (namespaceValue: string) => void;
}

const NamespaceContext = createContext<NamespaceContextType | undefined>(undefined);

interface NamespaceProviderProps {
  children: ReactNode;
}

export const NamespaceContextProvider: React.FC<NamespaceProviderProps> = ({children}) => {
  const [ namespaceValue, setNamespaceValue ] = useState<string>('');

  return(
    <NamespaceContext.Provider value={{namespaceValue, setNamespaceValue}}>
      {children}
    </NamespaceContext.Provider>
  )
}

export const useNamespaceValue = (): NamespaceContextType => {
  const context = useContext(NamespaceContext);
  if (!context) {
    throw new Error("useNamespaceValue must be used within a TextProvider");
  }
  return context;
}