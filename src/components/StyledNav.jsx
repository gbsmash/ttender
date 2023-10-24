import React from 'react'
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { BrowserRouter as Router, Routes, Link, NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import LoginIcon from '@mui/icons-material/Login';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const NavNav = () => {
  
  const { t } = useTranslation();

  return (
    

    <Navbar collapseOnSelect expand="md">
        <Navbar.Brand><Link to="/" className='brandLink'><p className='brand'>ttender</p></Link></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href="/" className='navLink' >{t('home_nav')}</Nav.Link>
              <Nav.Link href="/getTenderList" className='navLink'>{t('search_nav')}</Nav.Link>
              <Nav.Link href="/getTenderList" className='navLink'>{t('tenders_nav')}</Nav.Link>
              <Nav.Link href="/about" className='navLink'>{t('about_nav')}</Nav.Link>
              <Nav.Link href="/PostTender" className='navLink'>{t('place_a_tender_nav')}</Nav.Link>
              <Nav.Link href="/contact" className='navLink'>{t('contacts_nav')}</Nav.Link>
          </Nav>

          <Nav>              
            <NavDropdown title={<div id='langIcons'><LanguageIcon/><KeyboardArrowDownIcon/></div>} id="collapsible-nav-dropdown">
                <NavDropdown.Item eventKey = "en" as="button" onClick={()=> i18next.changeLanguage('en')}> Eng</NavDropdown.Item>
                <NavDropdown.Item eventKey = "az" as="button" onClick={()=> i18next.changeLanguage('az')}>Az</NavDropdown.Item>
                <NavDropdown.Item eventKey = "ru" as="button" onClick={()=> i18next.changeLanguage('ru')}>Рус</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav className="no-collapse">
            <div className="vr"></div>
            <Nav.Link href="/loginForm"  ><LoginIcon />{t('login_nav')}</Nav.Link>
            <Nav.Link href="/SignUp"  ><HowToRegRoundedIcon />{t('signup_nav')}</Nav.Link>
          </Nav>
        
      
  </Navbar>
  )
}




const StyledNavbar = styled(NavNav)`
  width: 100%;
  height: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2.3rem;
  padding-right: 2.3rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  background: rgb(255, 255, 255);
  border-bottom: 2px solid rgba(141, 139, 139, 0.46);
  color: ${props => props.color || 'black'};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
`


export default StyledNavbar;