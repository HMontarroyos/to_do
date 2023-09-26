import styled from "styled-components/native";

export const GlobalStyles = styled.View`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
`;
