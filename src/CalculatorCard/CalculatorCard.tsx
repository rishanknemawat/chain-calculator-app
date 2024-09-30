import { useCallback, useState } from 'react';
import { CardProps } from '../types/types';
import {
    CardWrapper,
    Equation,
    Heading,
    Label,
    NextFunction,
    StyledInput,
    Error,
    StyledSelect,
    HeadingLabel,
    RadioButtonWrapper,
    RadioButton,
    Circle
} from './CalculatorCard.styled';
import { validateEquation } from '../util/helper';
import { ReactComponent as DragIcon } from '../assets/DragIcon.svg';

export const CalculatorCard = ({ cardFunction, handleEquationChange }: CardProps) => {
    const [error, setError] = useState<boolean>(false);

    const handleChange = useCallback((value: string) => {
        const isValidEquation = validateEquation(value);
        setError(!isValidEquation);
        handleEquationChange(cardFunction.id, value);
    }, [cardFunction.id, handleEquationChange]);

    return (
        <CardWrapper>
            <Heading>
                <DragIcon />
                <HeadingLabel>{`Function: ${cardFunction.id}`}</HeadingLabel>
            </Heading>
            <Equation>
                <Label>{'Equation'}</Label>
                <StyledInput 
                    value={cardFunction.equation} 
                    onChange={(e) => handleChange(e.target.value)}
                />
                {
                    error && 
                    <Error>{'Invalid Equation. Current input will be directly passed to next function.'}</Error>
                }
            </Equation>
            <NextFunction>
                <Label>{'Next Function'}</Label>
                <StyledSelect disabled>
                    <option value="" selected>
                        {cardFunction.nextFunctionId ? `Function: ${cardFunction.nextFunctionId}` : '-'}
                    </option>
                </StyledSelect>
            </NextFunction>
            <RadioButtonWrapper>
                <RadioButton>
                    <Circle />
                    <label>{'input'}</label>
                </RadioButton>
                <RadioButton>
                    <label>{'output'}</label>
                    <Circle />
                </RadioButton>
            </RadioButtonWrapper>
        </CardWrapper>
    );
}