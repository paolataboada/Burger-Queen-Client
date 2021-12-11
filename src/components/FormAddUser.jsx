import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, updateDoc } from "firebase/firestore";

const auth = getAuth();
const db = getFirestore();

export const FormAddUser = () => {
    const [dataUser, setDataUser] = useState({
        inputName: '',
        inputPassword: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        setDataUser({
            ...dataUser,
            [e.target.name] : e.target.value,
        })
    };

    const btnCreateUser = (e) => {
        e.preventDefault();   
        
        /******** Create User ******/
        createUserWithEmailAndPassword(auth, dataUser.inputName, dataUser.inputPassword)
        .then(async (userCredential) => {
            const user = userCredential.user;
        
            /****** Create collections Users */
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    uid: user.uid,
                    email: user.email,
                    password: dataUser.inputPassword,
                    dateCreate: new Date().toLocaleString(),
                    docId: ''
                });
                console.log("Document written with ID: ", docRef.id);
                // Actualizando el id del documento
                await updateDoc(doc(db, "users", docRef.id), {
                    docId: docRef.id
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    };

    return (
        <form className="form-inline form-create-user">
            <div className="form-group mx-sm-3 mb-2">
                <label  className="sr-only">Email</label>
                <input onChange={handleChange} type="text" name='inputName' className="form-control" id="staticEmail2" placeholder="Email" />
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="inputPassword2" className="sr-only">Password</label>
                <input onChange={handleChange} type="password" name='inputPassword' className="form-control" id="inputPassword2" placeholder="Password" />
            </div>
            <div className="form-group mx-sm-3 mt-4">
                <button onClick={btnCreateUser} type="submit" className="btn btn-primary">Create User</button>
            </div>        
        </form>
    )
}
