import { useEffect, useState } from "react";
import { useDataContext } from "../context/DataProvider";
import { formatCurrency, filterRevenue2023, filterMinutes2023, average2023, filterRevenue2024, filterMinutes2024, average2024 } from "./Production.Page.functions";
import { ViewsNav } from "../components/Views.Nav";
import { Table } from "../components/Table";
import { CPI } from "../components/CPI";

export function ProductionPage() {

    const {accounts} = useDataContext();




    const formatPorcent = (evt) => {
        if (evt > 1) {
            return  (
                <>
                    <span className="small">+</span>{(evt).toFixed(2)}<span className="small">%</span>
                </>
            )
        } else if (evt < 1) {
            return  (
                <>
                    {(evt).toFixed(2)}<span className="small">%</span>
                </>
            )
        } else {
            return  (
                <>
                    0<span className="small">%</span>{/*Para el caso de que el número sea exactamente 0*/}
                </>
            )
        }
    };
    const formatVariation = (evt) => {
        const currency = `${evt}`.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (evt > 1) {
            return  (
                <>
                    <span className="small">- $</span>{currency}
                </>
            )
        }else if(evt < 1){
            return  (
                <>
                    <span className="small">+ $</span>{currency}
                </>
            )
        } else {
            return  (
                <>
                    <span className="small">$</span>0{/* Para el caso de que el número sea exactamente 0 */}
                </>
            )
        }
    };
    const porcentVariation = (revenue = [{date:0, minutes:0, quantity:0}]) => {
        return ( ((filterRevenue2023(revenue) - filterRevenue2024(revenue))/filterRevenue2023(revenue))*100 )*(-1);
    };
    const quantityVariation = (revenue = [{date:0, minutes:0, quantity:0}]) => {
        return filterRevenue2023(revenue) - filterRevenue2024(revenue);
    };
    const [totals2023, setTotals2023] = useState({
        accounts:   0,
        amount:     0,
        minutes:    0
    });
    const [tab, setTab] = useState(0);
    const switchTab = () => {
        switch (tab) {
            case (0):
                return <Table operations={{accounts, formatCurrency, filterRevenue2023, filterMinutes2023, average2023, filterRevenue2024, filterMinutes2024, average2024, formatPorcent, formatVariation, porcentVariation, quantityVariation}} />
                break;
            case (1):
                return <CPI operations={{totals2023, formatCurrency}}/>
                break;
            default:
                return ''
                break;
        }
    };
    useEffect( () => {
        const arrayAmount2023 = [];
        const arrayMinutes2023 = [];
        accounts.map( (account, index) => {
            arrayAmount2023.push( filterRevenue2023(account.revenue) );
            arrayMinutes2023.push( filterMinutes2023(account.revenue) );
        });
        const amount2023 = arrayAmount2023.reduce( (accumulator, currentValue) => {return accumulator + currentValue},0 );
        const minutes2023 = arrayMinutes2023.reduce( (accumulator, currentValue) => {return accumulator + currentValue},0 );
        setTotals2023(
            {
                ...totals2023,
                accounts:   accounts.length,
                amount:     amount2023,
                minutes:    minutes2023
            }
        );
    },[]);
    return (
        <>
            <h1 className="py-2">Clean Report Management</h1>
            <ViewsNav operations={{tab, setTab}} />
            { switchTab() }
        </>
    )
}