import styled from "styled-components";

// export const is named export, this can be imported as { Name }
export const BackDiv = styled.div`
    background-color: #002024;
    height: 30rem;
    width: 100vw;
    border-bottom-left-radius: 5rem;
    border-bottom-right-radius: 5rem;
`

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    padding: 1.5rem 0rem;
`

export const TitleLogo = styled.div`
    width: 15rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const Name = styled.h1`
    margin: 0;
    color: white;
    /* font-family: 'Ubuntu'; */
`
export const Slogan = styled.p`
    font-size: 1rem;
    color: #8d96eb;
    font-family: 'Jura';
    font-weight: bold;

`

export const NavOptions = styled.ul`
    color: white;
    list-style: none;
    display: flex;
    margin: 0 8rem;
`

export const Option = styled.li`
    margin: 0 3rem;
    font-weight: bold;
    font-family: "Open Sans","Helvetica","Arial";
    :hover{
        cursor: pointer;
    }
`

export const LoginButton = styled.a`
    color: white;
    text-decoration: none;
    :hover{
        cursor: pointer;
    }
`
export const MainSection = styled.div`
    color: white;

`
export const Row = styled.div`

`

export const LeftSection = styled.div`
    padding: 18rem;


`
export const RightSection = styled.div`

`

export const NewTradeButton = styled.button`
    border: none;
    padding: 0.5rem 2.4rem;
    font-size: 1.2rem;
    border-radius: 0.1rem;
    background-color: #1cff95;
    font-weight: bold;

`

export const ChartImage = styled.img`
    width: 40rem;
`