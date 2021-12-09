import React from 'react';
import { Navbar } from './Navbar';
import { Products } from './Products';
import { ListOrder } from './ListOrder';
import '../styles/view-menu.css';

export const Menu = () => {
    return (
        <>
            <Navbar />
            <div className="container-menu">
                <Products />
                <ListOrder />
            </div>
        </>
    )
}
