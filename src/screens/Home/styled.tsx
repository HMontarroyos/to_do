import styled from "styled-components/native";
import { defaultTheme } from "../../styles/Theme";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const ContainerTitle = styled.View`
  display: flex;
  flexDirection: row;
  alignItems: center; 
  justifyContent: space-between;
  marginTop: 48;
`;

export const Title = styled.Text`
  fontSize: 32;
  marginRight: 15;
`;


export const Input = styled.TextInput`
  flex: 1;
  height: 56;
  borderRadius: 5px;
  padding: 16px;
  fontSize: 22;
  marginRight: 12;
`

export const Form = styled.View`
  width: 100%;
  flexDirection: row;
  marginTop: 36;
  marginBottom: 42;

`
export const ButtonCreate = styled.TouchableOpacity`
  width: 56;
  height: 56;
  borderRadius: 5px;
  alignItems: center;
  justifyContent: center;

`
export const TextButton = styled.Text`
  color: ${defaultTheme.colors.light};
  fontSize: 24;
`

export const ContainerLottie = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`

export const TextEmpty = styled.Text`
  fontSize: 25;
  marginTop: 30;
  textAlign: center;
`;
