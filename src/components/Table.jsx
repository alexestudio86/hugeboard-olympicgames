import style00 from './Table.module.css';


export function Table({operations}) {

    const {accounts, formatCurrency, filterRevenue2023,filterMinutes2023, average2023, filterRevenue2024, filterMinutes2024, average2024, formatPorcent, formatVariation, porcentVariation, quantityVariation} = operations;


    return (
        <table className={[style00["table-all"], style00["striped"], style00["hoverable"]].join(' ')}>
            <tbody>
                <tr>
                    <th rowSpan='2' className="theme-color-01">#</th>
                    <th rowSpan='2' className="theme-color-01">Ejecutivo</th>
                    <th rowSpan='2' className="theme-color-01">Cuenta</th>
                    <th rowSpan='2' className="theme-color-01">Giro</th>
                    <th rowSpan='1' className="theme-color-01">Ingresos</th>
                    <th rowSpan='1' className="theme-color-01">Minutos</th>
                    <th rowSpan='1' className="theme-color-01">Promedio</th>
                    <th rowSpan='1' className="theme-color-01">Ingresos</th>
                    <th rowSpan='1' className="theme-color-01">Minutos</th>
                    <th rowSpan='1' className="theme-color-01">Promedio</th>
                    <th rowSpan='1' colSpan='2' className="theme-color-01 center">Variación</th>
                </tr>
                <tr>
                    <th rowSpan='1' className="theme-color-01">2023</th>
                    <th rowSpan='1' className="theme-color-01">2023</th>
                    <th rowSpan='1' className="theme-color-01">2023</th>
                    <th rowSpan='1' className="theme-color-01">2024</th>
                    <th rowSpan='1' className="theme-color-01">2024</th>
                    <th rowSpan='1' className="theme-color-01">2024</th>
                    <th rowSpan='1' className="theme-color-01 center">%</th>
                    <th rowSpan='1' className="theme-color-01 center">#</th>
                </tr>
                {
                    accounts?.map( (account, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{account.salesManager ? account.salesManager.name : 'X'}</td>
                            <td>{account.name ?? 'X'}</td>
                            <td>{account.marketSegment ? account.marketSegment.name : 'X'}</td>
                            <td>{formatCurrency( account.revenue ? filterRevenue2023(account.revenue) : 0 )}</td>
                            <td>{account.revenue ? filterMinutes2023(account.revenue) : 0}</td>
                            <td>{formatCurrency( account.revenue ? average2023(account.revenue) : 0 )}</td>
                            <td>{formatCurrency( account.revenue ? filterRevenue2024(account.revenue) : 0 )}</td>
                            <td>{account.revenue ? filterMinutes2024(account.revenue) : 0}</td>
                            <td>{formatCurrency( account.revenue ? average2024(account.revenue) : 0 )}</td>
                            <td>{formatPorcent( account.revenue ? porcentVariation(account.revenue) : 0 )}</td>
                            <td>{formatVariation( account.revenue ? quantityVariation(account.revenue) : 0 )}</td>
                        </tr>
                    ) )
                }
            </tbody>
        </table>
    )
}