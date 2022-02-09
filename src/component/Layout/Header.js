import logo from './../../logo.svg';
import style from './Header.module.css';
import Nav from './Nav';
import Auth from './Auth';
import Lang from './Lang';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    
    return(
        <header className={style.header}>
            <div className='container-fluid'>
                <div className={style.positionGroup}>
                <div className={style.fCol1}>
                    <NavLink activeClassName={style.active} to='/' className={style.logo}>
                    <img src={logo} className="App-logo" alt="logo" height='50' />
                    </NavLink>
                   
                </div>
                <Nav  />
                <div className="langNav">
                <Auth />
                <Lang />
                </div>
                
                </div>
            </div>             
        </header>
    )
}

export default Header;



