import React, { useState, useEffect } from 'react';
import { getFirestore, collection, onSnapshot, getDocs, query, where} from "firebase/firestore";

const db = getFirestore();

export const Users = () => {
    const [users, setUsers] = useState([]);

    async function getUsers(db) {
        // const unsub = onSnapshot(query, (doc) => {
        //     console.log("Current data: ", doc.data());
        // });
        // console.log(unsub);
        
        // const usersCol = collection(db, 'users');
        // const userSnapshot = await getDocs(usersCol);
        // const userList = userSnapshot.docs.map(doc => doc.data());
        // console.log(userList);
        // return setUsers(userList)

        const q = query(collection(db, "users"), where("creator", "==", "admin"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc);
                return doc;
            });
        });
        return unsubscribe;
    }

    useEffect(() => {
        return getUsers(db);
    }, [])


    return (
        <div class="container-users-list">
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
                                <td>
                                    <button>Editar</button>
                                    <button>Borrar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
