import React, { createContext, useContext } from "react";

interface FormContextType{
  handleSubmit: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const ButtonFormProvider: React.FC<{children: React.ReactNode }> = ({ children }) => {
  const handleSubmit = () => {

  };

  return (
    <FormContext.Provider value={{ handleSubmit }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a ButtonProvider");
  }

  return context;
}