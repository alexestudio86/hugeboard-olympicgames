import { Fragment, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getData } from "../context/DataProvider";


export function CPRPage() {

    const {accounts} = useLoaderData();
    const filter2023 = (revenue) => {
        const newMapa = revenue.filter( r => { return new Date(r.date.seconds*1000) > new Date( new Date().setFullYear(2022, 11, 31) ) && new Date(r.date.seconds*1000) < new Date( new Date().setFullYear(2023, 11, 31) ) } );
        const newRed = newMapa.reduce( (accumulator, item) => {return accumulator += item.quantity},0 );
        const currency = `${newRed}`.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return `$ ${currency}`;
    };
    const filter2024 = (revenue) => {
        const newMapa = revenue.filter( r => { return new Date(r.date.seconds*1000) > new Date( new Date().setFullYear(2023, 11, 31) ) && new Date(r.date.seconds*1000) < new Date( new Date().setFullYear(2024, 11, 31) ) } );
        const newRed = newMapa.reduce( (accumulator, item) => {return accumulator += item.quantity},0 );
        const currency = `${newRed}`.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return `$ ${currency}`;
    };

    return (
        <>
            <h1>Clean Report Management</h1>
            <table className="table-all bordered striped border hoverable">
                <tbody>
                    <tr className="theme-color-01">
                        <th>Ejecutivo</th>
                        <th>Cuenta</th>
                        <th>Giro</th>
                        <th>Ingresos 2023</th>
                        <th>Ingresos 2024</th>
                    </tr>
                    {
                        accounts
                        &&
                            accounts.length > 0
                            ?
                                accounts.map( (account, index) => (
                                    <tr key={index}>
                                        <td>{account.accountManager.name}</td>
                                        <td>{account.name}</td>
                                        <td>{account.segmentation.name}</td>
                                        <td>{filter2023(account.revenue)}</td>
                                        <td>{filter2024(account.revenue)}</td>
                                    </tr>
                                ) )
                            :
                                <tr>No accounts</tr>
                    }
                </tbody>
            </table>

        </>
    )
}