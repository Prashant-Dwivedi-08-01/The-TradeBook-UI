import styled from "styled-components"

export const LatestTradesDiv = styled.div`
    margin-top: 5%;
`
export const Heading = styled.h4`
    text-align: center;
`

export const TableDiv = styled.div`
    display: flex;
    justify-content: center;
`

export const Table = styled.table`
    width: 70%;`

export const TableRow = styled.tr`
    background-color: #f7f8f8;
    border: 0.3rem solid white;
    border-radius: 2%;
`

export const Th = styled.th`
   padding: 14px;
`

export const Td = styled.td`
   padding: 14px;
`

export const CheckBox = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const ScriptLogo = styled.img`
    width: 23%;
    border-radius: 50%;
    margin-right: 0.5rem;
`

export const ProfitButton = styled.span`
    background-color: #cff6dd;
    padding: 3px 10px;
    color: #1fa750;
    display: flex;
    align-items: center;
    width: 60%;
    
`
export const LossButton = styled.span`
    padding: 3px 10px;
    background-color: #f6cfcf;
    color: red;
    display: flex;
    align-items: center;
    width: 60%;
`
export const PlusIcon = styled.span`
    color: white;
    background-color: #23bd5a;
    font-weight: bold;
    border-radius: 50%;
    padding: 0px 9px;
    margin-right: 0.3rem;
    display: inline-block;
    height: 1rem;
    width: 1rem;

    
`
export const MinusIcon = styled.span`
    color: white;
    background-color: red;
    font-weight: bold;
    border-radius: 50%;
    padding: 0px 9px;
    margin-right: 0.3rem;
    display: inline-block;
    height: 1rem;
    width: 1rem;

`

export const Details = styled.a`
    cursor: pointer;
`