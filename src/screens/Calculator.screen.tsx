import React from "react";
import { Text, View } from "react-native";
import { Button } from "../components/Button.component";
import { styles } from "../theme/App.theme";

const Calculator = () => {
  const INITIAL_NUMBER = "0";

  const [previousNumber, setPreviousNumber] = React.useState(INITIAL_NUMBER);
  const [currentNumber, setCurrentNumber] = React.useState(INITIAL_NUMBER);
  const [operand, setOperand] = React.useState("");

  const clear = () => {
    setCurrentNumber(INITIAL_NUMBER);
    setPreviousNumber(INITIAL_NUMBER);
    setOperand("");
  };

  const getLastDigit = () => {
    return currentNumber.charAt(currentNumber.length - 1);
  };

  const buildNumber = (newDigit: string) => {
    //* Can't be 0's
    if (newDigit === "0" && getLastDigit() === "0") {
      //* If there is a ".", they can do it
      if (!currentNumber.includes(".")) {
        return;
      }
    }

    //* Can't have more than one point
    if (newDigit === "." && currentNumber.includes(".")) {
      return;
    }

    //* Can't be more than 100 numbers long
    if (currentNumber.length >= 100) {
      return;
    }

    if (currentNumber === INITIAL_NUMBER) {
      if (newDigit === ".") {
        setCurrentNumber(`${currentNumber}${newDigit}`);
      } else {
        setCurrentNumber(newDigit);
      }
      return;
    }

    if (currentNumber === "-0" && newDigit !== ".") {
      setCurrentNumber(`-${newDigit}`);
      return;
    }

    setCurrentNumber(`${currentNumber}${newDigit}`);
    return;
  };

  const applyMinusPlus = () => {
    if (currentNumber.includes("-")) {
      setCurrentNumber(currentNumber.slice(1));
    } else {
      setCurrentNumber(`-${currentNumber}`);
    }
  };

  const del = () => {
    if (currentNumber.length === 1 && currentNumber !== "-") {
      setCurrentNumber(INITIAL_NUMBER);
    } else if (currentNumber.startsWith("-") && currentNumber.length === 2) {
      setCurrentNumber(INITIAL_NUMBER);
    } else if (currentNumber.length > 1) {
      setCurrentNumber(currentNumber.slice(0, currentNumber.length - 1));
    }
  };

  const applyOperand = (newOperand: string) => {
    setOperand(newOperand);
    setPreviousNumber(currentNumber);
    setCurrentNumber(INITIAL_NUMBER);
  };

  const calculate = () => {
    const number1 = parseFloat(previousNumber);
    const number2 = parseFloat(currentNumber);
    let result: string = INITIAL_NUMBER;

    switch (operand) {
      case "÷":
        result = (number1 / number2).toString();
        break;
      case "x":
        result = (number1 * number2).toString();
        break;
      case "-":
        result = (number1 - number2).toString();
        break;
      case "+":
        result = (number1 + number2).toString();
        break;
      default:
        result = INITIAL_NUMBER;
        break;
    }

    setCurrentNumber(result);
    setPreviousNumber(INITIAL_NUMBER);
    setOperand("");
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
        {operand !== "" && operand}{currentNumber}
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
          onPress={() => {
            applyOperand("÷");
          }}
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
          onPress={() => {
            applyOperand("x");
          }}
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
          onPress={() => {
            applyOperand("-");
          }}
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
          onPress={() => {
            applyOperand("+");
          }}
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
          onPress={calculate}
          color="orange"
        />
      </View>
    </View>
  );
};

export default Calculator;
