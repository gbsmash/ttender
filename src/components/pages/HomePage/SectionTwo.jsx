import React from 'react'
import {SectionWrapper, SectionHeading, SectionRow,SectionCol, Heading, DescriptionP, GradientSpan} from "./HomeElements";
import { useTranslation } from "react-i18next";

import DatabaseIcon from "../../icons/DatabseIcon";
import EmailIcon from "../../icons/EmailIcon";
import SupportIcon from "../../icons/SupportIcon";

import { LangContext } from "../../../App";
import { useContext } from "react";


function SectionTwo() {

    const {currentLang, setCurrentLang } = useContext(LangContext);

    const {t} = useTranslation();


    
  return (
    <SectionWrapper className = "section-wrapper" flexDirection="column" alignItems="flex-start">
        <SectionHeading className = "section-heading" lang={currentLang}>{t('home_section_2_intro')}<GradientSpan>{t('ready')}</GradientSpan></SectionHeading>
        <SectionRow className = "section-two-row"  gap="3rem"  style={{border: "1px dashed #E7E7E7"}}>
            <SectionCol className = "section-two-col" style={{flex:1}}>
                <DatabaseIcon className="database-icon"/>
                <Heading className = "comp-heading" style={{borderLeft:"2px solid #3160D0", paddingLeft:"1rem"}}> {t('home_section_2_comp1')}</Heading>
                <DescriptionP className = "description-paragraph" color="#605C5C">{t('home_section_2_comp1_descr')}</DescriptionP>
            </SectionCol>

            <SectionCol className = "section-two-col" style={{flex:1}}>
                <EmailIcon className="email-icon"/>
                <Heading className = "comp-heading" style={{borderLeft:"2px solid #3160D0", paddingLeft:"1rem"}}> {t('home_section_2_comp2')}</Heading>
                <DescriptionP className = "description-paragraph" color="#605C5C">{t('home_section_2_comp2_descr')}</DescriptionP>               
            </SectionCol>

            <SectionCol className = "section-two-col" style={{flex:1}}>
                <SupportIcon className="support-icon"/>
                <Heading className = "comp-heading" style={{borderLeft:"2px solid #3160D0", paddingLeft:"1rem"}}> {t('home_section_2_comp3')}</Heading>
                <DescriptionP className = "description-paragraph" color="#605C5C">{t('home_section_2_comp3_descr')}</DescriptionP>   
            </SectionCol>
        </SectionRow>
    </SectionWrapper>
  )
}

export default SectionTwo