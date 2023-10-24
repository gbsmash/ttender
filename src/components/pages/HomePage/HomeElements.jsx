import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import TenderIcon from "../../icons/TenderIcon";
import ArrowIcon from "../../icons/ArrowIcon"





export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems || "center"};
  width: 100%;
  height: 100%;
  gap: 4rem;
  padding-left: 7rem;
  padding-right: 7rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin-bottom: 6rem;
  background-color: ${(props) => props.backgroundColor || "white"};

  @media only screen and (max-width: 800px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (max-width: 430px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

export const SectionOneWrapper = styled(SectionWrapper)`
  @media only screen and (max-width:900px){
    flex-direction:column;
  }
`


export const SectionCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;


export const SectionRow = styled.div`
  display: flex;
  gap: ${(props) => props.gap};
  padding: 1rem;
  width:100%;
`;



export const Heading = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => props.fontSize || "1rem"};
  line-height: 19px;
  color: ${(props) => props.color || "black"};
`;


export const SectionHeading = styled.p`

  font-family: ${(props) => props.lang === "ru" ? "Roboto" : "Plus Jakarta Sans"};
  font-style: normal;
  font-weight: 800;
  font-size: ${(props) => props.fontSize || "36px"};
  line-height: 45px;
  color: ${(props) => props.color || "black"};
`;


export const DescriptionP = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => props.fontSize || "1rem"};
  line-height: 19px;
  color: ${(props) => props.color || "black"};

`;


export const NarrowDescriptionP = styled(DescriptionP)`
  width: 60%;
  padding-left: 0.5rem;
  border-left: 2px solid #44bcff;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }

`;





export const Tender = styled.p`
  display:inline-block;
  font-size: inherit;
  background: linear-gradient(
    90deg,
    rgb(127, 209, 253) 0%,
    rgb(127, 209, 253) 50%,
    rgba(49, 96, 208, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  width:fit-content;
  margin:0;

  ::first-letter{
    color:#223567;
  }
`


const Intro = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={className}>
      <Tender className="brandbr">ttender</Tender>
      <span>{t("home_section_1_intro")}</span>
    </div>
  );
};

export const StyledIntro = styled(Intro)`
  font-family: ${(props) => props.lang === "ru" ? "Roboto" : "Plus Jakarta Sans"};
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  color: black;
  display: inline-block;


  @media only screen and (max-width:500px){
    font-size:3rem;
  }

  @media only screen and (max-width:370px){
    font-size:2rem;
  }

`;


export const GradientButton = styled.button`
  border: none;
  background: linear-gradient(93.72deg, #44bcff -26.06%, #3160d0 100%);
  border-radius: 7px;
  color: white;
  font-family: "Roboto";
  font-style: normal;
  font-size: 16px;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: fit-content;
`;


export const GradientSpan = styled.span`
  background: linear-gradient(
    90deg,
    rgb(127, 209, 253) 0%,
    rgb(127, 209, 253) 10%,
    rgba(49, 96, 208, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  width: fit-content;
`;


export const SectionOneCol = styled(SectionCol)`
  justify-content: flex-start;
  flex: 50%;
`;

export const SectionOneRow = styled.div`
  flex-direction:row;
  width:100%:
  height:100%;
`;


export const SectionFourButton = styled.button`
  background-color:  ${props => props.backgroundColor};
  color:${props => props.color};
  border:none;
  border-radius: 19px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width:fit-content;
`

export const TransparentButton = styled(SectionFourButton)`
  background-color: transparent;
  box-shadow: 0px 0px 8px #3160d0;
`

export const Arrow = styled(ArrowIcon)`
  vertical-align:0;
  margin-left:0.7rem;
`
