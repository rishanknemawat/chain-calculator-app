import styled from "styled-components";

type InputWrapperProps = {
    color: string;
}

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 75px;
`;
export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 107px;
    width: 960px;
`;
export const InputWrapper = styled.div<InputWrapperProps>`
    display: flex;
    flex-direction: column;
    margin: 167px 9px;
    > div {
        background-color: ${(props) => props.color};
    }
    > input {
        border-color: ${(props) => props.color};
    }
`;
export const Label = styled.div`
    width: 118px;
    line-height: 14.52px;
    font-weight: 600;
    border-radius: 14px;
    color: #ffffff;
    margin: 4px 0 10px 0;
    padding: 4px 12px;
`;
export const Input = styled.input`
    width: 118px;
    height: 46px;
    align-self: center;
    font-size: 18px;
    font-weight: 700;
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 0 0 0 18px;
`;
export const Error = styled.p`
    font-size: 12px;
    color: red;
    margin: 2px 0 0 0;
`;
