import React from 'react';
import '../styles/view-productos.css';

export const ListOrder = (props) => {

    let uniqueOrders = {};
    props.ordersall.map((element) =>  uniqueOrders[element] = uniqueOrders[element] ? uniqueOrders[element] + 1 : 1); 

   

    // let claves = Object.keys(uniqueOrders); 


    // let claves2 = Object.values(uniqueOrders); 
    // console.log(claves2)

    return (
        <div className="container-list-order">
            <div className="card text-dark bg-light mb-3 card-list-orders">
                <div className="card-header">
                    <label htmlFor="">Name client:</label>
                    <input type="text" placeholder="Client" />
                </div>
                <div className="card-body" style={{display:'flex', justifyContent:'start', flexDirection:'column'}}>
                    <h5 className="card-title">Order List</h5>
                    <ul>
                    {
                         Object.entries(uniqueOrders).map(([key, value],i) => ( <li key={i}><span>{key}</span><span>{value}</span></li>))
                    } 
                    </ul>
                                  
                </div>
                <div className="d-grid col-5 mx-auto">
                    <button type="submit" className="btn btn-warning btn-login">Send</button>
                </div>
            </div>
        </div>
    )
}
