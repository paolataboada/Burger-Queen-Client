import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from '../components/Login';
import { Menu } from '../components/Menu';
import { Orders } from '../components/Orders';
import { Admin } from '../components/Admin';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={ <Login /> } />
                    <Route path="/menu" element={ <Menu /> } />
                    <Route path="/orders" element={ <Orders /> } />
                    <Route path="/admin" element={ <Admin /> } />
                </Routes>
            </Router>
        </>
    )
}
