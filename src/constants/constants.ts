import { FunctionData } from "../types/types";

export const initialFunctions: FunctionData[] = [
    { id: 1, equation: '', nextFunctionId: 2 },
    { id: 2, equation: '', nextFunctionId: 4 },
    { id: 3, equation: '', nextFunctionId: null },
    { id: 4, equation: '', nextFunctionId: 5 },
    { id: 5, equation: '', nextFunctionId: 3 },
  ]
  
export const calculatorOrder = [1, 2, 4, 5, 3];