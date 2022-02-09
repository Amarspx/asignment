
import './HomeBlog.css';
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

import ReactPaginate from 'react-paginate';

import SkeletonBlogHome from '../component/skeleton/SkeletonBlogHome';

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

function HomeBlog(props) {
    
    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);

    const [isLoading, setIsLoading] = useState(true);

    let limit = 10;

  
    const blogUrl = '';
    useEffect(() => {
        const getComments = async () => {
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/photos?_page=1&_limit=${limit}`

          );
          const data = await res.json();

          setIsLoading(false);

          const total = res.headers.get("x-total-count");
          setpageCount(Math.ceil(total / limit));
          // console.log(Math.ceil(total/12));
          setItems(data);
        };
    
        getComments();
    }, [limit]);
    
    const fetchComments = async (currentPage) => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };
    
    const handlePageClick = async (data) => {
        console.log(data.selected);
        let currentPage = data.selected + 1;
        const commentsFormServer = await fetchComments(currentPage);
        setItems(commentsFormServer);
    };  

    /**/
    const { t } = useTranslation();
    useEffect(() => {
		let currentLang = localStorage.getItem('lang');
		i18n.changeLanguage(currentLang);
    },[]);

    return (
        <div className="container">
            
            <div className='title-filter'>
                <h1>{t('blogs')} </h1>                 
            </div>

            <ul className="grid grid-5">
                {
                    isLoading ?
                        <>
                        <SkeletonBlogHome /><SkeletonBlogHome /><SkeletonBlogHome />
                        <SkeletonBlogHome /><SkeletonBlogHome /><SkeletonBlogHome />
                        <SkeletonBlogHome /><SkeletonBlogHome /><SkeletonBlogHome />
                        <SkeletonBlogHome /> </>
                        
                        :
                        items.map((items) => {
                            return (
                                <li key={items.id}>
                                    <div className="blogItem">
                                        <div className="blogImage">
                                            <Link to={"/BlogDetail/" + items.id}>
                                                <img src={items.url} />
                                            </Link>
                                        </div>
                                        <div className='blog-content'>
                                            <h3 className='blog-title'>
                                                <Link to={"/BlogDetail/" + items.id}>{items.title}</Link>
                                            </h3>
                                            <p>User {items.id}</p>
                                        </div>
                                    </div>
                                </li>
                            );
                    })
                    
                }
                      
                
            </ul>       
                
                
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />      
           
        </div>
    );
}

export default HomeBlog;