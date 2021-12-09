import React from 'react';

export const Form = () => {
    return (
        <>
            <form className="d-grid gap-2 col-9 mx-auto form-login">
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
                    <div className="col-sm-9">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="d-grid col-5 mx-auto">
                        <button type="submit" className="btn btn-warning btn-login">Log In</button>
                    </div>
                </div>
            </form>
        </>
    );
};
