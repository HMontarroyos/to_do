import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { StatusBar, StatusBarStyle } from "react-native";
import { ThemeProvider } from "./src/hooks/useThemeContext";
import { GlobalStyles } from "./src/styles/GlobalStyle";
import Navigation from "./src/Navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [statusBarStyle, setStatusBarStyle] = useState("dark-content");

  useEffect(() => {
    async function fetchData() {
      const savedTheme = await AsyncStorage.getItem("theme");
      if (savedTheme === "light") {
        setStatusBarStyle("light-content");
      }
    }

    fetchData();
  }, []);

  return (
    <ThemeProvider>
      <StatusBar
        barStyle={statusBarStyle as StatusBarStyle}
        backgroundColor="transparent"
        translucent
      />
      <GlobalStyles />
      <Navigation />
    </ThemeProvider>
  );
}
