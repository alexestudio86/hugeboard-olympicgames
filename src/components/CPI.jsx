import { useEffect } from 'react';
import style01 from './CPI.module.css';


export function CPI ({operations}) {

    const {totals2023, formatCurrency} = operations;

    return(
        <>
            <div className="row text-center my-2">
                <div className="col">
                    <table className={[style01["table-all"], style01["striped"], style01["hoverable"]].join(' ')}>
                        <tbody>
                            <tr>
                                <th rowSpan='2'></th>
                                <th rowSpan='1' colSpan='3' className="center theme-color-01">2023</th>
                                <th rowSpan='1' colSpan='3' className="center theme-color-01">2024</th>
                            </tr>
                            <tr>
                                <th className="theme-color-01 center">ING</th>
                                <th className="theme-color-01 center">Minutes</th>
                                <th className="theme-color-01 center">Promedio</th>
                                <th className="theme-color-01 center">ING</th>
                                <th className="theme-color-01 center">Minutes</th>
                                <th className="theme-color-01 center">Promedio</th>
                            </tr>
                            <tr className={[style01['border']].join(' ')}>
                                <td>Cuentas</td>
                                <td className='right-align'>{totals2023.accounts}</td>
                                <td className='right-align'>{totals2023.minutes}</td>
                            </tr>
                            <tr className={[style01['border']].join(' ')}>
                                <td>Totales</td>
                                <td className='right-align'>{formatCurrency(totals2023.amount)}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="col">y</div>
            </div>
        </>
    )
}