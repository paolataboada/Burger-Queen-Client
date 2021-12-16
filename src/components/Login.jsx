import React from 'react';
import { FormLogin } from './FormLogin';
import burger from '../assets/burger-cover.png'
import '../styles/view-login.css'

export const Login = () => {
    return (
        <>
            <div className="container-view-login">
                <div className="div-burger-cover">
                    <img width="100%" src={burger} alt="Hamburguesa de portada" />
                </div>
                <div className="container-fluid div-form-login">
                    <div className="title-form-login">
                        <h3>Welcome back!</h3>
                        <p>Login to continue Burger City</p>
                    </div>
                    <FormLogin />
                </div>
            </div>
        </>
    )
}