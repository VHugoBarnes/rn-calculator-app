import React from "react";
import { Text, View } from "react-native";
import { Button } from "../components/Button.component";
import { styles } from "../theme/App.theme";

const Calculator = () => {
  const INITIAL_NUMBER = "0";

  const [previousNumber, setPreviousNumber] = React.useState(INITIAL_NUMBER);
  const [number, setNumber] = React.useState(INITIAL_NUMBER);

  const clear = () => {
    setNumber("0");
  };

  const getLastDigit = () => {
    return number.charAt(number.length - 1);
  };

  const buildNumber = (newDigit: string) => {
    //* Can't be 0's
    if (newDigit === "0" && getLastDigit() === "0") {
      //* If there is a ".", they can do it
      if (!number.includes(".")) {
        return;
      }
    }

    //* Can't have more than one point
    if (newDigit === "." && number.includes(".")) {
      return;
    }

    // Can't be more than 100 numbers long
    if (number.length >= 100) {
      return;
    }

    if (number === INITIAL_NUMBER) {
      if (newDigit === ".") {
        setNumber(`${number}${newDigit}`);
      } else {
        setNumber(newDigit);
      }
      return;
    }

    setNumber(`${number}${newDigit}`);
    return;
  };

  const applyMinusPlus = () => {
    if (number.includes("-")) {
      setNumber(number.replace("-", ""));
    } else {
      setNumber(`-${number}`);
    }
  };

  const del = () => {
    if (number.length === 1) {
      setNumber(INITIAL_NUMBER);
    } else if (number.length > 1) {
      setNumber(number.slice(0, number.length - 1));
    }
  };

  return (
    <View style={[styles.calculatorContainer]}>
      {
        previousNumber !== "0" && (
          <Text style={[styles.smallResult]}>
            {previousNumber}
          </Text>
        )
      }
      <Text
        style={[styles.result]}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {number}
      </Text>

      <View style={[styles.row]}>
        <Button
          text="C"
          color="light-gray"
          onPress={clear}
        />
        <Button
          text="±"
          onPress={applyMinusPlus}
          color="light-gray"
        />
        <Button
          text="del"
          color="light-gray"
          onPress={del}
        />
        <Button
          text="÷"
          color="orange"
        />
      </View>

      <View style={[styles.row]}>
        <Button
          text="7"
          onPress={() => { buildNumber("7"); }}
        />
        <Button
          text="8"
          onPress={() => { buildNumber("8"); }}
        />
        <Button
          text="9"
          onPress={() => { buildNumber("9"); }}
        />
        <Button
          text="x"
          color="orange"
        />
      </View>

      <View style={[styles.row]}>
        <Button
          text="4"
          onPress={() => { buildNumber("4"); }}
        />
        <Button
          text="5"
          onPress={() => { buildNumber("5"); }}
        />
        <Button
          text="6"
          onPress={() => { buildNumber("6"); }}
        />
        <Button
          text="-"
          color="orange"
        />
      </View>

      <View style={[styles.row]}>
        <Button
          text="1"
          onPress={() => { buildNumber("1"); }}
        />
        <Button
          text="2"
          onPress={() => { buildNumber("2"); }}
        />
        <Button
          text="3"
          onPress={() => { buildNumber("3"); }}
        />
        <Button
          text="+"
          color="orange"
        />
      </View>

      <View style={[styles.row]}>
        <Button
          text="0"
          onPress={() => { buildNumber("0"); }}
          bigButton
        />
        <Button
          text="."
          onPress={() => { buildNumber("."); }}
        />
        <Button
          text="="
          color="orange"
        />
      </View>
    </View>
  );
};

export default Calculator;
