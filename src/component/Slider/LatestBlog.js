import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import './slick-slider.css';
import '../Slider/LatestBlog.css';
import SkeletonBlogLatest from "../skeleton/SkeletonBlogLatest";
import { SkeletonTheme } from "react-loading-skeleton";

const LatestBlog = () => {

	const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

	const latestUrl = 'https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10';
	const getLatest = async() => {	
        try {
            const response = await fetch(latestUrl);
            //const data = await response.json();           
            setData(await response.json()); 
            setIsLoading(false);          
        } catch (error) {
            console.log(error);
        }        
    }

    useEffect(()=> {      
        getLatest();
    },[]);

    const settings = {
        dots: false,
        arrows:true,
        autoplay:false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,		
      };
    return(
       
        <SkeletonTheme highlightColor="#B8B4AE">
        {
            isLoading 
            ?
            <div className="form-row">
                <SkeletonBlogLatest /> <SkeletonBlogLatest />
                <SkeletonBlogLatest /> <SkeletonBlogLatest />
            </div>
            :
            
            <div className="slider-wrap">
            <Slider {...settings}>		
            {                     
                data.map((item) =>  
                    <div className="p-2" key={item.id}>
                        <div className='blogItem'>
                            <div className="blogImage">
                                <Link to={"/BlogDetail/" + item.id}>
                                    <img src={item.url} />
                                </Link>
                            </div>
                            <div className='blog-content'>
                                <h3 className='blog-title'>
                                    <Link to={"/BlogDetail/" + item.id}>{item.title}</Link>
                                </h3>
                                <p>User {item.id}</p>
                            </div>
                        </div> 
                    </div>
                )
            }	
            </Slider>
            </div>

        }
        </SkeletonTheme>
            
       
    )
}

export default LatestBlog;