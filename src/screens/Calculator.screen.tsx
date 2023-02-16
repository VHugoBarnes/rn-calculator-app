import React from "react";
import { Text, View } from "react-native";
import { Button } from "../components/Button.component";
import { styles } from "../theme/App.theme";

const Calculator = () => {
  return (
    <View style={[styles.calculatorContainer]}>
      <Text style={[styles.smallResult]}>
        200
      </Text>
      <Text style={[styles.result]}>
        1,500.00
      </Text>

      <View style={[styles.row]}>
        <Button
          text="C"
          color="light-gray"
        />
        <Button
          text="±"
          color="light-gray"
        />
        <Button
          text="%"
          color="light-gray"
        />
        <Button
          text="÷"
          color="orange"
        />
      </View>

      <View style={[styles.row]}>
        <Button
          text="7"
        />
        <Button
          text="8"
        />
        <Button
          text="9"
        />
        <Button
          text="x"
          color="orange"
        />
      </View>

      <View style={[styles.row]}>
        <Button
          text="4"
        />
        <Button
          text="5"
        />
        <Button
          text="6"
        />
        <Button
          text="-"
          color="orange"
        />
      </View>

      <View style={[styles.row]}>
        <Button
          text="1"
        />
        <Button
          text="2"
        />
        <Button
          text="3"
        />
        <Button
          text="+"
          color="orange"
        />
      </View>

      <View style={[styles.row]}>
        <Button
          text="0"
          bigButton
        />
        <Button
          text="."
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
