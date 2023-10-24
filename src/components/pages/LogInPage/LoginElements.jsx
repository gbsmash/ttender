import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";




export const PageWrapper = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    width:100%;
    min-height:100%;
    height:auto;
    background: rgb(60,82,141);
    background: linear-gradient(72deg, rgba(60,82,141,1) 5%, rgba(52,99,210,1) 15%, rgba(52,96,201,1) 24%, rgba(52,80,147,1) 37%, rgba(52,75,134,1) 42%, rgba(55,77,134,1) 55%, rgba(53,98,205,1) 69%, rgba(60,104,209,1) 74%, rgba(47,68,122,1) 93%);
`



export const CenteredPageWrapper = styled.div`
  width: 100%;
  height:100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 1rem;
`;



export const CentralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  background: white;
  border-radius: 17px;
  padding: 2rem 4rem;
  width:40%;
  gap: ${props => props.gap || "2rem"};
  min-height:fit-content;
  min-width:fit-content;


  @media only screen and (max-width:400px){
    padding: 1rem 2rem;
  }
`;


export const AsideDiv = styled.div`

    display:flex;
    color: #FFFFFF;
`

export const AsideLink = styled(Link)`
    font-family: ${(props) => props.lang === "ru" ? "Roboto" : "Poppins"};
    font-size: 20px;
    color: #FFFFFF;
`

export const Heading = styled.h1`
  font-family: ${(props) => props.lang === "ru" ? "Roboto" : "Poppins"};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #3160d0;
  text-align:center;
`;


export const LoginRow = styled.div`
  display: flex;
  width:100%;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};


  @media only screen and (max-width:460px){
    flex-direction:column;
    gap:1rem;
  }
`;


export const LoginCol = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems || "center"};
  gap: ${(props) => props.gap};
  white-space: nowrap;
`;

export const BlueSpan = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: ${props => props.fontSize || "1rem"};
  color: #3160d0;
  padding-left:0.2rem;
`;

export const GraySpan = styled.span`
    font-family: "Roboto";
    font-size: 14px;
    color: #bebdbd;
    text-align:center;
`


export const BlueButton = styled.button`
    background: #3160D0;
    border-radius: 5px;
    width:100%;
    color:white;
    font-family: ${(props) => props.lang === "ru" ? "Roboto" : "Poppins"};
    font-size: 1rem;
    border:none;
    padding: 0.6rem 3rem;
`;


export const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
    gap:2rem;

    fieldset{
      border-color: #3160D0;
    }

    .MuiSvgIcon-root{
        color:gray;
    }

    .Mui-focused .MuiSvgIcon-root{
        color:#3160D0;
    }
`
