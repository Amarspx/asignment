import React, {useEffect} from 'react';
import BannerSlider from './../Slider/BannerSlider';
import HomeBlog from '../HomeBlog';
import LatestBlog from './../Slider/LatestBlog';

import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Home = () => {

    const { t } = useTranslation();
    useEffect(() => {
		let currentLang = localStorage.getItem('lang');
		i18n.changeLanguage(currentLang);
    },[]);


    
    return(
        <>
       
        <BannerSlider />
        <HomeBlog />
        <div className='container'>
            <h2>{t('latest_blog')}</h2>
            <LatestBlog />
        </div>





        </>
        
    )
}

export default Home;