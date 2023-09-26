import styled from "styled-components/native";
import { defaultTheme } from "../../styles/Theme";
export const CheckboxContainer = styled.TouchableOpacity`
  width: 24;
  height: 24;
  borderWidth: 3px;
  borderStyle: solid;
  borderRadius: 4px;
  marginRight: 10;
  alignItems: center;
  justifyContent: center;
`;

export const CheckIcon = styled.Text`
  font-size: 18;
  color: ${defaultTheme.colors.confirmColor};
`;
