
import classes from './Login.module.css';
import React, {useState, useEffect} from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import ErrorModal from '../UI/ErrorModal';


import ReactDOM from 'react-dom';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Auth = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [userName,setUsername] = useState('');
    const [userIsValid, setUserIsValid] = useState();
    const [password,setPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
     
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isUser, setIsUser] = useState('');
    
    useEffect(() => {
        const identifier = setTimeout(() => {
          console.log('Checking form validity!');
          setFormIsValid(
            userName.trim().length > 4 && password.trim().length > 6
          );
        }, 500);
    
        return () => {
          console.log('CLEANUP');
          clearTimeout(identifier);
        };
    }, [userName, password]);
    const validateUserHandler = () => {
        setUserIsValid(userName.trim().length > 4);
      };
    const validatePasswordHandler = () => {
        setPasswordIsValid(password.trim().length > 6);
    };

    const submitForm = (event) => {
        event.preventDefault();
        //loginHandler(userName, password);

        loginHandler();
        localStorage.setItem('isUser', isUser);
        handleClose();        
        console.log(isUser);
        setUsername(''); setPassword('');
        //console.log(userName);
    }
    const userNameHandler = (event) => {
        setUsername(event.target.value);
        setIsUser(event.target.value);
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }   

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
        console.log(storedUserLoggedInInformation);
        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);
    const loginHandler = (user, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        localStorage.removeItem('isUser');
    };

    /* Translation */
    const { t } = useTranslation();
    useEffect(() => {
		//alert('Page is loaded successfully');
		//get the current language stored in the local storage
		let currentLang = localStorage.getItem('lang');
		i18n.changeLanguage(currentLang);
   
    },[]);

   
    return(
        <>    
                   
            {!isLoggedIn && 
                <a className="login" href="#" onClick={handleShow }>{ t('login') }</a>
            }
            {setIsUser &&    
                <span>{localStorage.getItem('isUser')}</span>
            }
            {isLoggedIn &&            
                <a className="logout" href='#' onClick={logoutHandler}>
                { t('logout') }</a>
            }

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header>                
                <Modal.Title>{ t('login') }</Modal.Title>
                <span className="far fa-times close" onClick={handleClose}></span>
                </Modal.Header>
                <Modal.Body>     
                    <form onSubmit={submitForm}  autoComplete='off'>
                        <div className={`${classes.formGroup} ${
                            userIsValid === false ? classes.invalid : ''
                        }`}>
                            <label htmlFor="userName">{ t('user_name') }</label>
                            <input className="form-control" 
                            id="userName" autoComplete="off" 
                            type="text"
                            id="email"
                            value={userName}
                            onChange={userNameHandler}
                            onBlur={validateUserHandler}
                            />
                             {!userIsValid ? 
                             <p className={classes.invalid}>Please enter at lest 5 digit</p> :""}                           
                        </div>
                        
                        
                        <div className={`${classes.formGroup} ${
                            passwordIsValid === false ? classes.invalid : ''
                        }`}>
                            <label htmlFor="password">{ t('password') }</label>
                            <input className="form-control" autoComplete='off' 
                            type="password"
                            id="password"
                            value={password}
                            onChange={passwordHandler}
                            onBlur={validatePasswordHandler}
                            />
                        </div>
                        <div className="d-flex justify-content-between">   
                                               
                            <Button type="submit" variant="primary mr-3" 
                            className={classes.btn} disabled={!formIsValid}>
                                { t('save') } 
                            </Button>
                            <Button variant="danger" onClick={handleClose} >
                            { t('close') }
                            </Button>
                        </div>
                    </form>
            
            </Modal.Body>
                
                </Modal>

            {/* {error && <ErrorModal title={error.title} 
            message={error.message} />}  */}

           
        </>
        
    )
}



export default Auth;