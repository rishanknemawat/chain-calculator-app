export interface FunctionData {
  id: number;
  equation: string;
  nextFunctionId: number | null;
}

export type CardProps = {
  cardFunction: FunctionData;
  handleEquationChange: (id: number, newEquation: string) => void;
}