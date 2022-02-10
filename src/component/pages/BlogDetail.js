import { useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
import './Blog.css';


import LatestBlog from "../Slider/LatestBlog";
import Comment from './Blog/Comment';

import i18n from "i18next";
import { useTranslation } from "react-i18next";



function BlogDetail(props) {
    console.log(props);
    const params = useParams();

    const userId = params.bId;
    //console.log('id is :- ',  userId);

    const [data, setData] = useState([]);
    const blogUrl = 'https://jsonplaceholder.typicode.com/photos';
    const blogFullUrl = blogUrl + '/' + userId;
    

    const fetchData = async ()=> {
        const res = await fetch(blogFullUrl);
        const data = await res.json();
        setData(data);
        console.log(data);
    }
    console.log(data);

    useEffect(()=> {
        fetchData();
    },[]);

    /**/
    const { t } = useTranslation();
	useEffect(() => {
		let currentLang = localStorage.getItem('lang');
		i18n.changeLanguage(currentLang);
    },[]);

    //console.log(params.bid);
    return (
        <div className="container">
            <h1>{t('blog')} {data.title}</h1>
            <p>{t('user')}: {params.bId} </p>

            <p><img src="https://via.placeholder.com/1200x450/0000FF/808080%20?Text=Blog detail" alt="img" /></p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

           
            <Comment />

            <h2>{t('related_blog')}</h2>
            <LatestBlog />
        
           
           

            
        </div>
    )
}

export default BlogDetail;