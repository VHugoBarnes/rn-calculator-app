import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  result: {
    color: "white",
    fontSize: 60,
    textAlign: "right",
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
  },
  smallResult: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 30,
    textAlign: "right",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
});
