import React, { useState } from 'react';
import axios from 'axios';
import app from '../services/fbconfig.js';

console.log(app)

export const Form = () => {
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

    const btnLogin = async (e) => {
        e.preventDefault();
        const URL = 'https://bq-lim015.herokuapp.com/auth';
        await axios.post(URL, credenciales)
        .then((res) => {
            console.log(res)
            if (res.request.status === 200){
                console.log(res.data.token);
                localStorage.setItem('token', res.data.token);
                // console.log(JSON.parse(localStorage.setItem('token', res.data.token)));
                // props.history.push('/menu');
            }
        })
        .catch((err) => console.log(err));
        }
    


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
