import React from 'react'
import { SectionWrapper, SectionHeading, DescriptionP, SectionRow, SectionCol, NarrowDescriptionP} from './HomeElements';
import DocumentIcon from '../../icons/DocumentIcon'
import SpellcheckIcon from '../../icons/SpellcheckIcon'
import ConversationIcon from '../../icons/ConversationIcon'
import LocationIcon from '../../icons/LocationIcon'
import { useTranslation } from 'react-i18next';

import { LangContext } from "../../../App";
import { useContext } from "react";



function SectionThree() {

    const {currentLang, setCurrentLang } = useContext(LangContext);

    const {t} = useTranslation();



    return (
        <SectionWrapper className='section-wrapper' backgroundColor="#001e3c"  flexDirection="column"  alignItems="flex-start" >
            <SectionHeading className='section-heading' lang={currentLang} color="#44BCFF" fontSize="2rem" >{t('home_section_3_heading_1')}</SectionHeading>
            <SectionHeading className='section-heading' lang={currentLang} color="white" style={{width:"50%"}}>{t('home_section_3_heading_2')}</SectionHeading>
            <DescriptionP className = "description-paragraph" color="#c4c4c4" style={{width:"60%"}}>{t('home_section_3_descr')}</DescriptionP>

            <SectionRow className='section-row'  gap="4rem">

                <SectionCol  className='section-col' style={{width:"50%", borderLeft:"1px dashed #192E4D"}} >
                    <ConversationIcon/>
                    <NarrowDescriptionP color="#c4c4c4" >{t('home_section_3_comp1_descr')}</NarrowDescriptionP>
                </SectionCol>

                <SectionCol className='section-col' style={{width:"50%", borderLeft:"1px dashed #192E4D"}} >
                    <LocationIcon/>
                    <NarrowDescriptionP color="#c4c4c4" >{t('home_section_3_comp2_descr')}</NarrowDescriptionP>
                </SectionCol>
            </SectionRow>

            <SectionRow className='section-row' gap="4rem">
                <SectionCol className='section-col' style={{width:"50%", borderLeft:"1px dashed #192E4D"}}>
                    <SpellcheckIcon/>
                    <NarrowDescriptionP color="#c4c4c4" >{t('home_section_3_comp3_descr')}</NarrowDescriptionP>
                </SectionCol>

                <SectionCol className='section-col' style={{width:"50%", borderLeft:"1px dashed #192E4D"}}>
                    <DocumentIcon/>
                    <NarrowDescriptionP color="#c4c4c4" >{t('home_section_3_comp4_descr')}</NarrowDescriptionP>
                </SectionCol>
            </SectionRow>
        </SectionWrapper>
    )
}

export default SectionThree