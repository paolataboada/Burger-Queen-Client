import React from 'react';
import { FormAddUser } from './FormAddUser';
import { Navbar } from './Navbar';
import { Users } from './Users';

export const Admin = () => {
    return (
        <>
            <Navbar />
            <div className='dv-container-admin'>
                <FormAddUser />
                <Users />
            </div>
        </>
    )
}
