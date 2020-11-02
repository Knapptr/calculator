import React, { useState, useEffect } from "react";
import Layout from "./components/layout";
import CalculatorBody from "./components/CalculatorBody";
import Screen from "./components/screen";
import NumberButtons from "./components/numberButtons";
import Button from "./components/button";
import PowerButtons from "./components/PowerButtons";
import MemoryButtons from "./components/MemoryButtons";
import calculate from "./logic/calculate";

// Make number array to map from
const numbers = [];
for (let i = 1; i <= 9; i++) {
  numbers.push(i);
}
const createNumberCol = (array, rows, startIndex, callback = null) => {
  let arraySection = array.slice(startIndex, startIndex + rows);
  return (
    <div className="col">
      {arraySection.map((el) => (
        <Button
          contents={el}
          data={el}
          clickHandler={callback}
          color={"black"}
        />
      ))}
    </div>
  );
};

const App = () => {
  //state needed:
  // current display --
  // operand --updates after clicking operand. pushes current display to operand
  // memory -- utilized by memory buttons
  // current operation -- select operation
  ////////////////////////////////////////STATE
  const [display, updateDisplay] = useState(0);
  const [clearDisplayOnNextDigit, updateClearDisplayOnNextDigit] = useState(
    false
  );
  const [operand, updateOperand] = useState(0);
  const [memory, updateMemory] = useState(0);
  const [operationState, updateOperation] = useState(null);
  const [powerState, updatePowerState] = useState(true);
  /////////////////////////////////////////////////////////

  const enterDigit = (digit) => {
    if (clearDisplayOnNextDigit) {
      updateDisplay(digit);
      updateClearDisplayOnNextDigit(false);
    } else {
      if (display.toString().length < 10) {
        let newValue = parseFloat(display.toString().concat(digit));
        if (digit === "." && newValue === 0) {
          newValue = "0.";
        }
        updateDisplay(newValue);
      }
    }
  };
  ///////////////////////// percentage functions
  const percentValue = () => {
    if (operationState) {
      const value = calculate(operand, "*", display / 100);
      updateOperand(calculate(operand, operationState, value));
      updateOperation(null);
    }
  };

  const enterOperation = (operation) => {
    updateOperand(display);
    if (operationState) {
      excecute(operationState);
    }
    updateClearDisplayOnNextDigit(true);
    updateOperation(operation);
  };

  const excecute = (operation) => {
    let value = calculate(operand, operation, display);
    updateOperand(value);
    return value;
  };
  ///////////////////////////////////I had to re-run calculate here because I can't think of a good way
  ///////////////////////////////////to use the useEffect hook in order to get a value calculated by excecute
  /////////////////////////////////// There is PROBABLY a better way to do this :(
  const displayResult = () => {
    if (operationState !== null) {
      excecute(operationState);
      updateDisplay(calculate(operand, operationState, display));
      updateOperation(null);
    } else {
      updateDisplay(operand);
    }
    updateClearDisplayOnNextDigit(true);
  };
  //////////////////////////////////pos negative switch
  const toggleSign = () => {
    updateDisplay(display - display * 2);
  };
  ///////////////////////////////////////////// Memory functions
  const changeMemory = (operation) => {
    updateClearDisplayOnNextDigit(true);
    updateMemory(calculate(memory, operation, display));
  };
  const recallMemory = () => {
    updateDisplay(memory);
  };
  const clearMemory = () => {
    updateMemory(0);
  };
  ////////////////////////////////////////Clear Functions
  const clear = () => {
    updateDisplay(0);
    updateOperation(null);
    updateOperand(0);
  };
  const powerButton = (state) => {
    updatePowerState(state);
  };
  useEffect(() => {
    clear();
  }, [powerState]);

  return (
    <Layout>
      <CalculatorBody>
        <Screen power={powerState} screenContent={display} />
        <PowerButtons clickHandler={powerButton} />
        <div className="d-flex flex-col ">
          <MemoryButtons
            recallMemory={recallMemory}
            clearMemory={clearMemory}
            changeMemory={changeMemory}
            toggleSign={toggleSign}
          />
          <div className="d-flex">
            {/* Middle Section */}

            <div className="col">
              <Button
                color="brown"
                contents="Δ%"
                data="^%"
                clickHandler={enterOperation}
              />
              <Button
                color="brown"
                contents="√"
                data="sqrt"
                clickHandler={enterOperation}
              />
              <Button color="brown" contents="%" clickHandler={percentValue} />
            </div>

            <div className="d-flex">
              {createNumberCol(numbers, 3, 0, enterDigit)}
              {createNumberCol(numbers, 3, 3, enterDigit)}
              {createNumberCol(numbers, 3, 6, enterDigit)}
            </div>

            <div className="col">
              <Button
                color="brown"
                contents="÷"
                data="/"
                clickHandler={enterOperation}
              />
              <Button
                color="brown"
                contents="×"
                data="*"
                clickHandler={enterOperation}
              />
              <Button
                color="brown"
                contents="-"
                data="-"
                clickHandler={enterOperation}
              />
            </div>
          </div>

          <div id="bottomRow d-flex">
            <Button color="brown" contents="C" clickHandler={clear} />
            <Button
              color="black"
              contents="0"
              data="0"
              clickHandler={enterDigit}
            />
            <Button
              color="brown"
              contents="."
              data="."
              clickHandler={enterDigit}
            />
            <Button
              color="yellow"
              contents="="
              data="="
              clickHandler={() => {
                displayResult();
              }}
            />
            <Button
              color="brown"
              contents="+"
              data="+"
              clickHandler={enterOperation}
            />
          </div>
        </div>
      </CalculatorBody>
    </Layout>
  );
};

export default App;
