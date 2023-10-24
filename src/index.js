import React from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18next from "i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import Loading from "./components/Loading";
import { useTranslation } from 'react-i18next';


import "./index.css";
import App from "./App";





i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)

  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    
    fallbackLng: "en",
    detection:{
      order: ['cookie', 'localStorage','htmlTag',  'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend:{
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

  
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<Suspense fallback={<Loading/>}>
<BrowserRouter>
  <App />
</BrowserRouter>
</Suspense>);





