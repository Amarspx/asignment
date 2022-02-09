import React,{useState, useEffect} from "react";

import ReactDOM from 'react-dom';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Contact = (props) => {

    const [enterUsername, setEnterUsername] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
    }

    const userChangeHandler = (event) => {
        setEnterUsername(event.target.value);
    }

    const { t } = useTranslation();
    useEffect(() => {
		let currentLang = localStorage.getItem('lang');
		i18n.changeLanguage(currentLang);
    },[]);

    return(
        <div className="container">
            <h1>{ t('name') }</h1>
            <div className="row">
            <form className="col-md-6" onSubmit={addUserHandler}>
                <div className="form-group">
                    <label htmlFor="name">{ t('name') }</label>
                    <input className="form-control" type="text" id="name" 
                    onChange={userChangeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">{ t('email') }</label>
                    <input className="form-control" type="email" id="email" />
                </div>
                <div className="form-group">
                    <label>{ t('message') }</label>
                    <textarea className="form-control" rows={5}  
                    id="form_description"></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">{ t('submit') }</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Contact;