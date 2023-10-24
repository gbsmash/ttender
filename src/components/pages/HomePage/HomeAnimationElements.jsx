import styled from "styled-components";
import { motion } from "framer-motion";


export const AnimContainer = styled(motion.div)`
    display:grid;
    grid-template-columns: minmax(0,1fr) minmax(0,1fr) minmax(0,1fr);
    grid-template-rows: minmax(7rem,1fr) minmax(7rem,1fr);
    column-gap:2rem;
    row-gap:2rem;
    width:100%;
    height:100%;
    padding:2rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`


export const ImgContainer = styled(motion.div)`
    width:100%;
    height:100%;
    border-radius:5px;
    grid-area: ${props => props.gridArea};
    background: linear-gradient(
        90deg,
        rgb(127, 209, 253) 0%,
        rgba(49, 96, 208, 1) 100%
      );
`

