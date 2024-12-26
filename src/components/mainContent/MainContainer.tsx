import styled from "styled-components";
import { QrContainer } from "./QrSidebarComponent/QrContainer";
import { DocsComponent } from "./DocsComponent/DocsComponent";
import React from "react";
import { LinkValueProvider } from "../contexts/LinkValueContext";
import { InputValueProvider } from "../contexts/InputValueContext";
import { NamespaceContextProvider } from "../contexts/NamespaceContext";
import { ButtonFormProvider } from "../contexts/ButtonFormContext";
import { VCardValueProvider } from "../contexts/vCardContext";
import { WifiValueProvider } from "../contexts/WifiContext";
import { MailtoValueProvider } from "../contexts/MailtoContext";

const MainContainerStyle = styled.main`
  width: 65vw;
  height: 75vh;
  margin: auto;
  background-color: white;
  border-radius: 0 18px 0 18px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

export const MainContainer: React.FC = () => {
  return(
    <InputValueProvider>
    <VCardValueProvider>
    <LinkValueProvider>
    <ButtonFormProvider>
    <WifiValueProvider>
    <MailtoValueProvider>
    <NamespaceContextProvider>
          <MainContainerStyle>
            <DocsComponent/>
            <QrContainer/>
          </MainContainerStyle>    
    </NamespaceContextProvider>
    </MailtoValueProvider>
    </WifiValueProvider>
    </ButtonFormProvider>
    </LinkValueProvider>  
    </VCardValueProvider>
    </InputValueProvider>
  )
}