import { styled } from "styled-components";
import { Form, Field } from "formik";

export const FormEl = styled(Form)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const FormField = styled(Field)`
    width: 140px;
    padding: 6px 12px;
    border: 1px solid #4F2EE8;
    border-radius: 12px;
`

export const FormBtn = styled.button`
    padding: 6px 12px;
    border: 1px solid #EAC645;
    border-radius: 12px;
    background: #EAC645;
    font-size: 16px;

    &:hover {
        border: 1px solid #4F2EE8;
        background: #4F2EE8;
        color: white;
    }
`