import React, { useState } from 'react';


const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [storedValue, setStoredValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [shouldClear, setShouldClear] = useState(false);

  const handleNumberClick = (number) => {
    if (shouldClear) {
      setDisplayValue(String(number));
      setShouldClear(false);
    } else {
      setDisplayValue((prevValue) => (prevValue === '0' ? String(number) : prevValue + number));
    }
  };

  const handleOperatorClick = (operator) => {
    if (storedValue === null) {
      setStoredValue(displayValue);
      setOperator(operator);
      setShouldClear(true);
    } else {
      performCalculation();
      setOperator(operator);
      setShouldClear(true);
    }
  };

  const performCalculation = () => {
    const prevValue = parseFloat(storedValue);
    const currValue = parseFloat(displayValue);

    switch (operator) {
      case '+':
        setDisplayValue((prevValue + currValue).toString());
        break;
      case '-':
        setDisplayValue((prevValue - currValue).toString());
        break;
      case '*':
        setDisplayValue((prevValue * currValue).toString());
        break;
      case '/':
        setDisplayValue((prevValue / currValue).toString());
        break;
      default:
        break;
    }

    setStoredValue(null);
    setOperator(null);
  };

  const handleEqualsClick = () => {
    if (storedValue !== null) {
      performCalculation();
      setStoredValue(null);
      setOperator(null);
      setShouldClear(true);
    }
  };

  const handleClearAllClick = () => {
    setDisplayValue('0');
    setStoredValue(null);
    setOperator(null);
    setShouldClear(false);
  };

  return (
    <div className="Calculator">
      <div className="display">{displayValue}</div>
      <div className="btn-row">
        <button id="btn-1" onClick={() => handleNumberClick(1)}>1</button>
        <button id="btn-2" onClick={() => handleNumberClick(2)}>2</button>
        <button id="btn-3" onClick={() => handleNumberClick(3)}>3</button>
        <button id="btn-4" onClick={() => handleNumberClick(4)}>4</button>
        <button id="btn-5" onClick={() => handleNumberClick(5)}>5</button>
        <button id="btn-6" onClick={() => handleNumberClick(6)}>6</button>
        <button id="btn-7" onClick={() => handleNumberClick(7)}>7</button>
        <button id="btn-8" onClick={() => handleNumberClick(8)}>8</button>
        <button id="btn-9" onClick={() => handleNumberClick(9)}>9</button>
        <button id="btn-0" onClick={() => handleNumberClick(0)}>0</button>
        <button id="plus" onClick={() => handleOperatorClick('+')}>+</button>
        <button id="btn--" onClick={() => handleOperatorClick('-')}>-</button>
        <button id="btn-div" onClick={() => handleOperatorClick('/')}>/</button>
        <button id="btn-mul" onClick={() => handleOperatorClick('*')}>*</button>
        <button id="equal" onClick={handleEqualsClick}>=</button>
        <button id="btn-clear" onClick={handleClearAllClick}>C</button>
      </div>
      
    </div>
  );
};

export default Calculator;
