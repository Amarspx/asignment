
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Nav = () => {
    const { t } = useTranslation(); 
    useEffect(() => {
		//alert('Page is loaded successfully');
		//get the current language stored in the local storage
		let currentLang = localStorage.getItem('lang');
		i18n.changeLanguage(currentLang);   
    },[]);

    return(

        <div className={style.sCol2}>
        <ul>
            <li>
                <NavLink  to='/'>
                 { t('home') }
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={style.active} to='/blog'>
                 { t('blog') }
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={style.active} to='/contact'>
                 { t('contact') }
                </NavLink>
            </li>
            
        </ul>
            
        </div>
        
    )
}

export default Nav;