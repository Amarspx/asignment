
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import tEn from '../locales/en/transaltion.json';
import tTh from '../locales/th/transaltion.json';



const LangTranslation = (props) => {
    const { t } = useTranslation();

	useEffect(() => {
		//alert('Page is loaded successfully');
		//get the current language stored in the local storage
		let currentLang = localStorage.getItem('lang');
		i18n.changeLanguage(currentLang);
   
    },[]);
    return (
        <>
          
        </>
    );
}


export default LangTranslation;