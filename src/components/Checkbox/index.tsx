import React from "react";
import * as S from "./styled";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "../../hooks/useThemeContext";
import { darkTheme, lightTheme, defaultTheme } from "../../styles/Theme";

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onPress }) => {
  const { theme } = useTheme();

  return (
    <S.CheckboxContainer
      onPress={onPress}
      style={{
        borderColor:
          theme === "light" ? lightTheme.colors.primaryColor : darkTheme.colors.primaryColor,
      }}
    >
      {checked && (
        <FontAwesome name="check" size={16} color={defaultTheme.colors.confirmColor} />
      )}
    </S.CheckboxContainer>
  );
};

export default Checkbox;
