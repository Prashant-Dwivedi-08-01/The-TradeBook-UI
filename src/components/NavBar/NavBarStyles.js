import styled from "styled-components";

// export const is named export, this can be imported as { Name }
export const BackDiv = styled.div`
    background-color: #002024;
    height: 30rem;
    width: 100vw;
    /* border-bottom-left-radius: 5rem;
    border-bottom-right-radius: 5rem; */
`

export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    padding: 1.5rem 0rem;
    flex-wrap: wrap;
`

export const TitleLogo = styled.div`
    width: 17rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;
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
    margin: 0 6rem;
`

export const Option = styled.li`
    margin: 0 3rem;
    font-weight: bold;
    font-family: "Open Sans","Helvetica","Arial";
    :hover{
        cursor: pointer;
    }
`

export const NavLink = styled.a`
    text-decoration: none;
    color: white;
    :hover{
        cursor: pointer;
        color: #8d96eb;
        text-decoration: underline;
    }
`

export const LoginButton = styled.a`
    color: white;
    display: flex;
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
    /* padding: 10rem; */
    display: flex;
    flex-direction: column;
    padding: 5% 7%;
    
`
export const RightSection = styled.div`

`

export const MainSectionText = styled.p`
    color: white;
    font-size: 1.23rem;
`

export const GreenButton = styled.button`
    border: none;
    padding: 1.5% 5.5%;
    font-size: 1.2rem;
    border-radius: 0.1rem;
    background-color: #1cff95;
    font-weight: bold;
    width: 34%;

`

export const ChartImage = styled.img`
    width: 90%;
`