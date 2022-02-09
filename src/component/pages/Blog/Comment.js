

import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

import ReactPaginate from 'react-paginate';
import { SkeletonTheme } from "react-loading-skeleton";
import SkeletonComment from '../../skeleton/SkeletonComment';
import { t } from "i18next";



function Comment(props) {
    
    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);

    const [isLoading, setIsLoading] = useState(true);

    let limit = 2;

  
    const blogUrl = '';
    useEffect(() => {
        const getComments = async () => {
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/1/comments?_page=1&_limit=${limit}`

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
          `https://jsonplaceholder.typicode.com/posts/1/comments?_page=${currentPage}&_limit=${limit}`
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

    return (
		<>
			<div className="description">
				{items.body}
			</div>

			<SkeletonTheme highlightColor="#aaa">
				
				<h3><strong>{t('comment')}</strong></h3>

			
					{
						isLoading ?
							<>
							<SkeletonComment /><SkeletonComment /> </>
							
							:
							items.map((items) => {
								return (
									<div key={items.id}>
										<div className="commentRow">
											<div className='commentList'>
												<strong>{t('name')} : </strong> {items.name}
											</div>
											<div className='commentList'>
												<strong>{t('email')} : </strong> {items.email}
											</div>
											<div className='commentList'>
												<p>{items.body}</p>
											</div>
										</div>
									</div>
								);
							})
						
					}
						
		
					
					
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
			
			</SkeletonTheme>
		</>
    );
}

export default Comment;