

import { NavLink } from 'react-router-dom';
import LoaderStyle from './Loader.module.css';


const Loader = () => {
    return(
        
        <div className={LoaderStyle.loader} id='loder'></div>
    )
}

export default Loader;