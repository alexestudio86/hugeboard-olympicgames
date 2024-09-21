import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { doc, getDoc, getDocs, query, collection, onSnapshot } from "firebase/firestore";


const dataContext = createContext();
export function useDataContext() {
    return useContext(dataContext)
}

export function DataProvider({children}) {

    const [accounts, setAccounts] = useState([]);


    // The follow function show how get multiple request from reference, put is not posible check updates in real time
    const getAccounts = async () => {
        try {
            const queryAccounts     =   query(collection(db, "hugeBoard", "cpr", "accounts"));
            const querySnapshot     =   await getDocs(queryAccounts);
            const accountsArray = [];
            querySnapshot.docs.map( (snap, index) => (
                accountsArray.push({
                    id: snap.id,
                    ... snap.data(),
                    getSM: async function(){
                        try {
                            const accountRef    =   doc(db, snap.data().references.salesManager.path);
                            const accountSnap   =   await getDoc(accountRef);
                            return accountSnap.data();
                        } catch (error) {
                            console.log(error)
                        }
                    },
                    getMS: async function(){
                        try {
                            const accountRef    =   doc(db, snap.data().references.marketSegment.path);
                            const accountSnap   =   await getDoc(accountRef);
                            return accountSnap.data();
                        } catch (error) {
                            console.log(error)
                        }
                    }
                }),
                ( async () => {
                    accountsArray[index].salesManager   = await accountsArray[index].getSM();
                    accountsArray[index].marketSegment  = await accountsArray[index].getMS();
                } )()
            ) );
            setAccounts(accountsArray);
        } catch (error) {
            console.log('error:', error)
        }
    }

    const [test, setTest] = useState();

    const getTest = () => {
        const queryTest     =   doc(db, '/hugeBoard/cpr/salesManagers/7TkKhJxZ2EVZOE9sNuLl');
        onSnapshot(queryTest, (doc) => {
            console.log('test: ', doc.data());
            setTest(doc.data());
        });
    }

    useEffect( () => {
        getAccounts();
    }, [] );

    return (
        <dataContext.Provider value={{accounts}}>
            {children}
        </dataContext.Provider>
    )
}