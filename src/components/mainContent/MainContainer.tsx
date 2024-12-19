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
import { EmailComponent } from "./DocsComponent/FormsComponents/EmailComponent";
import { MailtoValueProvider } from "../contexts/MailtoContext";

const MainContainerStyle = styled.main`
  width: 70vw;
  height: 77vh;
  margin: auto;
  background-color: white;
  border-radius: 0 30px 0 30px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
  box-sizing: border-box;
`

export const MainContainer: React.FC = () => {
  return(
    <InputValueProvider>
    <VCardValueProvider>
    <LinkValueProvider>
    <ButtonFormProvider>
    <WifiValueProvider>
    <MailtoValueProvider>
        <MainContainerStyle>
          <NamespaceContextProvider>
            <DocsComponent/>
            <QrContainer/>
          </NamespaceContextProvider>
        </MainContainerStyle>    
    </MailtoValueProvider>
    </WifiValueProvider>
    </ButtonFormProvider>
    </LinkValueProvider>  
    </VCardValueProvider>
    </InputValueProvider>
  )
}