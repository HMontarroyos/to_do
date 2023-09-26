import React, { useState } from "react";
import { Alert, FlatList, Switch } from "react-native";
import {
  useFonts,
  Khand_700Bold,
  Khand_500Medium,
} from "@expo-google-fonts/khand";
import LottieView from "lottie-react-native";
import * as S from "./styled";
import { Task } from "../../components";
import { useTheme } from "../../hooks/useThemeContext";
import { darkTheme, lightTheme, defaultTheme } from "../../styles/Theme";

interface TaskItem {
  id: number;
  name: string;
}

export default function Home() {
  const [newTaskName, setNewTaskName] = useState("");
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const { theme, toggleTheme } = useTheme();
  const disabledButtonBackground =
    newTaskName === ""
      ? defaultTheme.colors.disabled
      : defaultTheme.colors.confirmColor;

  let [fontsLoaded] = useFonts({
    Khand_700Bold,
    Khand_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleDeleteTask = (taskId: number, taskName: string) => {
    Alert.alert(
      "Remover Tarefa",
      `Tem certeza que deseja excluir a tarefa "${taskName}"?`,
      [
        {
          text: "Sim",
          onPress: () => {
            setTasks((prevTasks) =>
              prevTasks.filter((task) => task.id !== taskId)
            );
          },
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  };

  const handleTaskAdd = () => {
    if (tasks.some((task) => task.name === newTaskName)) {
      Alert.alert(
        "Tarefa já existe",
        "Já existe uma tarefa com esse nome na lista ",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Prosseguir",
            onPress: () => {
              setTasks((prevTasks) => [
                ...prevTasks,
                { id: prevTasks.length + 1, name: newTaskName },
              ]);
              setNewTaskName("");
            },
          },
        ]
      );
    } else {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: prevTasks.length + 1, name: newTaskName },
      ]);
      setNewTaskName("");
    }
  };

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
            fontFamily: defaultTheme.fonts.title,
            color:
              theme === "light"
                ? lightTheme.colors.primaryColor
                : darkTheme.colors.primaryColor,
          }}
        >
          ToDo List
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
      <S.Form>
        <S.Input
          style={{
            backgroundColor:
              theme === "light"
                ? darkTheme.colors.tertiaryColor
                : lightTheme.colors.tertiaryColor,
            color:
              theme === "light"
                ? lightTheme.colors.primaryColor
                : darkTheme.colors.primaryColor,
          }}
          placeholder="Adicionar nova tarefa"
          placeholderTextColor={defaultTheme.colors.gray}
          value={newTaskName}
          onChangeText={setNewTaskName}
        />
        <S.ButtonCreate
          style={{
            backgroundColor: disabledButtonBackground,
          }}
          disabled={newTaskName === ""}
          onPress={handleTaskAdd}
        >
          <S.TextButton>+</S.TextButton>
        </S.ButtonCreate>
      </S.Form>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <Task
            key={item.id.toString()}
            name={item.name}
            onDelete={() => handleDeleteTask(item.id, item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <S.ContainerLottie>
              <LottieView
                source={require("../../../assets/lotties/Empty.json")}
                autoPlay
                loop
                style={{ width: 300, height: 300, marginBottom: 20 }}
              />
            </S.ContainerLottie>
            <S.TextEmpty
              style={{
                fontFamily: defaultTheme.fonts.description,
                color:
                  theme === "light"
                    ? lightTheme.colors.primaryColor
                    : darkTheme.colors.primaryColor,
              }}
            >
              Você ainda não tem nenhuma tarefa, clique no símbolo de "+" e
              adicione uma tarefa a sua lista
            </S.TextEmpty>
          </>
        )}
      />
    </S.Container>
  );
}
