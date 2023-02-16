import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Calculator from "./src/screens/Calculator.screen";
import { styles } from "./src/theme/App.theme";

const App = () => {
  return (
    <SafeAreaView style={[styles.background]}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />
      <Calculator />
    </SafeAreaView>
  );
};

export default App;
