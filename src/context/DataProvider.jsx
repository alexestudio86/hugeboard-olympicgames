import { useState } from 'react';
import {db} from '../config/firebase.js';
import {query, collection, onSnapshot, doc, getDoc} from 'firebase/firestore';


export const getAccounts = async() => {
    const [accounts, setAccounts] = useState();
    try {
        //For make a request inside object, you need create index (this can be created pushing in link console), is not necesary short by, 
        const queryCountries   =   await query(collection(db, "hugeBoard", "cpr", "accounts") );
        //const queryOrders   =   await query(collection(db, 'orders'), where('created', '>=', dayFiltered), orderBy('created', 'desc'));
        onSnapshot(queryCountries, (querySnapshot) => {
            setAccounts(
                querySnapshot.docs.map( doc => (
                    {id: doc.id, ...doc.data()}
                ))
            )
        });
        return {accounts};
    } catch (error) {
        return error
    }
};

export const getData = async( document ) => {
    try {
        const docRef    =   await getDoc( document );
        if (docRef.exists()) {
            console.log('docRef: ', docRef.data());
            return docRef.data();
        } else {
            throw new Error("No se encontró el documento");
        }
    } catch (error) {
        return error
    }
}