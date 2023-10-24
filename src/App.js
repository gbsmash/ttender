import './App.css';
import NavBar from './components/navbar';
import React,{ Component, useEffect } from 'react';
import GetTenderList from './components/getTenderList';
import LoginForm from './components/loginForm';
import About from './components/about';
import Home from './components/pages/HomePage/home';
import Contact from './components/contact';
import Authentication from './components/authentication';
import SignUp from './components/pages/SignUpPage/SignUp';
import PostTender from './components/PostTender';
import LogIn from './components/pages/LogInPage/LogIn';
import Tenders from './components/pages/TendersPage/Tenders';
import {Route, Link, Routes, Router} from "react-router-dom";


import { createContext, useContext, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';



export const LangContext = React.createContext({
  currentLang: "en",
  setCurrentLang: () => {}
});




function App() {

  const [currentLang, setCurrentLang] = useState("en");
  useEffect(() => { setCurrentLang(() => i18next.language)}, [i18next.language]);


  return (
     <div className='App'>
      <LangContext.Provider value={{ currentLang, setCurrentLang }}>
        <Authentication>
          <Routes>
          <Route index element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/getTenderList" element={<GetTenderList/>}/>
          <Route path="/Tenders" element={<Tenders/>}/>
          <Route path="/PostTender" element={<PostTender/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/LogIn" element={<LogIn/>}/>
          </Routes>
        </Authentication>
      </LangContext.Provider>
      </div>
  );
}

export default App;
