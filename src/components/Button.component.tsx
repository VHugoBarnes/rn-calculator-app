import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  text: string,
  color?: "normal" | "orange" | "light-gray",
  bigButton?: boolean,
  onPress?: Function
}

export const Button = ({ text, color = "normal", bigButton = false, onPress }: Props) => {
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <Pressable
      style={[
        color === "light-gray" && styles.buttonGray,
        color === "orange" && styles.buttonOrange,
        color === "normal" && styles.buttonNormal,
        isPressed ? { ...styles.button, ...styles.buttonPressed } : styles.button,
        bigButton === true && styles.bigButton,
      ]}
      onPress={(e) => {
        if (onPress !== undefined) {
          onPress(e);
        }
        setIsPressed(true);
      }}
      onPressOut={() => {
        setIsPressed(false);
      }}
    >
      <Text
        style={[styles.buttonText, color === "light-gray" && styles.buttonTextBlack, bigButton === true && styles.bigButtonText]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10000,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonGray: {
    backgroundColor: "#A5A5A5",
  },
  buttonNormal: {
    backgroundColor: "#333333",
  },
  buttonOrange: {
    backgroundColor: "#FEA00A",
  },
  buttonPressed: {
    backgroundColor: "black",
  },

  bigButton: {
    width: 180,
    alignItems: "flex-start",
    paddingLeft: 30,
  },

  buttonText: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    fontWeight: "500",
  },
  bigButtonText: {
    textAlign: "left",
  },
  buttonTextBlack: {
    color: "black",
  },
});
