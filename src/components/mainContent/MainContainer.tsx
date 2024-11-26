import styled from "styled-components";
import { QrContainer } from "./QrSidebarComponent/QrContainer";
import { DocsComponent } from "./DocsComponent/DocsComponent";
import React from "react";
import { LinkValueProvider } from "../LinkValueContext";
import { InputValueProvider } from "../InputValueContext";

const MainContainerStyle = styled.main`
  width: 80vw;
  height: 77vh;
  margin: auto;
  background-color: white;
  border-radius: 0 30px 0 30px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
`

export const MainContainer: React.FC = () => {
  return(
    <InputValueProvider>
      <LinkValueProvider>
        <MainContainerStyle>
          <DocsComponent/>
          <QrContainer/>
        </MainContainerStyle>    
      </LinkValueProvider>  
    </InputValueProvider>
  )
}