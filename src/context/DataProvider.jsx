import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { query, collection, onSnapshot } from "firebase/firestore";


const dataContext = createContext();
export function useDataContext() {
    return useContext(dataContext)
}

export function DataProvider({children}) {

    const [accounts, setAccounts] = useState([]);
    
    useEffect( () => {
        const queryCountries   =   query(collection(db, "hugeBoard", "cpr", "accounts"));
        const unsuscribe = onSnapshot(queryCountries, (querySnapshot) => {
            setAccounts(
                querySnapshot.docs.map( doc => (
                    {id: doc.id, ...doc.data()}
                ))
            )
        });
        return () => {
            unsuscribe();
        };
    }, [] );

    return (
        <dataContext.Provider value={{accounts}}>
            {children}
        </dataContext.Provider>
    )
}