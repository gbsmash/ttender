import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";

import LoginIcon from "@mui/icons-material/Login";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next, { use } from "i18next";
import TenderIcon from "./icons/TenderIcon";
import { LangContext } from "../App";
import { useContext } from "react";

function NavBar() {
  const { currentLang, setCurrentLang } = useContext(LangContext);
  useEffect(() => {
    setCurrentLang(() => i18next.language);
  }, [i18next.language]);

  const { t } = useTranslation();

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand>
        <Link to="/" className="brand">
          <TenderIcon width="129" height="38" />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/" className="navLink">
            {t("home_nav")}
          </NavLink>
          <NavLink to="/getTenderList" className="navLink">
            {t("search_nav")}
          </NavLink>
          <NavLink to="/Tenders" className="navLink">
            {t("tenders_nav")}
          </NavLink>
          <NavLink to="/about" className="navLink">
            {t("about_nav")}
          </NavLink>
          <NavLink to="/PostTender" className="navLink">
            {t("place_a_tender_nav")}
          </NavLink>
          <NavLink to="/contact" className="navLink">
            {t("contacts_nav")}
          </NavLink>
        </Nav>

        <NavDropdown
          title={
            <div id="langIcons">
              {currentLang.toUpperCase()}
              <KeyboardArrowDownIcon />
            </div>
          }
          id="collapsible-nav-dropdown"
        >
          <NavDropdown.Item
            key="en"
            as="button"
            onClick={() => {
              i18next.changeLanguage("en");
            }}
          >
            EN
          </NavDropdown.Item>
          <NavDropdown.Item
            key="az"
            as="button"
            onClick={() => {
              i18next.changeLanguage("az");
            }}
          >
            AZ
          </NavDropdown.Item>
          <NavDropdown.Item
            key="ru"
            as="button"
            onClick={() => {
              i18next.changeLanguage("ru");
            }}
          >
            RU
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
      <Nav className="no-collapse">
        <div className="vr"></div>
        <NavLink to="/LogIn">
          <LoginIcon />
          {t("login_nav")}
        </NavLink>
        <NavLink to="/SignUp">
          <HowToRegRoundedIcon />
          {t("signup_nav")}
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
