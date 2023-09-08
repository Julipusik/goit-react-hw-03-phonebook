import styled from "styled-components";

export const ContactItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 4px 0;

    p {
        margin: 0;
        font-size: 18px;
    }

`

export const DeleteBtn = styled.button`
    font-size: 16px;
    padding: 4px 6px;
    border-radius: 12px;
    border: 1px solid #EAC645;
    background: white;
    color: #222;

    &:hover {
        background: #EAC645;
        color: white;
    }
`