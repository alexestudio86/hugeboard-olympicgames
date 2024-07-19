import { createContext, useContext, useEffect, useState } from "react";
import {db} from '../config/firebase.js';
import {query, collection, orderBy, onSnapshot} from 'firebase/firestore';


const countriesContext = createContext();
export function useCountriesContext () {
    return useContext(countriesContext);
};

export const DataProvider = ({children}) => {
    const [countries, setCountries] = useState(
        {
            items:[
                {
                    flag:   '',
                    index:  0,
                    medals: {
                        bronze: 0,
                        gold:   0,
                        silver: 0
                    },
                    name:   '',
                    show:   true
                }
            ],
            loading:false
        }
    );
    const getCountries = async() => {
        setCountries({
            ...countries,
            loading:            true,
            changedDocument:    false
        });
        try {
            //For make a request inside object, you need create index (this can be created pushing in link console), is not necesary short by, 
            const queryCountries   =   await query(collection(db, "hugeBoard", "olympicGames", "countries"), orderBy("index"));
            
            //const queryOrders   =   await query(collection(db, 'orders'), where('created', '>=', dayFiltered), orderBy('created', 'desc'));
            onSnapshot(queryCountries, (querySnapshot) => {
                setCountries({
                    items: querySnapshot.docs.map( doc => (
                        {id: doc.id, ...doc.data()}
                    )),
                    loading:false,
                    changedDocument: querySnapshot.docChanges().map( change => {
                        if (change.type === "added") {
                            return true;
                        }
                    } )
                });
            });
        } catch (error) {
            return error
        }
    };
    useEffect( () => {
        getCountries();
    }, []);
    useEffect( () => {
        countries. changedDocument &&
        setTimeout( () => {
            setCountries({...countries, changedDocument:false});
        }, 1000);
    },[countries.changedDocument]);
    return (
        <countriesContext.Provider value={{countries}}>
            {children}
        </countriesContext.Provider>
    )
};