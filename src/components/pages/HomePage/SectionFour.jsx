import React from 'react'
import { SectionWrapper, SectionHeading, DescriptionP, Arrow, SectionFourButton, SectionRow, TransparentButton} from './HomeElements';
import { useTranslation } from 'react-i18next';

import { LangContext } from "../../../App";
import { useContext } from "react";



function SectionFour() {

    const {currentLang, setCurrentLang } = useContext(LangContext);

    const {t} = useTranslation();

    
    return (
        <SectionWrapper className='section-wrapper' flexDirection="column" >
            <SectionHeading className='section-heading' lang={currentLang} color='#0A2540'>{t('home_section_4_heading')}</SectionHeading>
            <DescriptionP className='description-paragraph' color='#425466'>{t('home_section_4_descr')}</DescriptionP>

            <SectionRow className='section-row' gap="3rem" style={{justifyContent:"center", alignItems:"center"}}>
                <SectionFourButton className='section-four-button' backgroundColor="#3160D0" color="white">
                    {t('start_now')}
                    <Arrow className="arrow-icon" fill="white"/>
                </SectionFourButton>

                <TransparentButton className='section-four-transparent-button' color="#3160D0">
                    {t('contact_us')}
                    <Arrow className="arrow-icon" fill="#3160D0"/>
                </TransparentButton>
            </SectionRow>

        </SectionWrapper>
    )
}

export default SectionFour