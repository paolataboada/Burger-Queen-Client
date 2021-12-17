import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/view-productos.css';

export const ListOrder = (props) => {
    let uniqueOrders = {};
    props.ordersall.map(
        (element) =>
            (uniqueOrders[element] = uniqueOrders[element]
                ? uniqueOrders[element] + 1
                : 1)
    );

    return (
        <div className="container-list-order">
            <div className="card text-dark bg-light mb-3 card-list-orders">
                <div className="card-header">
                    <label htmlFor="">Name client:</label>
                    <input type="text" placeholder="Client" />
                </div>
                <div className="card-body card-list-order">
                    <h5 className="card-title">Order List</h5>
                    {Object.entries(uniqueOrders).map(([name, count], i) => (
                        <label key={i} className="items-list-order">
                            <label className="item-name">
                                {name.split(',')[0]}
                            </label>
                            <label className="item-price">
                                s/.{name.split(',')[1] * count}
                            </label>
                            <label className="item-count">{count}</label>
                            <button>
                                <FontAwesomeIcon
                                    className="fontTrash"
                                    icon={faTrashAlt}
                                />
                            </button>
                        </label>
                    ))}
                    <label>
                        Total: s/.
                        {Object.entries(uniqueOrders)
                            .map((el) => el[0].split(',')[1] * el[1])
                            .reduce((prev, next) => prev + next, 0)}
                    </label>
                </div>
                <div className="d-grid col-5 mx-auto">
                    <button type="submit" className="btn btn-warning btn-login">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};
