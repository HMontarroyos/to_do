import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts, Teko_600SemiBold } from "@expo-google-fonts/teko";
import { Checkbox } from "../../components";
import { useTheme } from "../../hooks/useThemeContext";
import { darkTheme, lightTheme, defaultTheme } from "../../styles/Theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface TaskProps {
  name: string;
  onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({ name, onDelete }) => {
  const { theme } = useTheme();
  const [checked, setChecked] = useState(false);
  let [fontsLoaded] = useFonts({
    Teko_600SemiBold,
  });

  useEffect(() => {
    const loadCheckedStatus = async () => {
      try {
        const storedStatus = await AsyncStorage.getItem(`task_checked_${name}`);
        if (storedStatus) {
          setChecked(storedStatus === "true");
        }
      } catch (error) {
        console.error(
          `Erro ao carregar status do Checkbox para a tarefa ${name}:`,
          error
        );
      }
    };

    loadCheckedStatus();
  }, [name]);

  const toggleChecked = async () => {
    const newStatus = !checked;
    setChecked(newStatus);

    try {
      await AsyncStorage.setItem(
        `task_checked_${name}`,
        JSON.stringify(newStatus)
      );
    } catch (error) {
      console.error(
        `Erro ao salvar status do Checkbox para a tarefa ${name}:`,
        error
      );
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <S.TaskContainer>
      <Checkbox checked={checked} onPress={toggleChecked} />
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
