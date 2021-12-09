import React from 'react';
import { Form } from './Form';
import burger from '../assets/burger-cover.png'

export const Login = () => {
    return (
        <>
            <div style={{display: "flex", alignItems: "center", height: "100vh"}}>
                <div style={{width: "40%", paddingLeft: "20px"}}>
                    <img width="100%" src={burger} alt="Hamburguesa de portada" />
                </div>
                <div style={{width: "60%"}} className="container-fluid">
                    <div style={{display: "flex", flexFlow: "column nowrap", alignItems: "center"}}>
                        <h3 style={{color: "#FFAB25"}}>Welcome back!</h3>
                        <p style={{color: "white"}}>Login to continue Burger City</p>
                    </div>
                    <Form />
                </div>
            </div>
        </>
    )
}