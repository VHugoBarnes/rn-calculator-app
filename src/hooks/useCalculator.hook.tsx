const useCalculator = ({ currentNumber, setCurrentNumber, previousNumber, setPreviousNumber, operand, setOperand, INITIAL_NUMBER }: any) => {
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

  return {
    clear,
    buildNumber,
    applyMinusPlus,
    del,
    applyOperand,
    calculate,
  };
};

export default useCalculator;
