import React from "react";
import styled from "styled-components";



export const SubHeading = styled.h1`
    font-family: 'Roboto';
    font-size: ${props => props.fontSize || "14px"};
    color: #BEBDBD;
    text-align: center;
`


export const GridForm = styled.form`
    display:grid;
    grid-template-columns:minmax(0,1fr) minmax(0,1fr);
    grid-template-rows:1fr 1fr 1fr;
    column-gap:1rem;
    row-gap:2rem;


    fieldset{
        border-color: #3160D0;
    }

    .MuiSvgIcon-root{
        color:gray;
    }

    .Mui-focused .MuiSvgIcon-root{
        color:#3160D0;
    }


    @media only screen and (max-width:612px){
        grid-template-columns: minmax(0, 1fr);
        
    }

`

export const BlueButton = styled.button`
    background: #3160D0;
    border-radius: 5px;
    width:100%;
    color:white;
    font-family: ${(props) => props.lang === "ru" ? "Roboto" : "Poppins"};
    font-size: 1rem;
    border:none;
    padding: 0.6rem 2rem;

    @media only screen and (max-width:675px){
        font-size:0.8rem;
    }

`;


export const ErrorP = styled.p`
    font-family: 'Roboto';
    font-size: 14px;
    color:#d32f2f;
`