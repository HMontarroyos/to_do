import styled from "styled-components/native";

interface Props {
  font: string;
}

export const TaskContainer = styled.View`
  flexDirection: row;
  alignItems: center;
  margin: 10px 0;
`;

export const TaskText = styled.Text<Props>`
  fontSize: 22;
  flex: 1;
`;

export const TaskIcon = styled.TouchableOpacity`
  padding: 10px;
`;
