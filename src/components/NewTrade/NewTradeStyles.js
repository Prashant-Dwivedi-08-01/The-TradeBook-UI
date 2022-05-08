import styled  from "styled-components"

export const GreenButton = styled.button`
    border: none;
    padding: 1.5% 5.5%;
    font-size: 1.2rem;
    border-radius: 0.1rem;
    background-color: ${props => (props.isBuy ? '#1cff95' : '#f14e4e')};
    color: ${props => (props.isBuy ? 'black' : 'white')};
    /* background-color: #1cff95; */
    font-weight: bold;
    width: 34%;

`

export const CheckBoxInput = styled.input`
    background-color: ${props => (props.isBuy ? '#1cff95' : '#f14e4e')};
`

export const CheckBoxLabel = styled.label`

`

export const CustomModalHeader = styled.div`
    border: none;
    border-top: ${props => props.isBuy ? "12px solid #1cff95" : "12px solid #f14e4e"};
`