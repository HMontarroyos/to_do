import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "./src/hooks/useThemeContext";
import { lightTheme, darkTheme } from "./src/styles/Theme";
import { GlobalStyles } from "./src/styles/GlobalStyle";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}
