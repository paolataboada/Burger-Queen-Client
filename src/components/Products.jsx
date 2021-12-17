import React, { useState, useEffect } from 'react';
import axios from 'axios';
import burgerTopCard from '../assets/burger-top-card.png';
import { ListOrder } from './ListOrder';
import '../styles/view-menu.css';

export const Products = () => {
    const [data, setData] = useState([]);
    
    const options = {
        method: 'GET',
        url: 'https://burgersapi.p.rapidapi.com/get-burgers',
        headers: {
            'x-rapidapi-host': 'burgersapi.p.rapidapi.com',
            'x-rapidapi-key': 'acd3cddf76msh4ff9c5ffffbd79ep166ba1jsnc4e897cc2183'
        }
    };

    const fetchData = () => {
        axios.request(options)
        .then(function (response) {
            // console.log(response.data);
            setData(response.data.burgers)
        })
        .catch(function (error) {
            console.error(error);
        })
    };

    useEffect(() => {
        return fetchData()
    }, [])


    const [productsCard, setProductsCard] = useState([]); 
  
    const handleOrder = (product) => {        
        setProductsCard([
            ...productsCard,
            product
        ]);
    };


    return (
        <><div className="container-all-products">
            <section className="section-lunch">
                <h2>Hamburguesas</h2>
                <div className="row row-cols-1 row-cols-md-3 g-2">
                    {data.map((item, index) => {
                        return (
                            <div className="col" key={index + 1}>
                                <div className="card div-card">
                                    <img src={burgerTopCard} className="card-img-top burger-card-top" alt="..." />
                                    <div className="card-body mx-auto">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">s/.{item.id <= 20 ? item.id + 10 : item.id - 2}.00</p>
                                        <button className='btn btn-primary' data-neworder={item.name} onClick={() => handleOrder(item.name)}>Agregar</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
        <ListOrder ordersall ={productsCard}/></>
        
    )
}
