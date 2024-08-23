import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { query, collection, onSnapshot } from "firebase/firestore";


const dataContext = createContext();
export function useDataContext() {
    return useContext(dataContext)
}


export function DataProvider({children}) {
    const [accounts, setaccounts] = useState([]);

    const getData = async() => {
        try {
            const queryCountries   =   await query(collection(db, "hugeBoard", "cpr", "accounts") );
            onSnapshot(queryCountries, (querySnapshot) => {
                setaccounts(
                    querySnapshot.docs.map( doc => (
                        {id: doc.id, ...doc.data()}
                    ))
                )
            })
        } catch (error) {
            return {error}            
        }
    };

    useEffect( () => {
        getData();
    },[]);

    return (
        <dataContext.Provider value={{getData, accounts}}>
            {children}
        </dataContext.Provider>
    )
}