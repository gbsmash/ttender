import { motion } from "framer-motion";
import React from 'react';
import { AnimContainer, ImgContainer } from "./HomeAnimationElements";



function HomeAnimation() {
  return (
    <AnimContainer>
        <ImgContainer whileHover={{ scale: 1.2 }} gridArea="1/1/2/2"></ImgContainer>
        <ImgContainer whileHover={{ scale: 1.2 }} gridArea="1/3/2/4"></ImgContainer>
        <ImgContainer whileHover={{ scale: 1.2 }} gridArea="2/2/3/3"></ImgContainer>
    </AnimContainer>
  )
}

export default HomeAnimation