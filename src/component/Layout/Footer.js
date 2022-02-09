
import './Footer.module.css';
import Nav from './Nav';

import React, { useEffect } from 'react';
import i18n from "i18next";
import { useTranslation } from "react-i18next";


const Footer = () => {
    const { t } = useTranslation();

	useEffect(() => {
		//alert('Page is loaded successfully');
		//get the current language stored in the local storage
		let currentLang = localStorage.getItem('lang');
		i18n.changeLanguage(currentLang);
   
    },[]);
    return(
        <footer>
            <div className='container'>
               
                <h2>{ t('footer') }</h2>
                <Nav />
            </div>             
        </footer>
    )
}

export default Footer;



