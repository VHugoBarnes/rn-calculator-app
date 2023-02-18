import React from "react";
import { Text, View } from "react-native";
import { Button } from "../components/Button.component";
import useCalculator from "../hooks/useCalculator.hook";
import { styles } from "../theme/App.theme";

const Calculator = () => {
  const INITIAL_NUMBER = "0";

  const [previousNumber, setPreviousNumber] = React.useState(INITIAL_NUMBER);
  const [currentNumber, setCurrentNumber] = React.useState(INITIAL_NUMBER);
  const [operand, setOperand] = React.useState("");

  const {
    clear,
    buildNumber,
    applyMinusPlus,
    del,
    applyOperand,
    calculate,
  } = useCalculator({
    previousNumber,
    setPreviousNumber,
    currentNumber,
    setCurrentNumber,
    operand,
    setOperand,
    INITIAL_NUMBER,
  });

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
