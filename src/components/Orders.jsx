import React from "react";
import { Navbar } from "./Navbar";
import '../styles/view-productos.css';

export const Orders = () => {
  return (
    <>
      <Navbar />
      <section className="container-orders">
      <div>
          <h1 className="pending">Pending</h1>
        <div className="card text-center card-list-orders">
         <div className="card-header">
          NAme
         </div>
         <div className="card-body">
          <p className="card-text">lo</p>
          <button className="btn btn-primary">Mover</button>
          <button className="btn btn-primary">Cancelar</button>
         </div>
        </div>
      </div>        

      <div>
          <h1 className="delivering">Delivering</h1>
        <div className="card text-center card-list-orders">
         <div className="card-header">
          NAme
         </div>
         <div className="card-body">
          <p className="card-text">lo</p>
          <button className="btn btn-primary">Mover</button>
          <button className="btn btn-primary">Cancelar</button>
         </div>
        </div>
      </div>

      <div>
          <h1 className="delivered">Delivered</h1>
        <div className="card text-center card-list-orders">
         <div className="card-header">
          NAme
         </div>
         <div className="card-body">
          <p className="card-text">lo</p>
          <button className="btn btn-primary">Mover</button>
          <button className="btn btn-primary">Cancelar</button>
         </div>
        </div>
      </div>
 
      </section>
    </>
  );
};
