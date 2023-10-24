import styled from "styled-components";


export const PageWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
`

export const SectionWrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding: 3rem 4rem;
    gap:1rem;
    
    ::after{
        content: '';
        width: 100%;
        height: 2px;
        background-color: #605C5C4F;
        margin-top:2rem;
    }
`

export const PageTitle = styled.h1`
    font-family: 'Roboto';
    font-size: 26px;
    padding-left:2rem;
`

export const CategoriesContainer = styled.div`

    width:100%;
  
    --total-gap-width: 2rem;
    --grid-item--max-width: calc((100% - 2rem) / 3);
  
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(10rem, var(--grid-item--max-width)), 1fr));
    grid-gap: 1rem;
`

export const Category = styled.div`
    display:flex;
    justify-content:space-between;
    gap:1rem;
    align-items:center;
    background: #FFFFFF;
    border: 1px solid transparent;
    border-radius: 11px;
    padding: 0.5rem 2rem;


    font-family: 'Roboto';
    font-size: 16px;

    :hover{
        border: 1px solid #3160D0;
    }
`


export const TenderBox = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr; 
    grid-auto-flow:column;
    gap: 0px 0px; 
    grid-template-areas: 
    "Tender Industry Price"
    "Title Industry-title Deadline"
    "Date Industry-title Location"; 

    width:100%;

    border: none;
    box-shadow: 0px 0px 5px #3160d0;
    border-radius: 5px;
    padding: 1.5rem 2.5rem;

    @media only screen and (max-width:820px){
        grid-template-columns: 1fr;
    }

`

export const TenderBoxCol = styled.div`
    display:flex;
    flex-direction:column;
    gap:${props => props.gap};
    justify-content:${props => props.justifyContent};
`

export const TenderDetails = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: ${props=>props.fontSize || "1rem"};
    color:${props=>props.color};
`