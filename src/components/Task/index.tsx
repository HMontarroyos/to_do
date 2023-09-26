import React from "react";
import * as S from "./styled";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts, Teko_600SemiBold } from "@expo-google-fonts/teko";
import { Checkbox } from "../../components";
import { useTheme } from "../../hooks/useThemeContext";
import { darkTheme, lightTheme, defaultTheme } from "../../styles/Theme";

interface TaskProps {
  name: string;
  onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({ name, onDelete }) => {
  const { theme } = useTheme();
  const [checked, setChecked] = React.useState(false);
  let [fontsLoaded] = useFonts({
    Teko_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <S.TaskContainer>
      <Checkbox checked={checked} onPress={() => setChecked(!checked)} />
      <S.TaskText
        style={{
          fontFamily: defaultTheme.fonts.paragraph,
          textDecorationLine: checked ? "line-through" : "none",
          color:
            theme === "light"
              ? lightTheme.colors.primaryColor
              : darkTheme.colors.primaryColor,
        }}
      >
        {name}
      </S.TaskText>
      <S.TaskIcon onPress={onDelete}>
        <FontAwesome
          name="trash"
          size={24}
          color={defaultTheme.colors.cancelColor}
        />
      </S.TaskIcon>
    </S.TaskContainer>
  );
};

export default Task;
