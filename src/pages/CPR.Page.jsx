import { useDataContext } from "../context/DataProvider";


export function CPRPage() {

    const {accounts} = useDataContext()

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
                        accounts?.map( (account, index) => (
                            <tr key={index}>
                                <td>{account.salesManager.name}</td>
                                <td>{account.name}</td>
                                <td>{account.marketSegment.name}</td>
                                <td>{filter2023(account.revenue)}</td>
                                <td>{filter2024(account.revenue)}</td>
                            </tr>
                        ) )
                    }
                </tbody>
            </table>

        </>
    )
}