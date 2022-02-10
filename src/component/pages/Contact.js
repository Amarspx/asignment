import React,{ useEffect} from "react";

import i18n from "i18next";
import { useTranslation } from "react-i18next";

import { useForm } from "react-hook-form";


const Contact = (props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
        reset();
        alert("Thanks , Your form is Submitted");
      };

    /* Translation */
    const { t } = useTranslation();
    useEffect(() => {
		let currentLang = localStorage.getItem('lang');
		i18n.changeLanguage(currentLang);
    },[]);

    return(
        <div className="container">
            <h1>{ t('contact_us') }</h1>
            <div className="row">
            <form className="col-md-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">{ t('name') }</label>
                    <input
                        type="text"
                        className={`form-control ${errors.name && "invalid"}`}
                        {...register("name", { required: "Name is Required" })}
                        onKeyUp={() => {
                        trigger("name");
                        }}
                    />
                    {errors.name && (
                        <small className="text-danger">{errors.name.message}</small>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="email">{ t('email') }</label>
                    <input
                        type="text"
                        className={`form-control ${errors.email && "invalid"}`}
                        {...register("email", { required: "Email is Required" ,
                        pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                        }})}
                        onKeyUp={() => {
                        trigger("email");
                        }}
                    />
                    {errors.email && (
                        <small className="text-danger">{errors.email.message}</small>
                    )}
                </div>
                <div className="form-group">
                    <label>{ t('phone_number') }</label>
                    <input
                        type="text"
                        className={`form-control ${errors.phone && "invalid"}`}
                        {...register("phone", { required: "Phone is Required",
                        pattern: {
                        value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                        message: "Invalid phone no",
                        },
                    })}
                    onKeyUp={() => {
                        trigger("phone");
                    }}
                    />
                    {errors.phone && (
                        <small className="text-danger">{errors.phone.message}</small>
                    )}
                </div>
                <div className="form-group">
                    <label>{ t('message') }</label>
                    <textarea
                        className={`form-control ${errors.message && "invalid"}`}
                        {...register("message", { required: "Message is Required",
                        minLength: {
                        value: 10,
                        message: "Minimum Required length is 10",
                        },
                        maxLength: {
                        value: 50,
                        message: "Maximum allowed length is 50 ",
                        }
                    })}
                    onKeyUp={() => {
                        trigger("message");
                    }}
                    ></textarea>
                    {errors.message && (
                        <small className="text-danger">{errors.message.message}</small>
                    )}
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