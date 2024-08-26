import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { query, collection, onSnapshot } from "firebase/firestore";


const dataContext = createContext();
export function useDataContext() {
    return useContext(dataContext)
}

export function DataProvider({children}) {

    const [accounts, setAccounts] = useState([]);

    const getData = async() => {
        try {
            const queryCountries   =   await query(collection(db, "hugeBoard", "cpr", "accounts"));
            onSnapshot(queryCountries, (querySnapshot) => {
                setAccounts(
                    querySnapshot.docs.map( doc => (
                        {id: doc.id, ...doc.data()}
                    ))
                )
            });
            console.log('Accounts: ', accounts);
        } catch (error) {
            return {error}            
        }
    };
    
    useEffect( () => {
        getData();
    }, []);

    return (
        <dataContext.Provider value={{accounts}}>
            {children}
        </dataContext.Provider>
    )
}