import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
// import axios from 'axios';
import app from '../services/fbconfig.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export const Form = () => {
    const navigate = useNavigate();
    const [credenciales, setCredenciales] = useState({
        name : '',
        password:'',
    });

    const handleCHange = (e) => {
        e.preventDefault();
        setCredenciales({
            ...credenciales,
            [e.target.name] : e.target.value,
        })
    };

    const btnLogin = (e) => {
        e.preventDefault();
        // Iniciar sesión con firebase auth
        signInWithEmailAndPassword(auth, credenciales.name, credenciales.password)
            .then((userCredential) => {
                // Signed in
                // const user = userCredential.user;
                navigate('/menu');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
    };
    
    return (
        <>
            <form className="d-grid gap-2 col-9 mx-auto form-login">
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                        <input onChange={handleCHange} type="email" name='name' className="form-control" id="inputEmail3" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
                    <div className="col-sm-9">
                        <input type="password" onChange={handleCHange} name='password' className="form-control" id="inputPassword3" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="d-grid col-5 mx-auto">
                        <button onClick={btnLogin} type="submit" className="btn btn-warning btn-login">Log In</button>
                    </div>
                </div>
            </form>
        </>
    );
};
