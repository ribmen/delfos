import React, { createContext, ReactNode, useContext, useState } from "react";

interface MailtoContextType {
  mailtoValue: string;
  setMailtoValue: (mailtoValue: string) => void;
}

interface MailtoProviderProps {
  children: ReactNode;
}

const MailtoContext = createContext<MailtoContextType | undefined>({
  mailtoValue: '',
  setMailtoValue: () => {
    throw new Error('mailtoContext was called outside a provider');
  }
});

export const MailtoValueProvider: React.FC<MailtoProviderProps> = ({children}) => {
  const [mailtoValue, setMailtoValue] = useState<string>(''); // o nome do estado deve ser igual ao do contexto
  return (
    <MailtoContext.Provider value={{mailtoValue, setMailtoValue}}>
      {children}
    </MailtoContext.Provider>
  )
}

export const useMailtoValue = (): MailtoContextType => {
  const context = useContext(MailtoContext);
  if (!context) {
    throw new Error('useMailtoValue must be used withing a provider!');
  }
  return context;
}