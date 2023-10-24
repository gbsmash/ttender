import React from "react";
import {
  SectionOneCol,
  SectionOneRow,
  StyledIntro,
  SectionWrapper,
  SectionOneWrapper,
  GradientButton,
  DescriptionP,
} from "./HomeElements";
import { useTranslation } from "react-i18next";
import { LangContext } from "../../../App";
import { useContext } from "react";
import HomeAnimation from "./HomeAnimation";


function SectionOne() {

  const {currentLang, setCurrentLang } = useContext(LangContext);

  const { t } = useTranslation();

  return (
    <SectionOneWrapper className="section-wrapper" flexDirection="row" style={{borderBottom: "1px dashed #E7E7E7"}}>
      <SectionOneCol className="section-col"  style={{alignItems:"flex-start"}}>
        <SectionOneRow>
          <StyledIntro className="intro" lang={currentLang}/>
          {/* <HomeAnimation/> */}
        </SectionOneRow>
        
        <SectionOneRow>
          <DescriptionP className="gray-paragraph" color="#605C5C">{t("home_section_1_small")}</DescriptionP>
        </SectionOneRow>

        <GradientButton>{t("get_started")}</GradientButton>
      </SectionOneCol>
      <SectionOneCol className="section-col">
      </SectionOneCol>
    </SectionOneWrapper>
  );
}

export default SectionOne;
