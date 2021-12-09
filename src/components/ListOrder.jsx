import React from 'react'

export const ListOrder = () => {
    return (
        <div className="container-list-order">
            <div className="card text-dark bg-light mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">
                    <label htmlFor="">Name client:</label>
                    <input type="text" placeholder="Client" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Order List</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="d-grid col-5 mx-auto">
                    <button type="submit" className="btn btn-warning btn-login">Send</button>
                </div>
            </div>
        </div>
    )
}
