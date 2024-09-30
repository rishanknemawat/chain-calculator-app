export const validateEquation = (equation: string): boolean => {

  if(!equation) return true;
  const validExpression = /^([0-9]*(x(\^[0-9]+)?)?|[0-9]+)([+\-*/]([0-9]*(x(\^[0-9]+)?)?|[0-9]+))*$/;
  if (!validExpression.test(equation)) {
      return false;
  }
  return true;
  };
  
export const evaluateFunction = (x: number, equation: string) => {
    if (!equation)
        return x;

    const formattedEquation = equation.replace(/([0-9]+)x/g, '$1*' + x);
    const finalEquation = formattedEquation.replace(/\^/g, '**');
    try {
        return eval(finalEquation);
    } catch (e) {
        console.error('Error in evaluating the equation');
    }
};
