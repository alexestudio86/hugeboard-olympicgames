import { useState } from 'react';
import {db} from '../config/firebase.js';
import {query, collection, onSnapshot, doc, getDoc} from 'firebase/firestore';


export const getData = async() => {
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