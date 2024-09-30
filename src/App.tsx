import { useCallback, useEffect, useState } from 'react';
import { CalculatorCard } from './CalculatorCard/CalculatorCard';
import { AppWrapper, CardWrapper, Input, InputWrapper, Label } from './App.styled';
import { FunctionData } from './types/types';
import { initialFunctions, calculatorOrder } from './constants/constants';
import { evaluateFunction, validateEquation } from './util/helper';

function App() {
  const [initialInput, setInitialInput] = useState<number>(0);
  const [functions, setFunctions] = useState<FunctionData[]>(initialFunctions);
  const [output, setOutput] = useState<number>(0);

  const calculateOutput = useCallback(() => {
    let result = initialInput;
    for (const id of calculatorOrder) {
      const func = functions.find(f => f.id === id);
      if (func && validateEquation(func.equation)) {
        result = evaluateFunction(result, func.equation);
      }
    }
    return result;
  }, [initialInput, functions]);

  useEffect(() => {
    const result = calculateOutput();
    setOutput(result);
  }, [calculateOutput]);

  const handleEquationChange = useCallback((id: number, newEquation: string) => {
      setFunctions(functions.map(funtion => 
        funtion.id === id ? { ...funtion, equation: newEquation } : funtion
      ));
  }, [functions]);

  const handleInitialValueChange = (value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setInitialInput(numValue);
    }
  };

  return (
    <AppWrapper>
        <InputWrapper color="#e29a2d">
          <Label>{'Initial value of x'}</Label>
          <Input
            onChange={(e) => handleInitialValueChange(e.target.value)}
          />
        </InputWrapper>
          <CardWrapper>
            {initialFunctions.map((func) => {
              const cardFunction = functions.find(f => f.id === func.id);
              if (!cardFunction)  return null;
              return (
                <CalculatorCard
                  key={cardFunction.id} 
                  handleEquationChange={handleEquationChange} 
                  cardFunction={cardFunction} 
                />);
            })}
          </CardWrapper>
        <InputWrapper color="#4caf79">
          <Label>{'Final Output y'}</Label>
          <Input value={output} />
      </InputWrapper>
    </AppWrapper>
  );
}

export default App;
