import React,{ useState, useEffect } from 'react';
import {Link} from "react-router-dom";



const Table = () => {

    const url = 'https://jsonplaceholder.typicode.com/photos?_page=1&_limit=40';

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await fetch(url);
        const item = await res.json();
        setData(item);
        
    }

    useEffect (()=>{
        fetchData();
    },[]);


    console.log(data);


    
    return(
        <div className='container'>
       
            <h1>Table</h1>


                {
                    data.map((items)=> 
                        <li key={items.id} className="col-md-3">
                            <div className="blogItem">
                                <div className="blogImage">
                                    <Link to={"/BlogDetail/" + items.id}>
                                        <img src={items.url} alt='img' />
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
                    ) 
                }




        </div>
        
    )
}

export default Table;