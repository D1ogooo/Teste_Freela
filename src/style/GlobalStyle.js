import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
 }
`

export const Container = styled.div`
 width: 70%;
 margin: 0 auto;
 border-radius: .625rem;
`