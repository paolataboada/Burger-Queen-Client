import React from 'react';
import '../styles/view-productos.css';

export const ListOrder = () => {
    return (
        <div className="container-list-order">
            <div className="card text-dark bg-light mb-3 card-list-orders">
                <div className="card-header">
                    <label htmlFor="">Name client:</label>
                    <input type="text" placeholder="Client" />
                </div>
                <div className="card-body" style={{display:'flex', justifyContent:'center'}}>
                    <h5 className="card-title">Order List</h5>
                    <p className="card-text"></p>
                </div>
                <div className="d-grid col-5 mx-auto">
                    <button type="submit" className="btn btn-warning btn-login">Send</button>
                </div>
            </div>
        </div>
    )
}
