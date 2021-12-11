import React, { useState, useEffect } from 'react';
import { getFirestore, collection, onSnapshot, query, orderBy, deleteDoc, doc, updateDoc } from "firebase/firestore";

const db = getFirestore();

export const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = (db) => {
        const usersCol = query(collection(db, "users"), orderBy("dateCreate", "asc"));
        return onSnapshot(usersCol, (querySnapshot) => {
            const userList = [];
            querySnapshot.forEach(async (doc) => {
                userList.push(doc.data());
            });
            // console.log(17, userList)
            setUsers(userList);
        });
    }

    // Borra la colección del usuario
    const deleteUser = async (docId) => {
        const confirmDelete = window.confirm('Seguro que deseas borrar a este usuario?');
        if (confirmDelete) await deleteDoc(doc(db, 'users', docId));
    }

    // Edita la colección del usuario
    const editUser = async (docId) => {
        const newEmail = prompt('nuevo user', '');
        const newPassword = prompt('nuevo pass', '');

        if (newEmail && newPassword)
        await updateDoc(doc(db, 'users', docId), {
            email: newEmail,
            password: newPassword,
            dateCreate: new Date().toLocaleString()
        });
    }

    useEffect(() => {
        return getUsers(db);
    }, [])

    return (
        <div className="container-users-list">
            <table className="table my-0">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Fecha de creación</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((col, index) => {
                        return (
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{col.email}</td>
                                <td>{col.dateCreate}</td>
                                <td className='d-md-flex justify-content-md-between'>
                                    <button onClick={() => editUser(col.docId)} className='btn btn-primary btn-sm'>Editar</button>
                                    <button onClick={() => deleteUser(col.docId)} className='btn btn-danger btn-sm'>Borrar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
