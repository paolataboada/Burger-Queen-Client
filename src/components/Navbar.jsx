import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/menu">Menú</Link>
                    <Link className="navbar-brand" aria-current="page" to="/orders">Ordenes</Link>
                    <Link className="navbar-brand" to="/admin">Administrador</Link>
                    <Link className="navbar-brand" to="/">Salir</Link>
                </div>
            </nav>
        </>
    )
}
