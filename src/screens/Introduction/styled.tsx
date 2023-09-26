import styled from "styled-components/native";
import { defaultTheme } from "../../styles/Theme";

export const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center; 
    padding: 24px;
`;

export const ContainerTitle = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center; 
    justifyContent: space-between;
`;

export const Title = styled.Text`
    font-size: 30;
`

export const Description = styled.Text`
    font-size: 18;

`

export const Button = styled.TouchableOpacity`
    marginTop: 40px;
    width: 100%;
    height: 56;
    borderRadius: 5px;
    alignItems: center;
    justifyContent: center;
    background-color: ${defaultTheme.colors.confirmColor};

`
export const TextButton = styled.Text`
    color: ${defaultTheme.colors.light};
    fontSize: 24;
`