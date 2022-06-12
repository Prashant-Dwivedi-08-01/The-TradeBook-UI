import styled from "styled-components";

// export const is named export, this can be imported as { Name }
export const ImgContainer = styled.div`
    border-radius: 2rem;
    box-shadow: 2px 3px 30px 0px;

`
export const InfoTitle = styled.h2`
    text-align: center;
    margin-top: 2%;
    font-weight: bold;

`

export const ChartImage = styled.img`
    width: 100%;
    border-radius: 2rem;
`
export const SeeFullImage = styled.a`
    text-align: center;
    display: block;
    margin-top: 0.75rem;
    color: #7a7a7a;
    text-decoration: none;
    
`

export const Box = styled.div`
  width: 100%;
  margin: 1rem auto;
  border: 4px solid #00bfb6;
  padding: 20px;
  /* text-align: center; */
  font-weight: 900;
  color: #00bfb6;
  font-family: arial;
  position: relative;
  border-radius: 10px;
    :before{
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid transparent;
        border-bottom: 10px solid #00bfb6;
        left: 1%;
        top: -23px;
    }
    :after{
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid transparent;
        border-bottom: 10px solid #fff;
        left: 1%;
        top: -18px;
    }
`