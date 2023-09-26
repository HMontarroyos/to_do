import React, { useEffect } from "react";
import * as S from "./styled";
import { StackNavigationProp } from "@react-navigation/stack";
import LottieView from "lottie-react-native";
import { darkTheme, defaultTheme, lightTheme } from "../../styles/Theme";
import {
  Khand_500Medium,
  Khand_700Bold,
  useFonts,
} from "@expo-google-fonts/khand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Switch } from "react-native";
import { useTheme } from "../../hooks/useThemeContext";

type Props = {
  navigation: StackNavigationProp<{}>;
};

const Introduction: React.FC<Props> = ({ navigation }) => {
  const { theme, toggleTheme } = useTheme();
  let [fontsLoaded] = useFonts({
    Khand_700Bold,
    Khand_500Medium,
  });

  useEffect(() => {
    const checkIntroduction = async () => {
      const hasSeenIntroduction = await AsyncStorage.getItem(
        "hasSeenIntroduction"
      );
      if (hasSeenIntroduction) {
        navigation.replace("Home");
      }
    };

    checkIntroduction();
  }, [navigation]);

  const handleContinue = async () => {
    await AsyncStorage.setItem("hasSeenIntroduction", "true");
    navigation.replace("Home");
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <S.Container
      style={{
        backgroundColor:
          theme === "light"
            ? lightTheme.colors.secondaryColor
            : darkTheme.colors.secondaryColor,
      }}
    >
      <S.ContainerTitle>
        <S.Title
          style={{
            fontFamily: defaultTheme.fonts.description,
            color:
              theme === "light"
                ? lightTheme.colors.primaryColor
                : darkTheme.colors.primaryColor,
          }}
        >
          Seja bem-vindo a nossa aplicação de To-Do!!!
        </S.Title>
        <Switch
          style={{
            transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
          }}
          trackColor={{
            false: defaultTheme.colors.switchColorFalse,
            true: defaultTheme.colors.switchColorTrue,
          }}
          thumbColor={
            theme === "dark"
              ? defaultTheme.colors.thumbColorTrue
              : defaultTheme.colors.thumbColorFalse
          }
          ios_backgroundColor={defaultTheme.colors.iosBackgroundColor}
          value={theme === "dark"}
          onValueChange={toggleTheme}
        />
      </S.ContainerTitle>
      <LottieView
        source={require("../../../assets/lotties/introduction.json")}
        autoPlay
        loop
        style={{ width: 300, height: 300, marginBottom: 20 }}
      />
      <S.Description
        style={{
          fontFamily: defaultTheme.fonts.description,
          color:
            theme === "light"
              ? lightTheme.colors.primaryColor
              : darkTheme.colors.primaryColor,
        }}
      >
        Nela você irá poder criar suas próprias tarefas, marcar como concluídas
        e até excluí-las após finalizadas, não perca tempo e comece logo. 
      </S.Description>
      <S.Button onPress={handleContinue}>
        <S.TextButton
          style={{
            fontFamily: defaultTheme.fonts.description,
          }}
        >
          Vamos lá
        </S.TextButton>
      </S.Button>
    </S.Container>
  );
};

export default Introduction;
