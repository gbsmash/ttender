import React, { useContext } from "react";
import NavBar from "../../navbar";
import Footer from "../../Footer";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import i18next from "i18next";


function Home() {

  return (
    <div className="page-container">
      <NavBar/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
      <Footer />
    </div>
  );
}

export default Home;
