import styled from "styled-components";

export const CardWrapper = styled.div`
    position: relative;
    width: 195px;
    min-height: 211px;
    box-shadow: 0 0 6px 0 #0000000D;
    border: 1px solid #dfdfdf;
    border-radius: 15px;
    padding: 20px;
    margin: 0;
`;
export const Heading = styled.div`
    display: flex;
    flex-direction: row;
    line-height: 16.94px;
    text-align: left;
    color: #a5a5a5;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 20px;
    svg {
        align-self: center;
    }
`;
export const HeadingLabel = styled.div`
    margin-left: 7px;
`;
export const Equation =  styled.div`
    color: #252525;
    margin-bottom: 13px;
`;
export const NextFunction =  styled.div`
`;
export const Label =  styled.div`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
`;
export const Error =  styled.p`
    font-size: 12px;
    color: red;
    margin: 2px 0 0 0;
`;
export const StyledInput =  styled.input`
    width: calc(100% - 8px);
    height: 33px;
    border: 1px solid #d3d3d3;
    border-radius: 8px;
    font-size: 12px;
    padding: 0 0 0 8px;
`;

export const StyledSelect =  styled.select`
    width: 100%;
    height: 33px;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    color: rgba(37, 37, 37, 0.3);
    background-color: #f5f5f5;
    font-size: 12px;
    font-weight: 500;
    padding: 0 8px;
`;

export const RadioButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
`;
export const RadioButton = styled.div`
    display: flex;
    gap: 4px;
    label {
        color: #585757;
    }
`;

export const Circle = styled.span`
    display: flex;
    width: 15px;
    height: 15px;
    border: 2px solid #dbdbdb;
    border-radius: 9999px;
`;
