import styled from "styled-components";

const FooterStyle = styled.footer`
  display: flex;
  width: 100vw;
  padding-top: 52px;
  justify-content: center;
  align-items: center;
  background: rgba(0, 28, 120, 0.64);
  bottom: 0;
  position: fixed;
`

export const Footer = () => {
  return(
    <FooterStyle/>
  )
}